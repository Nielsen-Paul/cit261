
var Person = function (name) {
    this.name = name;
}	
Person.prototype.getName = function () {
    return this.name;
}
//var Baby = function (eyeColor) {
//    this.eyeColor = eyeColor;
//}

//var person = new person("Russell");

//Baby.prototype = person;

//var baby = new Baby("blue");

//console.log(baby.getName());

function createPerson() {
    var name = document.getElementById('name').value;
    var person = new Person(name);
    document.getElementById('returnName').innerHTML 
    = "The person who's name is " + person.getName() + " has been created.";
}