import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <div className="wrapper">
                    <Link to="/" className="links">Home</Link>
                    <Link to="/about" className="links">About</Link>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;