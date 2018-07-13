import React from "react";
import Slider from "react-slick";



class DigitalSlider extends React.Component {

  renderFriends = () => {
    return this.props.digital.map(digital => {
      return (
        <div className="digitalDiv">
          <img className="friendPic" src={digital.src} alt=""/>
          <div>{digital.name}</div>

          <br/>
          <div className="friendInfo">
            <label>User Name</label>
            <br/>
            <input className="friendDivName" type="text" defaultValue={digital.userName} />
            <br/>
            <label>Password</label>
            <br/>
            <input className="friendDivName" type="password" defaultValue={digital.password} />
            <br/>
            <label>Confirm Password</label>
            <br/>
            <input className="friendDivName" type="password" defaultValue={digital.password} />
            <br/>
            <label>Benieficiary</label>
            <select className="friendDivName">
              <option >Bill Stweart</option>
              <option >John Mayer</option>
              <option >Phillip Morisson</option>
              <option >Jimmy Page</option>
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

export default DigitalSlider
