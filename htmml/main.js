
//bad code
// // let name = "Daniel";
// // let eyeColor01 = "Blue";
// // let age01 = 27;

// // let name02 = "John";
// // let eyeColor02 ="Brown";
// // let age02 = 35;


// // let name03 = "Jane";
// // let eyeColor03 = "Brown";
// // let age03 = 47;


// let updateAge = function(age){
// 	return ++age
// }

//1
// let person = new Object();

// person.name = "Daniel";
// person.eyaColor = "Blue";
// person.age = 27;
// person.updateAge = function(){
// 	return ++person.age;
// }


// console.log(person.age);
// person.updateAge();
// console.log(person.age); 

//2 
// let person = {
//   	name: "Daniel",
//  	eyeColor:"Blue",
//  	age:27
//  	updateAge: function(){
//  		return ++person.age;
//  	}
//  }


//blueprint
function Person(name, eyeColor, age){
	this.name = name; 
	this.eyeColor = eyeColor;
	this.age = age;
	this.updateAge = function(){
		return ++this.age;
	}
}

let person01 = new Person("Daniel", "Blue", 27);
let person01 = new Person("JaySon", "Brown", 25);
console.log(person01.updateAge());
