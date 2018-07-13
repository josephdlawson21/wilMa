import React from "react";
import Slider from "react-slick";



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true
    };
    return (
      <Slider {...settings}>
        <div className="treasureDiv" >
          <img  src="http://www.palacepointe.com/wp-content/uploads/2016/01/adult-birthday-parties.jpg" alt=""/>
        </div>
        <div className="treasureDiv">
          <iframe width="400" height="400"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0">
          </iframe>
        </div>
        <div className="treasureDiv">
          <video className="video" type="video/mp4" controls>
            <source src="https://ipfs.infura.io/ipfs/QmQUQh7pgxmSQBUYb8wnJY95aSZXzA6B9JkwTjsBcgTvoS" type="video/mp4"/>
          </video>
        </div>
        <div className="treasureDiv">
          <embed width="400" height="450px" name="plugin" id="plugin" src="https://ipfs.infura.io/ipfs/QmQkGojWVKm1PuywNqhs3Du2qi5ctWR82jnSp7KQy9qQF3" type="application/pdf" internalinstanceid="7"/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider
