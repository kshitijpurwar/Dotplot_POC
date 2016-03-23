var input_file = process.argv[2]
var fs = require('fs');
var u = require("underscore");
var obj;
facet = {};
fs.readFile(input_file, 'UTF-8', function(err, data) {
    if (err)
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




    console.log(facet);
})