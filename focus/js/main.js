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
const accuracies = [];
const savePositions = () => {};
const addAccuracy = () => {
  const rx = corr(data.walker.xs, data.eye.xs);
  const ry = corr(data.walker.ys, data.eye.ys);
  const r = (rx + ry) / 2;
  console.log(r);
  accuracies.push(r);
  data.walker.xs = [];
  data.walker.ys = [];
  data.eye.xs = [];
  data.eye.ys = [];
};
const round = (num) => Math.round((num + Number.EPSILON) * 1000) / 1000;
const toPerc = (num) => {
  const rounded = String(round(num));
  return `${rounded.slice(2, 4)}.${rounded[4] !== undefined ? rounded[4] : 0}%`;
};
$(document).ready(() => {
  setTimeout(() => {
    $(".calibration").hide();
    Swal.fire(
      "Allow fullscreen?",
      "Fullscreen improves focus",
      "question"
    ).then(() => {
      openFullscreen();
      const canvas = document.getElementById("plotting_canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = "fixed";
      const context = canvas.getContext("2d");
      //context.fillStyle = "#000000";
      //context.fillRect(0, 0, canvas.width, canvas.height);

      initWebgazer((accuracy) => {
        canvas.style.cursor = "none";
        webgazer.showPredictionPoints(false);
        Swal.fire({
          title: "Ready?",
          html:
            "Check that your face position is all right and remember not to move it!",
          confirmButtonText: "Go!",
        }).then(() => {
          const walker = new Walker("plotting_canvas");
          walker.start();

          const seconds = 60;

          setTimeout(() => {
            if (data.eye.length > 0) {
              console.log("updating accuracy");
              addAccuracy();
            }
            window.localStorage.clear();
            walker.stop();
            webgazer.end();
            clearInterval(interval);
            console.log(accuracies);
            const r = accuracies.reduce((x, y) => x + y, 0) / accuracies.length;
            const result = Math.min((100 * r) / accuracy, 1.0);
            console.log(
              `Accuracy:${accuracy}
            Pearson's r:${r}
            Result = min(r / Accuracy, 1.0) = ${result}
            `
            );
            console.log(r);
            Swal.fire(
              `Focus: ${toPerc(result)}`,
              "Congratulations!",
              "success"
            );
          }, seconds * 1000);

          webgazer.setGazeListener((eyePosition, clock) => {
            if (eyePosition) {
              data.eye.xs.push(eyePosition.x);
              data.eye.ys.push(eyePosition.y);
              data.walker.xs.push(walker.x);
              data.walker.ys.push(walker.y);
            }
          });
          const interval = setInterval(addAccuracy, 10 * 1000);
        });
      });
    });
  }, 1000);
});
