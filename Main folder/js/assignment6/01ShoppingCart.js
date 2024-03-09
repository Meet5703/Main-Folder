const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

//added meat at the beginning of the array using unshift method
shoppingCart.unshift("Meat");
console.log(shoppingCart);

//added sugar at the end of the array using push method
shoppingCart.push("Sugar");
console.log(shoppingCart);

// Check if allergic to honey using filter method
const allergicToHoney = true; // Set to true if allergic, false otherwise
if (allergicToHoney) {
  const updatedCart = shoppingCart.filter((item) => item !== "Honey");
  console.log(updatedCart);
} else {
  console.log(shoppingCart);
}

// Modify Tea to green tea
shoppingCart[2] = "green tea";
console.log(shoppingCart);
