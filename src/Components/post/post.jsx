import PropTypes from 'prop-types';
import './post.css'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
  const {title, id} =post;
  return (
    <>
    <Link to={`/posts/${id}`}>
    <div className='postDiv'>
      <h4>{title}</h4>
      <button>Read full post</button>
    </div>
    </Link>
    
    </>
  );
};

Post.propTypes = {
  post:PropTypes.object,
};

export default Post;