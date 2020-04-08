import { solve } from "./salesman-distance-matrix/salesman.js";
import { getDistanceMatrix } from "./get_distance_matrix.js";

$(document).ready(() => {
  const app = new Vue({
    el: "#app",
    data: {
      addresses: [],
    },
    methods: {
      applySalesman: function () {
        getDistanceMatrix(this.addresses.map((addr) => addr.coordinate)).then(
          (distanceMatrix) => {
            const indexes = solve(distanceMatrix);
            this.addresses = indexes.map((i) => this.addresses[i]);
          }
        );
      },
    },
  });
  Vue.component("addr-item", {
    props: ["addr"],
    template: "<li>{{ addr.text }}</li>",
  });

  var map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4,
    }),
  });
  var search = new ol.control.SearchNominatim({
    //target: $(".options").get(0),
    polygon: true, //$("#polygon").prop("checked"),
    reverse: true,
    position: true, // Search, with priority to geo position
  });
  var sLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 5,
        stroke: new ol.style.Stroke({
          color: "rgb(255,165,0)",
          width: 3,
        }),
        fill: new ol.style.Fill({
          color: "rgba(255,165,0,.3)",
        }),
      }),
      stroke: new ol.style.Stroke({
        color: "rgb(255,165,0)",
        width: 3,
      }),
      fill: new ol.style.Fill({
        color: "rgba(255,165,0,.3)",
      }),
    }),
  });
  map.addLayer(sLayer);
  map.addControl(search);
  // Select feature when click on the reference index
  search.on("select", function (e) {
    // console.log(e);
    sLayer.getSource().clear();

    // Check if we get a geojson to describe the search
    if (e.search.geojson) {
      var format = new ol.format.GeoJSON();
      var f = format.readFeature(e.search.geojson, {
        dataProjection: "EPSG:4326",
        featureProjection: map.getView().getProjection(),
      });
      sLayer.getSource().addFeature(f);
      var view = map.getView();
      var resolution = view.getResolutionForExtent(
        f.getGeometry().getExtent(),
        map.getSize()
      );
      var zoom = view.getZoomForResolution(resolution);
      var center = ol.extent.getCenter(f.getGeometry().getExtent());
      app.addresses.push({
        id:
          app.addresses.length > 0
            ? Math.max(...app.addresses.map((a) => a.id)) + 1
            : 1,
        text: e.search.display_name,
        coordinate: [center[0] / 100000, center[1] / 100000],
      });
      // redraw before zoom
      setTimeout(function () {
        view.animate({
          center: center,
          zoom: Math.min(zoom, 16),
        });
      }, 100);
    } else {
      app.addresses.push({
        id:
          app.addresses.length > 0
            ? Math.max(...app.addresses.map((a) => a.id)) + 1
            : 1,
        text: e.search.display_name,
        coordinate: e.coordinate,
      });
      map.getView().animate({
        center: e.coordinate,
        zoom: Math.max(map.getView().getZoom(), 16),
      });
    }
  });
});
