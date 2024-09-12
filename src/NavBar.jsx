import { NavLink } from "react-router-dom";
import "./NavBar.css";
// NavLink is use to create a clickable links in the Navigation bar
function NavBar() {
  return (
    // Each NavLink has a 'to' attribute that specifies the page our route it will take the user to when clicked| 
    // This navBar has 3 clickable links: About, Characters and Spells.
    <nav className="navbar">
    <NavLink
    to="/"
    className="nav-link"
    > About
    </NavLink>
    <NavLink
    to="/characters"
    className="nav-link"
    >
      Characters
    </NavLink>
    <NavLink
    to="/spells"
    >
      Spells
    </NavLink>
    </nav>
    );
};

export default NavBar;
