import { Link } from "react-router";
import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="nav">
      <Link to="/" className="WheelofBuckets">
        Wheel of Buckets
      </Link>
      <div class="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/createBuckets">Create Buckets</NavLink>
        </li>
        <li>
          <NavLink to="/spinWheel">Spin Wheel</NavLink>
        </li>
      </ul>
    </nav>
  );
}
