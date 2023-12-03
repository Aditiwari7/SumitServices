import { Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from "../assets/c1.jpg";
import pic2 from "../assets/c2.jpg";
import pic3 from "../assets/c3.jpg";

function slide() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={500}>
        <img className="d-block vw-100" src={pic1} alt="c1"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img className="d-block vw-100" src={pic2} alt="c2"/>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img className="d-block vw-100" src={pic3} alt="c3"/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="p-5 bg-light">
      <h2 className="mb-3">Contact Us</h2>
      <div className="text-right">info@summitteleservices.com</div>
    </div>
    </>
  );
}

export default slide;