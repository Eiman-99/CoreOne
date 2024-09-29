import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import EmblaCarousel from "../components/EmblaCarousel";
import { Categories } from "../categories";
import CarouselFadeExample from "../components/Carausel";
import latestphone from "../assets/latestPhone.png";

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 8;

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
          <img src={latestphone} alt="hero-image" />
        </div>
        {/* <CarouselFadeExample /> */}
      </section>
      <section id="categories">
        <h2>Categories</h2>
        <EmblaCarousel Categories={Categories} options={OPTIONS} />
      </section>
    </>
  );
}
