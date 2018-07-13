import React from "react";
import Slider from "react-slick";



class FriendSlider extends React.Component {

  renderFriends = () => {
    return this.props.friends.map(friend => {
      return (
        <div className="friendDiv">
          <img className="friendPic" src={friend.src} alt=""/>
          <div>{friend.name}</div>

          <br/>
          <div className="friendInfo">
            <label>Full Name</label>
            <br/>
            <input className="friendDivName" type="text" defaultValue={friend.name} />
            <br/>
            <label>Email</label>
            <br/>
            <input className="friendDivName" type="text" defaultValue={friend.email} />
            <br/>
            <label>Relationship</label>
            <br/>
            {/* <input className="friendDivName" type="text" defaultValue={friend.relationship} /> */}
            <select className="friendDivName">
              <option >{friend.relationship}</option>
              <option >husband</option>
              <option >brother</option>
              <option >sister</option>

            </select>
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
