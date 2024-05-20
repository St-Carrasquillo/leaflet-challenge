// Map Initialization
var map = L.map('map').setView([17.28249925063271, 9.37604763293403], 2);

// Tile Layer to map.
// Use the addTo method to add objects to map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Get Earthquake data
// URL for USGS Earthquake data (All Earthquakes in the Past 7 days)
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
  
  // Function to determine the color of the marker based on the depth of the earthquake
  function getColor(depth) {
    return depth > 90 ? '#330000' :
           depth > 70 ? '#660000' :
           depth > 50 ? '#993300' :
           depth > 30 ? '#cc3300' :
           depth > 10 ? '#ff6633' :
                        '#ff9966';
  }

  // Function to determine the radius of the earthquake marker based on magnitude
  function getRadius(magnitude) {
    console.log("Magnitude: ", magnitude); // Log magnitude to verify values
    return magnitude * 3;  // Change the factor to 10 to make the size difference more noticeable
  }

  // Function for markers for each earthquake 
  function createFeatures(feature, latlng) {
    console.log("Feature: ", feature); // Log the feature to verify properties
    return L.circleMarker(latlng, {
      radius: getRadius(feature.properties.mag), // Use getRadius function
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).bindPopup("<h3>" + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + "</p><p>Magnitude: " + feature.properties.mag + "</p><p>Depth: " + feature.geometry.coordinates[2] + "</p>");
  }

  // Creating a GeoJSON layer containing the features array on the earthquakeData object
  // Run the pointToLayer function once for each piece of data in the array
  L.geoJSON(data, {
    pointToLayer: createFeatures
  }).addTo(map);

  // Creating a map legend to display.
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 30, 50, 70, 90],
        labels = ['<strong>Depth</strong>'];

    // loop through depth intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
  };

  legend.addTo(map);
});
