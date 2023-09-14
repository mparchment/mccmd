import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostsContext from './PostsContext';

const PostsProvider = ({ children }) => {
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsPostsLoading(true);
    fetch('https://mccmd.org/wp-json/wp/v2/posts?_fields=id,title,excerpt,_links')
      .then(response => response.json())
      .then(async (data) => {
        const postsWithMedia = await Promise.all(data.map(async (post) => {
            if (post._links && post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'].length > 0) {
                const mediaUrl = post._links['wp:featuredmedia'][0].href;
                const mediaResponse = await fetch(mediaUrl);
                const mediaData = await mediaResponse.json();
                const imageUrl = mediaData.source_url;
                return {
                ...post,
                featuredMedia: imageUrl,
                };
            }
            return {
                ...post,
                featuredMedia: null,
            };
            }));
        setPosts(postsWithMedia);
        setIsPostsLoading(false);
      })
      .catch(() => {
        setIsPostsLoading(false);
      });
  }, []);

  const value = {
    isPostsLoading,
    posts,
    setPosts
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
