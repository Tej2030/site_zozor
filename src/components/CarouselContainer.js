import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselContainer() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>
      
      <Carousel  activeIndex={index} pause={'hover'}  controls={false} indicators={false} onSelect={handleSelect}>
        <Carousel.Item className="items" interval={2000}>
          <img
            className="d-block w-100"
            src="images/1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="items" interval={2000}>
          <img
            className="d-block w-100"
            src="images/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="items" interval={2000}>
          <img
            className="d-block w-100"
            src="images/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
        
      </Carousel>
    </div>
  );
}

export default CarouselContainer;