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

window.showPlot = () => {
  window.document.getElementById("btn_show_plot").style.display = "none";
  const ys = accuracies.map((acc) =>
    Math.min(1.0, round((100 * acc) / accuracy))
  );
  const xs = accuracies.map((_, i) => i * 10 + 5);
  const trace = {
    x: xs,
    y: ys,
    mode: "lines+markers",
    type: "scatter",
  };
  const layout = {
    width: 600,
    height: 400,
    xaxis: {
      title: "seconds",
    },
    yaxis: {
      title: "focus",
      range: [0, 1.0],
    },
  };
  Plotly.newPlot("plot", [trace], layout);
};
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
  window.localStorage.clear();
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
    allowOutsideClick: false,
    html: `
          Check that your face position is all right and remember, don't move! 
          <br>
          The task now is to <strong>follow the red dot with your gaze</strong>.
          <br>
          <br>
          <table style="width:100%">
            <tr>
              <td>Time:</td>
              <td id='time'>1m</td>
              <td><input id='time_input' type='range' value='1' min='1' max='10' onchange='onSelectChange(this)'></td>
            </tr>
          </table>
          `,
    confirmButtonText: "Go!",
  }).then(() => {
    document.getElementById("webgazerVideoFeed").style.display = "none";
    const walker = new Walker("plotting_canvas");
    walker.start();
    webgazer.setGazeListener((eyePosition, clock) => {
      if (eyePosition) {
        data.eye.xs.push(eyePosition.x);
        data.eye.ys.push(eyePosition.y);
        data.walker.xs.push(walker.x);
        data.walker.ys.push(walker.y);
      }
    });
    const interval = setInterval(addAccuracy, 10 * 1000);

    setTimeout(() => {
      if (data.eye.length > 0) {
        console.log("updating accuracy");
        addAccuracy();
      }
      walker.stop();
      //webgazer.end();
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
      document.getElementById("webgazerVideoFeed").style.display = "block";
      Swal.fire({
        title: `Focus: ${result === 1 ? "100%" : toPerc(result)}`,
        html: `
              <button id='btn_show_plot' onclick="showPlot()" type="button" class="btn btn-info">show plot</button>
              <div id='plot'></div>
        `,
        icon: "success",
        customClass: "swal-wide",
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: "again",
        cancelButtonText: "reload",
      }).then((result) => {
        if (result.value) {
          play();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          window.location.reload(false);
        }
      });
    }, seconds * 1000 + 1000);
  });
};

const calibrate = () => {
  //openFullscreen(canvas);
  window.localStorage.clear();
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
    Swal.fire({
      title: "Welcome to Focus",
      allowOutsideClick: false,
      html: `
        Online smooth pursuit. 
        <br>
        <br>
        <div style='text-align:left'>
         Make sure there's enough light around you.<br>
          You'll see a video stream in the upper left corner, adjust your face position such that the green contour fits it.
           When you've found the right position don't move!
        </div>
      `,
      footer: `
      <a href="https://webgazer.cs.brown.edu/">Built using webgazer.</a>
      `,
    }).then(() => {
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
