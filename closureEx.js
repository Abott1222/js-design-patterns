function Person(name) {
	//private variable -> out of scope of return
	var _pName = name;

	function printName() {
		console.log(_pName);
	}

	//this is key!
	return printName;

}

var alex = Person("alex");

//WRONG
//alex.printName();

//CORRECT
alex();


