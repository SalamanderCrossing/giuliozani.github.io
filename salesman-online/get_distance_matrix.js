///const request = require("request");
// const { NominatimJS } = require("@owsas/nominatim-js");
const getDistanceMatrix = (coordinates) =>
  new Promise((resolve, reject) => {
    let count = 0;
    const distanceMatrix = [];
    for (let i = 0; i < coordinates.length; i++) {
      distanceMatrix.push([]);
      distanceMatrix[i][i] = 0;
      for (let j = 0; j < i; j++) {
        getDistance(coordinates[i], coordinates[j]).then((distance) => {
          distanceMatrix[i][j] = distance;
          distanceMatrix[j][i] = distance;
          count++;
          if (
            count ==
            ((distanceMatrix.length - 1) * distanceMatrix.length) / 2
          ) {
            resolve(distanceMatrix);
          }
        });
      }
    }
  });

const getDistance = (add1, add2) =>
  new Promise((resolve, reject) => {
    const url = `router.project-osrm.org/route/v1/driving/${add1[0]},${add1[1]};${add2[0]},${add2[1]}?overview=false`;
    // const url = 'router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219?overview=false'
    $.get(url, (body, status) => {
      console.log(body);
      resolve(body.routes[0].distance);
      return true;
    });
  });

export { getDistance, getDistanceMatrix };

/*
NominatimJS.search({
  q: "Hotel Rovereto",
})
  .then((data1) => {
    const add1 = [data1[0].lat, data1[0].lon];
    console.log(add1.display_name);
    NominatimJS.search({ q: "corso antonio rosmini 53, rovereto" }).then(
      (data2) => {
        const add2 = [data2[0].lat, data2[0].lon];
        console.log(add2.display_name);
        getDistance(add1, add2).then(console.log);
      }
    );
  })
  .catch((error) => {
    // error ocurred
  });
*/
