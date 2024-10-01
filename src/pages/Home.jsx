import { Link } from "react-router-dom";
import EmblaCarousel from "../components/EmblaCarousel";
import { Categories } from "../categories";
import Carousel from "../components/Carousel";

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 8;

export default function Home() {
  return (
    <>
      <section className="hero">
        <Carousel />
      </section>
      <section id="categories">
        <h2>Categories</h2>
        <EmblaCarousel Categories={Categories} options={OPTIONS} />
      </section>
    </>
  );
}
