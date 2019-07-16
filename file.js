const fs = require('fs');
fs.readFile('read.txt', (err, data) => {
  if (err)
  {
  	throw err;
  }
  console.log(data.toString());
});

fs.appendFile('appended.txt', 'appended data ',(err)=>{
	if(err){
		throw err;
	}
	console.log("Appending Done");
});

fs.unlink('appended.txt', (err)=>{
	if(err){
		throw err;
	}
	console.log("Done Deleting");
});