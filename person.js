var Repo = require("./personRepoModulePatternExample.js")

//constructor pattern
function Person(data) {
	this.name = data.name;
	this.age = data.age;
	this.toString = function() {
		console.log(this.name + " " + this.age);
	}
}


// 1)toString function recreated each time(inefficient)
//Solution: Prototypes

//Prototypes: an encapsulation of properties that an object links to
//So if you had properties and methods that are on objects prototype. Then each copy made with new LINKS TO PROTOTYPE. Much more efficient

//syntax is ClassName.prototype.methodName = function(args) {};



Person.prototype.changeAge = function(newAge) {
	this.age = newAge;
	console.log("Changed age!");
	// this === the person
	Repo.save(this);
};

module.exports = Person;
