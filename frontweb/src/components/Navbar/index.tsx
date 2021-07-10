import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/">
        <h2>Github API</h2>
      </Link>
    </nav>
  );
};

export default Navbar;
