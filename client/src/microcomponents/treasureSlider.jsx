import React from "react";
import Slider from "react-slick";

class TreasureSlider extends React.Component {
  renderTreasures = () => {
    return this.props.treasures.map(treasure => {
      return (
        <div class="treasureOverall">
          <div className="treasureDivImg">
            <img src={treasure.address} />
          </div>

          <div className="treasureDivTxt">
            <h2>Type: {treasure.type}</h2>
            <h2>Value: ${treasure.value}</h2>
          </div>
        </div>
      );
    });
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true
    };
    return <Slider {...settings}>{this.renderTreasures()}</Slider>;
  }
}

export default TreasureSlider
