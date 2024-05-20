# leaflet-challenge
Module 15 Challenge


I used All Earthquake data from that past 7 days.
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

## My process: 
- <p>First I initialized the map and set the center to be in Niger with a zoom of 2 so that majority of the earthquake markers would be visible upon the page loading. This took some guessing and trying different coordinates to determine the best location. I technically did this after my initial build.<p>

- <p> Next I added the map tile layer from openstreetmap.org to set the map as the background.<p>

- <p> I fetched the Earthquake data. I had to try different datasets until I settled on all earthquakes for the past 7 days. <p>

- <p> Plotted the data on the map with circle markers with their size and color representing the magnitude of the earthquake. Originally I tried using the Significant Earthquakes from the past 30 days for my data set but this caused my to have an issue with the radius depending on the magnitude. Because they all had higher magnitudes, the circles all appeared to be the same size. I switched the dataset so the varying magnitudes would make the radius dependency more obvious. <p>


## Final Thoughts:
<p> While the initial build was relatively easy and I was able to adapt some of the code provided during the daily activities and demonstrations, the real challenge for me was then having to continue to adjust the code so the appearance was better upon the page loading. I made multiple adjustments for the map center, zoom, the dataset for the radius of the markers and even the styling for the legend so the colors would align with the scale correctly. <p>

<p>I didn't complete Part 2 because I struggled to locate the correct map for the tectonic plates.<p>