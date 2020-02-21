var nameVar = "Sean";
var nameVar = "Mike"
console.log("nameVar: ", nameVar);

let nameLet = "Jen";
nameLet = "julie";
console.log("namelet: " + nameLet);

const nameConst = "Bill";
console.log("Name const: ", nameConst)

// Block scopoing

const fullName = 'Sean Gammage';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)