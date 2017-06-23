var Person = require("./person");
var Repo = require("./personRepoModulePatternExample");

var person1 = new Person("bob", 100);
person1.toString();

var person2 = new Person("alex", 27);
person2.toString();
person2.changeAge(28);
person2.toString(0);

var person3 = Repo.get("Alex", 0);
person3.toString();


