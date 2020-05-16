/*
 * Sets store_points to true, so all the occuring prediction
 * points are stored
 */
function store_points_variable() {
  store_points_var = true;
}

/*
 * Sets store_points to false, so prediction points aren't
 * stored any more
 */
function stop_storing_points_variable() {
  store_points_var = false;
}

/*
 * Returns the stored tracker prediction points
 */
function get_points() {
  var past50 = new Array(2);
  past50[0] = xPast50;
  past50[1] = yPast50;
  return past50;
}
/*
 * This function calculates a measurement for how precise
 * the eye tracker currently is which is displayed to the user
 */

const mean = (xs) => xs.reduce((x, y) => x + y, 0) / xs.length;

function calculatePrecision(past50Array) {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  // Retrieve the last 50 gaze prediction points
  var x50 = past50Array[0];
  var y50 = past50Array[1];

  // Calculate the position of the point the user is staring at
  var staringPointX = mean(x50);
  var staringPointY = mean(y50);

  var precisionPercentages = new Array(50);
  calculatePrecisionPercentages(
    precisionPercentages,
    windowHeight,
    x50,
    y50,
    staringPointX,
    staringPointY
  );
  var precision = calculateAverage(precisionPercentages);

  // Return the precision measurement as a rounded percentage
  return Math.round(precision);
}
/*
const variance = (xs, mean) =>
  Math.sqrt(xs.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / xs.length);
const calculateprecison = (past50Array) => {
  const xs = past50Array[0]
  const ys = past50Array[1]
  const meanX = mean(past50Array[0]);
  const meanY = mean(past50Array[1]);
  const varX = variance(xs, meanX);
  const varY = varicane(ys, meanY);
  return 
};
*/

/*
 * Calculate percentage accuracy for each prediction based on distance of
 * the prediction point from the centre point (uses the window height as
 * lower threshold 0%)
 */
function calculatePrecisionPercentages(
  precisionPercentages,
  windowHeight,
  x50,
  y50,
  staringPointX,
  staringPointY
) {
  for (let x = 0; x < 50; x++) {
    // Calculate distance between each prediction and staring point
    var xDiff = staringPointX - x50[x];
    var yDiff = staringPointY - y50[x];
    var distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    // Calculate precision percentage
    var halfWindowHeight = windowHeight / 2;
    var precision = 0;
    if (distance <= halfWindowHeight && distance > -1) {
      precision = 100 - (distance / halfWindowHeight) * 100;
    } else if (distance > halfWindowHeight) {
      precision = 0;
    } else if (distance > -1) {
      precision = 100;
    }

    // Store the precision
    precisionPercentages[x] = precision;
  }
}

/*
 * Calculates the average of all precision percentages calculated
 */
function calculateAverage(precisionPercentages) {
  var precision = 0;
  for (let x = 0; x < 50; x++) {
    precision += precisionPercentages[x];
  }
  precision = precision / 50;
  return precision;
}

export {
  store_points_variable,
  stop_storing_points_variable,
  get_points,
  calculatePrecision,
};
