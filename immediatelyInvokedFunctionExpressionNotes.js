//IIFE -> immediately invoked function expression

/* Syntax

(function() {

})()

*/
var arg1 = 1;
var arg2 = 2;

(function(n1, n2) {
	console.log(n1,n2);
})(arg1,arg2);