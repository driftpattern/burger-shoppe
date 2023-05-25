// a simple example to demonstrate the use of modulus for wrapping around a list.
// run with node interactive interpreter by changing to directory where you saved
// the burgerShoppe.js then run `node burgerShoppe.js` ...or put it script tags of html
const burgerArtists = ["austin", "raheem", "linda"];  // array of burger artists
const customers = 10;  // number of customers in shoppe. change as desired.


console.log("*** It's lunch rush at Ye Olde Burger Shoppe! ***" + burgerArtists.length + " employees are working.");
// print the lunch rush message with the number of employees


// distribute work evenly among burger artists with modulus %
// iterate from 1 to the number of customers
for (let i = 1; i <= customers; i++) {
  const customerNumber = i;  // store the current customer number
  const assignedArtist = burgerArtists[(customerNumber - 1) % burgerArtists.length];
  // calculate the index of the assigned burger artist using the modulus operator
  
  console.log("Burger artist " + assignedArtist + " constructed a burger for customer " + customerNumber + ".");
  // print the assigned burger artist and customer number for the current customer
}
