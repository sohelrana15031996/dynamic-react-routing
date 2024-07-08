
import { Link } from 'react-router-dom';
import './user.css'
const User = ({user}) => {
  const{name, email, phone,id} = user;
  return (
    <div className='userDiv'>
      <h4>{name}</h4>
      <p>{phone}</p>
      <p>{email}</p>
      <Link to={`/users/${id}`}><button>Show Details</button></Link>
    </div>
  );
};

export default User;