import latestphone from "../assets/latestPhone.png";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="latest-release">
          <img src={latestphone} />
        </div>
      </section>
    </>
  );
}
