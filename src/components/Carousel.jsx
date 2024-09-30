import Carousel from "react-bootstrap/Carousel";
import latestPhone from "../assets/latestPhone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function UncontrolledExample() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img src={latestPhone} />
        <Carousel.Caption>
          <div className="productName">
            <p>iPhone 14 Pro</p>
            <FontAwesomeIcon icon={faApple} />
            <h4>Now Available</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={latestPhone} />
        <Carousel.Caption>
          <div className="productName">
            <p>iPhone 14 Pro</p>
            <FontAwesomeIcon icon={faApple} />
            <h4>Now Available</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={latestPhone} />
        <Carousel.Caption>
          <div className="productName">
            <p>iPhone 14 Pro</p>
            <FontAwesomeIcon icon={faApple} />
            <h4>Now Available</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
