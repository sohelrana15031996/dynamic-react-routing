import { useLoaderData, useNavigate } from "react-router-dom";


const SinglePost = () => {
  const singlePost = useLoaderData();
  const {body, title}= singlePost;

  const handleGoBack = () =>{
    navigate(-1);
  }
  const handleGoBackUser = () =>{
    navigate('/users');
  }

  const navigate = useNavigate()
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleGoBackUser}>Go to users</button>
    </div>
  );
};

export default SinglePost;