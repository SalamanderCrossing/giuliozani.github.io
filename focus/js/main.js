import initWebgazer from "./init_webgazer.js";
import Walker from "./walker.js";
import corr from "./compute_correlation.js";

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
let canvas = null;
let data = {
  walker: {
    xs: [],
    ys: [],
  },
  eye: {
    xs: [],
    ys: [],
  },
};
let seconds = 60;
let accuracies = [];
let accuracy = 0;
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
  const rounded = String(round(Math.abs(num)));
  return `${rounded.slice(2, 4)}.${rounded[4] !== undefined ? rounded[4] : 0}%`;
};
window.onSelectChange = (element) => {
  const num = Math.floor(Number(element.value));
  seconds = 60 * num;
  document.getElementById("time").innerHTML = `${num}m`;
  console.log(num);
};

const play = () => {
  data = {
    walker: {
      xs: [],
      ys: [],
    },
    eye: {
      xs: [],
      ys: [],
    },
  };
  accuracies = [];

  canvas.style.cursor = "none";
  webgazer.showPredictionPoints(false);
  Swal.fire({
    title: "Ready?",
    html: `
          Check that your face position is all right and remember, don't move! 
          <br>
          The task now is to <strong>follow the red dot with your gaze</strong>.
          <table style="width:100%">
            <tr>
              <th><input id='time_input' type='range' value='1' min='1' max='10' onchange='onSelectChange(this)'></th>
              <th id='time'>1m</th>
            </tr>
          </table>
          `,
    confirmButtonText: "Go!",
  }).then(() => {
    const walker = new Walker("plotting_canvas");
    walker.start();

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
        `
            Accuracy:${accuracy}
            Pearson's r:${r}
            Result = min(r / Accuracy, 1.0) = ${result}
            `
      );
      console.log(r);
      Swal.fire({
        title: `Focus: ${toPerc(result)}`,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "again",
        cancelButtonText: "recalibrate",
      }).then((result) => {
        if (result.value) {
          play();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          calibrate();
        }
      });
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
};

const calibrate = () => {
  //openFullscreen(canvas);
  const context = canvas.getContext("2d");
  //context.fillStyle = "#000000";
  //context.fillRect(0, 0, canvas.width, canvas.height);
  initWebgazer(
    (newAccuracy) => {
      accuracy = newAccuracy;
      play();
    },
    () => {
      setTimeout(() => {
        openFullscreen();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
      }, 1000);
    }
  );
};

$(document).ready(() => {
  canvas = document.getElementById("plotting_canvas");

  setTimeout(() => {
    $(".calibration").hide();
    Swal.fire(
      "Welcome to Focus",
      `
        Online smooth pursuit. 
        <div style='text-align:left'>
          You'll see a video stream in the upper left corner, adjust your face position such that the green face contour fits it. When you've found the right position don't move!
          <br>
          Notice: you'll need to grant webcam acces to use Focus.
        </div>
      `
    ).then(() => {
      /*
      
      */

      calibrate();
    });
  }, 500);
  /*
  const canvas = document.getElementById("plotting_canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";

  const walker = new Walker("plotting_canvas");
  walker.start();
  */
});
