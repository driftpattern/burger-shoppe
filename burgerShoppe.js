const burgerArtists = ["austin", "raheem", "linda"];  // array of burger artists
const customers = 10;  // number of customers in shoppe

console.log("It's lunch rush at Ye Olde Burger Shoppe. " + burgerArtists.length + " employees are working.");
// print the lunch rush message with the number of employees


// distribute work evenly among burger artists with modulus %
// iterate from 1 to the number of customers
for (let i = 1; i <= customers; i++) {
  const customerNumber = i;  // store the current customer number
  const assignedArtist = burgerArtists[(customerNumber - 1) % burgerArtists.length];
  // get the index of the assigned burger artist using the modulus operator
  
  console.log("Burger artist " + assignedArtist + " constructed a burger for " + customerNumber + ".");
  // print the assigned burger artist and customer number for the current customer
}
