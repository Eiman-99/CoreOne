import latestphone from "../assets/latestPhone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import EmblaCarousel from "../components/EmblaCarousel";

import iphones from "../assets/iphones.jpg";
import macbooks from "../assets/macbooks.jpg";
import ipads from "../assets/ipads.jpg";
import airpods from "../assets/airpods.jpg";
import watches from "../assets/watches.jpg";

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 8;
export const Categories = [
  {
    img: iphones,
  },
  {
    img: macbooks,
  },
  {
    img: ipads,
  },
  {
    img: airpods,
  },
  {
    img: watches,
  },
];

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
      <section id="categories">
        <h2>Categories</h2>
        <EmblaCarousel Categories={Categories} options={OPTIONS} />
      </section>
    </>
  );
}
