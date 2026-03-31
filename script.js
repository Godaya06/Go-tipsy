let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - KES " + item.price;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function checkout() {
  let payment = document.getElementById("payment").value;
  alert("Order placed!\nPayment method: " + payment);
}
