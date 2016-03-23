
var csv_file =process.argv[2];
var json_file =process.argv[3];
// var fields=process.argv[4];
if(process.argv[4]){
	var headers=process.argv[4].split(",");
}

console.log(headers);
var fs=require('fs');
var Converter=require('csvtojson').Converter;
var converter=new Converter({
	noheader:true,
	headers: headers
});
converter.fromFile(csv_file,function(err,result){
	if(err)  throw err;
	fs.writeFile(json_file,JSON.stringify(result[1]));
	console.log(result[0]);
})

