
//constructor pattern
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.toString = function() {
		return this.name + " " + this.age;
	}
}

var person1 = new Person("alex", 27);
person1.toString();


// 1)toString function recreated each time(inefficient)
//Solution: Prototypes

//Prototypes: an encapsulation of properties that an object links to
//So if you had properties and methods that are on objects prototype. Then each copy made with new LINKS TO PROTOTYPE. Much more efficient

//syntax is ClassName.prototype.methodName = function(args) {};



Person.prototype.changeAge = function(newAge) {
	this.age = newAge;
};

var person2WithPrototype = new Person("alex", 27);
person2WithPrototype.toString();
person2WithPrototype.chagenAge(28);
person2WithPrototype.toString(0);

//to use this put in person.js
//use module.exports= Task;

//in main.js
//var Task = require("./task")