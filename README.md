# About
This tool transforms a Google spreadsheet of "events" with GPS coordinates into a GeoJSON feature collection, which you can copy and use to build custom maps.  See this [blog post](http://laurahornbake.tumblr.com/post/61661563707/gss-to-geojson)  for more on why/how...					

# How to use it
* Start with a Google spreadsheet with column headings:  "date", "place", "city", "province", "nation", "latitude"*, "longitude"* (*required).  See:  [an example spreadsheet](http://docs.google.com/spreadsheet/pub?key=0ArToGQcSQS-IdHRWMlowVXpUMm9JMGtIVm5NdU5yZnc&output=html").
* Publish the spreadsheet and make note of the key in the url. 
* Input the key in the form below and submit.  The key to the example spreasheet is the default, try it out before you create your own.

# Caveats
* Recommended: Check your results.  Jason Sanford's [GeoJSONlint](http://geojsonlint.com/) validates GeoJSON.
* The current limitation on which columns this tool retrieves from Google spreadsheets is entirely arbitrary, based on what I needed.  If there is sufficient interest, I can enable users to select headers from their own data.
* Privacy: this works entirely client-side, so your data is not sent to my or anyone else's servers.
* Built to [GeoJSON](http://geojson.org/) format specifications 1.0
