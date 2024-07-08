import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
  const user = useLoaderData();
  const {name, email}= user;
  return (
    <div>
      <h4>Here you will get user data</h4>
      <h1>User Name: {name}</h1>
      <p>EMail: {email}</p>
    </div>
  );
};

export default UserDetails;