import initWebgazer from "./init_webgazer.js";
import Walker from "./walker.js";
import corr from "./compute_correlation.js";

const openFullscreen = () => {
  const elem = document.body;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

const data = {
  walker: {
    xs: [],
    ys: [],
  },
  eye: {
    xs: [],
    ys: [],
  },
};

$(document).ready(() => {
  setTimeout(()=>{
  const canvas = document.getElementById("plotting_canvas");
    canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";

  $(".Calibration").hide();
  initWebgazer(()=>{

  const walker = new Walker("plotting_canvas");
  walker.start();

  const minutes = 1.0;

  setTimeout(() => {
    walker.stop();
    webgazer.end();
    const rx = corr(data.walker.xs, data.eye.xs);
    const ry = corr(data.walker.ys, data.eye.ys);
    const r = (rx + ry) / 2;

    Swal.fire(`Accuracy=${r}`, "good job", "success");
  }, minutes * 1000 * 60);

  webgazer.setGazeListener((eyePosition, clock) => {
    //   console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
    //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
    if (eyePosition){
      data.eye.xs.push(eyePosition.x);
      data.eye.ys.push(eyePosition.y);
      data.walker.xs.push(walker.x);
      data.walker.ys.push(walker.y);
    }
  });
  });

  }, 1000)
});
