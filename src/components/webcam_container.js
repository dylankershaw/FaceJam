import React, { Component } from "react";
import { connect } from "react-redux";
import Webcam from "react-webcam";

import { getEmotions } from "../actions";

class WebcamContainer extends Component {
  componentDidMount() {
    setInterval(() => {
      const screenshot = this.webcam.getScreenshot();
      this.props.getEmotions(screenshot);
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

export default connect(null, { getEmotions })(WebcamContainer);
