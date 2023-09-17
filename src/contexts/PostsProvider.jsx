import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostsContext from './PostsContext';

const PostsProvider = ({ children }) => {
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsPostsLoading(true);

    const fetchMedia = async (mediaUrl) => {
      try {
        const mediaResponse = await fetch(mediaUrl);
        const mediaData = await mediaResponse.json();
        return mediaData.source_url;
      } catch (error) {
        return null;
      }
    };

    fetch('https://mccmd.org/wp-json/wp/v2/posts?_fields=id,title,slug,excerpt,content,_links')
      .then(response => response.json())
      .then(data => {
        const fetchPromises = data.map((post) => {
          const mediaUrl = post._links?.['wp:featuredmedia']?.[0]?.href;
          return mediaUrl ? fetchMedia(mediaUrl) : Promise.resolve(null);
        });

        return Promise.all(fetchPromises).then((mediaUrls) => {
          const postsWithMedia = data.map((post, index) => ({
            ...post,
            featuredMedia: mediaUrls[index],
          }));

          setPosts(postsWithMedia);
          setIsPostsLoading(false);
        });
      })
      .catch(() => {
        setIsPostsLoading(false);
      });
  }, []);

  const value = {
    isPostsLoading,
    posts,
    setPosts,
  };

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsProvider;
