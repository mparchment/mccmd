import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostsContext from './PostsContext';

const PostsProvider = ({ children }) => {
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsPostsLoading(true);

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://mccmd.org/wp-json/wp/v2/categories');
        return await response.json();
      } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
      }
    };

    const fetchMedia = async (mediaUrl) => {
      try {
        const mediaResponse = await fetch(mediaUrl);
        const mediaData = await mediaResponse.json();
        return mediaData.source_url;
      } catch (error) {
        return null;
      }
    };

    const fetchPostsAndMedia = async () => {
      try {
        const postsResponse = await fetch('https://mccmd.org/wp-json/wp/v2/posts?_fields=id,title,slug,excerpt,content,_links,categories');
        const postsData = await postsResponse.json();

        const mediaPromises = postsData.map((post) => {
          const mediaUrl = post._links?.['wp:featuredmedia']?.[0]?.href;
          return mediaUrl ? fetchMedia(mediaUrl) : Promise.resolve(null);
        });

        const mediaUrls = await Promise.all(mediaPromises);

        const postsWithMedia = postsData.map((post, index) => ({
          ...post,
          featuredMedia: mediaUrls[index],
        }));

        return postsWithMedia;
      } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
      }
    };

    const fetchData = async () => {
      try {
        const [categories, postsWithMedia] = await Promise.all([fetchCategories(), fetchPostsAndMedia()]);

        const postsWithCategories = postsWithMedia.map(post => ({
          ...post,
          category: post.categories.map(
            catId => categories.find(category => category.id === catId)?.name
          ).filter(Boolean)
        }));

        setPosts(postsWithCategories);
        setIsPostsLoading(false);
      } catch (error) {
        setIsPostsLoading(false);
      }
    };

    fetchData();
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
