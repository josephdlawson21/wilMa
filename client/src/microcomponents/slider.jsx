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
          <video type="video/mp4" controls>
            <source src="https://ipfs.infura.io/ipfs/QmQUQh7pgxmSQBUYb8wnJY95aSZXzA6B9JkwTjsBcgTvoS" type="video/mp4"/>
          </video>
        </div>
        <div className="sliderDiv">
          <embed width="100%" height="300px" name="plugin" id="plugin" src="https://ipfs.infura.io/ipfs/QmQkGojWVKm1PuywNqhs3Du2qi5ctWR82jnSp7KQy9qQF3" type="application/pdf" internalinstanceid="7"/>
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
