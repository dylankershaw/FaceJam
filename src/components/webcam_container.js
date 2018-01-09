import React, { Component } from "react";
import Webcam from "react-webcam";

class WebcamContainer extends Component {
  componentDidMount() {
    setInterval(() => {
      const screenshot = this.webcam.getScreenshot();
      console.log(screenshot);
    }, 5000);
  }

  render() {
    return (
      <Webcam
        audio={false}
        ref={node => (this.webcam = node)}
        screenshotFormat="image/jpeg"
        height="200"
      />
    );
  }
}

export default WebcamContainer;
