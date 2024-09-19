import search from "../assets/search.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef();
  const [isToggled, setIsToggled] = useState(false); // Initialize to false for closed state

  function showResNavbar() {
    setIsToggled(!isToggled);
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <>
      <nav ref={navRef}>
        <div className="navbar">
          <a className="logo">CoreOne</a>
          <ul className={`primary-list ${isToggled ? "active" : ""}`}>
            <li>
              <a>Latest</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Support</a>
            </li>
          </ul>

          <ul className="secondary-list">
            <li>
              <a>
                <img src={search} alt="Search" />
              </a>
            </li>
            <li>
              <a>
                <img src={cart} alt="Cart" />
              </a>
            </li>
            <li>
              <a>
                <img src={login} alt="Login" />
              </a>
            </li>

            <li className="nav-btn">
              <a onClick={showResNavbar}>
                {isToggled ? <FaTimes /> : <FaBars />}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
