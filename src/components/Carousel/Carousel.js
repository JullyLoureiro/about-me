import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
  
    return (
      <div style={{backgroundColor:'red'}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <div style={{width: '100%', height: '100vh', flex: 1}}>teste</div>
                <Carousel.Caption>
                  <h3>teste</h3>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                  <div style={{width: '100%', height: '100vh', flex: 1}}>teste</div>
                <Carousel.Caption>
                  <h3>teste</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <div style={{width: '100%', height: '100vh', flex: 1}}>teste</div>
                <Carousel.Caption>
                  <h3>teste</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <div style={{width: '100%', height: '100vh', flex: 1}}>teste</div>
                <Carousel.Caption>
                  <h3>teste</h3>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
      </div>
   
    );
}