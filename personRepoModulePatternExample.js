//this repo is an example of a module that would be in charge of all database calls


//start out create a function
//that returns an object of methods relating to db stuff
//getPerson, addPerson, deletePerson, ect
var repo = function() {

	return {
		//add get function
		// * note it is key value pairs
		get: function(name, age) {
			console.log("getting person named " + name);
			return {
				name: "new task from db",
				age: age
			}
		},

		save: function(Person) {
			console.log("Saving person: " + Person.name + " to the db!");
		}

	}

}

module.exports = repo();