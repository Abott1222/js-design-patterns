"use strict";

var task = {
	title: "hello world",
	description: "Where is my mind?"
};

//add function old way
task.toString = function() {
	console.log("title " + task.title + " description: " + task.description);
}

Object.defineProperty(task, "toString", {
	value: function() {
		console.log("Modified function!!!     "+"title " + task.title + " description: " + task.description);
	},
	writable:false, //prevents it from being rewritten ie task.toString = "test"
	enumerable:true,
	configurable:false
});

task.toString();


var urgentTask  = Object.create(task);
Object.defineProperty(urgentTask, "toString", {
	value: function() {
		console.log("This is urgent!!!!     "+"title " + task.title + " description: " + task.description);
	},
	writable:false, //prevents it from being rewritten ie task.toString = "test"
	enumerable:true
});


urgentTask.toString();