import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsReddit,
  selectRedditPosts,
  isPostsLoading,
  fetchCommentsReddit,
} from '../../features/Reddit/redditSlice';
import Post from '../Post/Post';
//import { AnimatedList } from 'react-animated-list';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectRedditPosts);
  const postsLoading = useSelector(isPostsLoading);


  useEffect(() => {
    dispatch(fetchPostsReddit());
  }, [dispatch]);

  

  if (postsLoading) return <div>Loading Posts</div>;

  return (
    <div className="w-auto">
      <div className="flex items-center justify-center flex-col">
        {posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            index={index}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
