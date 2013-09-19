/**
 * @author Laura J. Hornbake
 * @license MIT
 * 
 */

// Callback function for GSS API call, parses JSON result from API and formats as GeoJSON
function importGSS(json) {
	
	// feature constructor
	function Feature (date,place,city,province,nation,longitude,latitude) {
		this.type="Feature";
		this.properties={};
		this.properties.date=date;
		this.properties.place=place;
		this.properties.city=city;
		this.properties.province=province;
		this.properties.nation=nation;
		this.geometry={};
		this.geometry.type="Point";
		this.geometry.coordinates=[];
		this.geometry.coordinates[0]=longitude;
		this.geometry.coordinates[1]=latitude;
	}
	
	//feature collection constructor
	function FeatureCollection () {
		this.type="FeatureCollection";
		this.features=[];
	};
	//create a feature collection
	var json_result = new FeatureCollection();
	
	//add features to your feature collection
	for (var i = 0; i < json.feed.entry.length; i++) {
		var f = new Feature(json.feed.entry[i].gsx$date.$t, json.feed.entry[i].gsx$place.$t,
			json.feed.entry[i].gsx$city.$t, json.feed.entry[i].gsx$province.$t, json.feed.entry[i].gsx$nation.$t, parseFloat(json.feed.entry[i].gsx$longitude.$t), parseFloat(json.feed.entry[i].gsx$latitude.$t));
		json_result.features[i] = f;
	};
	
	//append the new feature collection to the document
	var data = $('.results').append(JSON.stringify(json_result, null, "    "));
	return data;
	
	//TODO enable savefile
	//$( "#save" ).click(function() { window.location.href = "data:application/x-download;charset=utf-8," + encodeURIComponent(data);});
}	