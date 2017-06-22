var Person = require("./person");

var person1 = new Person("bob", 100);
person1.toString();

var person2 = new Person("alex", 27);
person2.toString();
person2.changeAge(28);
person2.toString(0);

