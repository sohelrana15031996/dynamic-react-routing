import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
  const user = useLoaderData();
  const {name, email}= user;

  const navigate = useNavigate();

  const handleGoBackToHome = ()=>{
    navigate('/');
  }
  return (
    <div>
      <h4>Here you will get user data</h4>
      <h1>User Name: {name}</h1>
      <p>EMail: {email}</p>
      <button onClick={handleGoBackToHome}>Go back to home</button>
    </div>
  );
};

export default UserDetails;