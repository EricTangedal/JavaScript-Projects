var emptyObject = {};
var personObject = {
    firstName : "Eric",
    lastName : "Tangedal"
};
personObject.age = 29;
personObject["salary"] = 49000;

for (var member in personObject)
{
    if (personObject.hasOwnProperty(member)){
        console.log("The member " + member + " of personObject is " + personObject[member])
    }
}

var person = {
    firstName : "Jack",
    lastName : "Smith",
    age : 19,
    employed : true
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);