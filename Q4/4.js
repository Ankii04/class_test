// Problem statement 4: You are given an array of objects representing a shopping cart. 
// Each object contains an itemName (string) and an itemPrice (number).

//INPUT:

   const shoppingCart = [
  { itemName: "Wireless Mouse", itemPrice: 25 },
  { itemName: "Gaming Monitor", itemPrice: 300 },
  { itemName: "USB-C Cable", itemPrice: 15 },
  { itemName: "Mechanical Keyboard", itemPrice: 120 },
  { itemName: "Webcam", itemPrice: 85 }
];
const sorted = shoppingCart.sort((a,b)=>a.itemPrice-b.itemPrice);
console.log(sorted);
