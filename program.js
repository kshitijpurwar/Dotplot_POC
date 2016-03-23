
var csv_file =process.argv[2];
var json_file =process.argv[3];
// var fields=process.argv[4];
if(process.argv[4]){
	var headers=process.argv[4].split(",");
}

console.log(headers);
var fs=require('fs');
var csv=fs.readFileSync(csv_file,'UTF-8');
var row=csv.split('\n')[1]
console.log("A single row form CSV file : The INPUT")
console.log('--------------------------------------------------------------')
console.log(row);
console.log('--------------------------------------------------------------')

var Converter=require('csvtojson').Converter;
var converter=new Converter({
	// noheader:true,
	// headers: headers
});
converter.fromFile(csv_file,function(err,result){
	if(err)  throw err;
	fs.writeFile(json_file,JSON.stringify(result[1]));
	console.log('After Conversion from CSV to JSON')
	console.log("This is the OUTPUT after conversion  in JSON format");
	console.log('--------------------------------------------------------------')
	console.log(result[0])
	console.log('--------------------------------------------------------------')

});

