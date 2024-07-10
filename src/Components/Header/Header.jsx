import { Link, NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <div>
      <h1>Hi Dev</h1>
      <nav >
        <Link className="doStyle" to="/">Home</Link>
        <Link className="doStyle" to="/about">About Us</Link>
        <Link className="doStyle" to="/contact">Contact</Link>
        <NavLink className="doStyle" to="/users">Users</NavLink>
        <NavLink className="doStyle" to="/posts">Posts</NavLink>
      </nav>
      <h6>Down here you will see the changes</h6>
    </div>
  );
};

export default Header;