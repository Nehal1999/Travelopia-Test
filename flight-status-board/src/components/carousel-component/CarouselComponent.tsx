import React from 'react';
import img1 from '../../assets/images/beech.jpeg';
import img2 from '../../assets/images/ship.jpeg';
import img3 from '../../assets/images/flight.jpeg';
import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = ()=>{
    return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img1}
		  height={400}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Explore beautiful beaches</h3>
          <p>With Travelopia, have experience of liftime</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img2}
		  height={400}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our luxurious cruise</h3>
          <p>We provide adventure with no worry</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img3}
		  height={400}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best Experience</h3>
          <p>
            Book your flights with Travelopia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default CarouselComponent;