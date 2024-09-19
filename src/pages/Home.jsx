import latestphone from "../assets/latestPhone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <section className="hero">
        {/* <h3 className="title line1">Core Product,</h3>
        <h3 className="title line2">Prime Performance</h3> */}
        <div className="productName">
          <p>iPhone 14 Pro</p>

          <FontAwesomeIcon icon={faApple} />

          <h4>Now Available</h4>
        </div>
        <div className="latest-release">
          <img src={latestphone} />
        </div>
      </section>
    </>
  );
}
