import search from "../assets/search.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <a className="logo">CoreOne</a>
          <ul className="primary-list">
            <li>
              <a>Latest</a>
            </li>
            <li>
              <a>Categories</a>
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
                <img src={search} />
              </a>
            </li>
            <li>
              <a>
                <img src={cart} />
              </a>
            </li>
            <li>
              <a>
                <img src={login} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
