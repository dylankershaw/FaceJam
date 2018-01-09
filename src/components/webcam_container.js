import React, { Component } from "react";
import Webcam from "react-webcam";

class WebcamContainer extends Component {
  render() {
    return <Webcam audio={false} screenshotFormat="image/jpeg" />;
  }
}

export default WebcamContainer;
