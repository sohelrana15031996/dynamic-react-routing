import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './users.css'

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h5>Users: {users.length}</h5>
      <div className="divStyle">
        {
          users.map(user =><User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;