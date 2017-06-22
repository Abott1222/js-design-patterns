//we can only use classes in strict more! In node!
//if not using node can use babel to transpile this down to EcmaScript5
	//this will use Person.prototype probably
'use strict';

class Person {}

	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	toString() {
		return this.name + " " + this.age;
	}

}

var alex = new Person("alex", 27);





