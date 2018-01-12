import { connect } from "react-redux";
import React, { Component } from "react";

import { setSong } from "../actions";

class AudioPlayer extends Component {
  render() {
    return (
      <div>
        <audio controls autoPlay>
          <source src={this.props.song} />
        </audio>
      </div>
    );
  }
}

function mapStateToProps({ emotions, song }) {
  return { emotions, song };
}

export default connect(mapStateToProps, { setSong })(AudioPlayer);
