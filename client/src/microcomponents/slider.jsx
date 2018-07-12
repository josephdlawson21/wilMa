import React from "react";
import Slider from "react-slick";



class SimpleSlider extends React.Component {
  render() {
    var settings = {
    };
    return (
      <Slider {...settings}>
        <div className="sliderDiv" >
          <img  src={require('./will.png')} alt=""/>
        </div>
        <div className="sliderDiv">
          <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
          </iframe>
        </div>
        <div className="sliderDiv">
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider
