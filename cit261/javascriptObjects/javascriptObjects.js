
var Person = function (name) {
    this.name = name;
}	
Person.prototype.getName = function () {
    return this.name;
}
var Baby = function (name) {
    this.name = name;
}

function createPerson() {
    var name = document.getElementById('name').value;
    var person = new Person(name);
    document.getElementById('returnName').innerHTML 
    = "The person who's name is " + name + " has been created.";
}

function createBaby() {
    var babyName = document.getElementById('babyName').value;
    document.getElementById('returnBabyName').innerHTML 
    = "The baby who's name is " + babyName + " has been created.";
}