import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import Logo from "../assets/logo.png";
export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo bg-slate-500">
        <img className="logo" src={Logo} alt="Logo" />
        <p>Shopping Cart</p>
      </Link>
      <nav className="navigation bg-slate-500">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/Cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/Cart" className="items">
        <span> Cart: 2</span>
      </Link>
    </div>
  );
};
