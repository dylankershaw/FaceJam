import { connect } from "react-redux";
import React from "react";

import Emotion from "./emotion";

const EmotionContainer = ({ emotions }) => {
  return (
    <div>
      {Object.keys(emotions).map(emotion => (
        <Emotion key={emotion} type={emotion} value={emotions[emotion]} />
      ))}
    </div>
  );
};

function mapStateToProps({ emotions }) {
  return { emotions };
}

export default connect(mapStateToProps)(EmotionContainer);
