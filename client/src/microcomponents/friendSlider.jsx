import React from "react";
import Slider from "react-slick";



class FriendSlider extends React.Component {

  renderFriends = () => {
    return this.props.friends.map(friend => {
      return (
        <div className="friendDiv">
          <input className="friendDivName" type="text" value={friend.name} onChange={this.props.handleChange}/>
          <div className="friendDivName">
            {friend.email}
          </div>
          <div className="friendDivName">
            {friend.relationship}
          </div>
        </div>
      )


    })
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true
    };
    return (
      <Slider {...settings}>
        {this.renderFriends()}
      </Slider>
    );
  }
}

export default FriendSlider
