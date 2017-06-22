
//constructor pattern
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.toString = function() {
		return this.name + " " + this.age;
	}
}


// 1)toString function recreated each time(inefficient)
//Solution: Prototypes

//Prototypes: an encapsulation of properties that an object links to
//So if you had properties and methods that are on objects prototype. Then each copy made with new LINKS TO PROTOTYPE. Much more efficient

//syntax is ClassName.prototype.methodName = function(args) {};



Person.prototype.changeAge = function(newAge) {
	this.age = newAge;
};

module.exports = Person;
