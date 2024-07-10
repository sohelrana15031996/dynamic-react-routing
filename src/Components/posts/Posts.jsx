

import { useLoaderData } from 'react-router-dom';
import Post from '../post/post';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3>Here will appare lot of posts</h3>
      <div>
        {
          posts.map(post=><Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};



export default Posts;