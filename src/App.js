import React from "react";

import EmotionsContainer from "./components/emotions_container";
import WebcamContainer from "./components/webcam_container";

const App = () => {
  return (
    <div>
      <WebcamContainer />
      <EmotionsContainer />
    </div>
  );
};

export default App;
