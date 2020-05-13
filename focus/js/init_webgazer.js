import calibrate from "./calibration.js";

const openFullscreen = () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    //elem.mozRequestFullScreen();
    //document.documentElement.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

const initWebgazer = (res, onWebgazerReady) => {
  //$(".calibration").show();
  //start the webgazer tracker
  webgazer
    .setRegression("ridge") /* currently must set regression and tracker */
    .setTracker("clmtrackr")
    .setGazeListener(function (data, clock) {})
    .begin()
    .showPredictionPoints(
      true
    ); /* shows a square every 100 milliseconds where current prediction is */
  //Set up the webgazer video feedback.

  function checkIfReady() {
    if (webgazer.isReady()) {
      onWebgazerReady();
      calibrate(res);
    } else {
      setTimeout(checkIfReady, 100);
    }
  }
  setTimeout(checkIfReady, 100);
};

window.onbeforeunload = function () {
  //webgazer.end(); //Uncomment if you want to save the data even if you reload the page.
  //window.localStorage.clear(); //Comment out if you want to save data across different sessions
};

export default initWebgazer;
