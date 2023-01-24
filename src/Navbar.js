import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/" id="title">Dojo Blog</Link>
            <div className="links">
                <NavLink to='/create'>Add Blog</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;