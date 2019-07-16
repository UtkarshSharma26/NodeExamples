function printsomething(){
	console.log("I am global");
	console.log("I am here->",__dirname+" .And my name is",__filename);
}
setTimeout(printsomething,1000);