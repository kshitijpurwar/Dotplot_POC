//Usage info 
var input_file = process.argv[2]
var output_file = process.argv[3]
var fs = require('fs');
var u = require("underscore");
//input _file takes the source JSON file i.e. converted JSON filr
//output_file takes the file where to write the facets

facet = {};
function reduce(input_file,output_file){
fs.readFile(input_file, 'UTF-8', function(err, data) {
    if (err)
    	var obj;
        console.log(err);
    obj = JSON.parse(data);
    console.log(obj[1]);
    keys = u.keys(obj[1])
    console.log(keys);
    // console.log(obj[1][keys[1]])
    for (var i = 0; i < keys.length; i++) {
        var facet_values = [];
        facet_values = obj.map(function(e) {
            return e[keys[i]]
        })
        // console.log(facet_values.length);
        facet_values = u.uniq(facet_values);
        
        if (facet_values.length < 10) {
        // console.log(facet_values)
            facet[keys[i]] = facet_values.map(function(e, i) {
                return {
                    id: i,
                    name: e
                }
            });
        }
    }
	var JSON_writing=fs.createWriteStream(output_file); 
    JSON_writing.write(JSON.stringify(facet));
    JSON_writing.end();
    console.log(facet);
})	
}
module.exports.facet=facet;
module.exports.reduce=reduce;
// the files exposes 2 items ,a reduce function and a facet object