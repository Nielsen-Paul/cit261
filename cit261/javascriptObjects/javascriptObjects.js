
var Person = function (name) {
    this.name = name;
}	
Person.prototype.getName = function () {
    return this.name;
}
var Baby = function (name) {
    this.name = name;
}

//var person = new person("Russell");



//var baby = new Baby("blue");

//console.log(baby.getName());

function createPerson() {
    var name = document.getElementById('name').value;
    var person = new Person(name);
    document.getElementById('returnName').innerHTML 
    = "The person who's name is " + person.getName + " has been created.";
}

function createBaby() {
    var babyName = document.getElementById('babyName').value;
    var person = new person(babyName);
    Baby.prototype = person;
    var baby = new Baby(babyName);
    document.getElementById('returnBabyName').innerHTML 
    = "The baby who's name is " + baby.getName + " has been created.";
}