import React from "react";

import EmotionsContainer from "./components/emotions_container";
import WebcamContainer from "./components/webcam_container";
import AudioPlayer from "./components/audio_player";

const App = () => {
  return (
    <div>
      <WebcamContainer />
      <EmotionsContainer />
      <AudioPlayer />
    </div>
  );
};

export default App;
