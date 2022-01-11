let namen = ["John", "Chuck", "Henry", "Oscar", "Ryan", "Bob", "Pete"];
let neueNamen = [];
function myFunction(firstName) {
    neueNamen.push(firstName);
  console.log(firstName);
}
namen.map(myFunction);
console.log("First Name :",namen);

/// add new person for test///
myFunction ("lukas");
myFunction ("kawan");
myFunction ("Julia");
