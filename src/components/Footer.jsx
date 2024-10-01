import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/social.png";
import phone from "../assets/phone.png";
import apple from "../assets/apple.png";
import googlePlay from "../assets/google-play.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Coreone Stores</h3>
          <p>
            <a href="#">About us</a>
          </p>
          <p>
            <a href="#">Contact us</a>
          </p>
          <p>
            <a href="#">Support</a>
          </p>
          <p>
            <a href="#">Return Policy</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Shipping Policy</a>
          </p>
          <p>
            <a href="#">FAQs</a>
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>
            <img src={phone} />
            17985
          </h3>
          <p>
            <a>sales@coreone.com</a>
          </p>
          <p>
            Hyde Park, New Cairo,
            <br /> Beverly Hills,
            <br /> Cairo, EG
          </p>
        </div>

        <div className="footer-section mobile-app">
          <h3>Coreone Mobile App</h3>
          <a href="#">
            <img src={apple} alt="Download on the App Store" />
            <p>App Store</p>
          </a>
          <a href="#">
            <img src={googlePlay} alt="Get it on Google Play" />
            <p>Google Play</p>
          </a>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter</p>
          <form action="#">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </form>
          <div className="social-icons">
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          CoreOne is the one-stop shop for all your electronics needs, offering
          a wide range of products, expert guidance, and top-notch after-sales
          support, along with financing options, training, and exclusive
          promotions.
        </p>
      </div>
    </footer>
  );
}
