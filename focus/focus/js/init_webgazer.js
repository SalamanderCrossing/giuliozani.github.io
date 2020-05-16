import calibrate from './calibration.js';

const openFullscreen = () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    // elem.mozRequestFullScreen();
    // document.documentElement.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

const initWebgazer = (res, onWebgazerReady) => {
  // $(".calibration").show();
  // start the webgazer tracker
  webgazer
      .setRegression('ridge') /* currently must set regression and tracker */
      .setTracker('clmtrackr')
      .setGazeListener(function(data, clock) {})
      .begin()
      .showPredictionPoints(
          true,
      ); /* shows a square every 100 milliseconds where current prediction is */
  // Set up the webgazer video feedback.

  const checkIfReady = () => {
    if (webgazer.isReady()) {
      onWebgazerReady();
      calibrate(res);
      // res();
    } else {
      setTimeout(checkIfReady, 100);
    }
  };
  setTimeout(checkIfReady, 100);
};

export default initWebgazer;
