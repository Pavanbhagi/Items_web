let products = [
  { id: 1, name: "Smart Watch", price: 2999 },
  { id: 2, name: "Wireless Earbuds", price: 1799 },
  { id: 3, name: "Gaming Mouse", price: 1299 },
  { id: 4, name: "Laptop Backpack", price: 999 },
  { id: 5, name: "Bluetooth Speaker", price: 2199 },
];

let cart = [];

/* SHOW PRODUCTS */
function loadProducts() {
  let grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products.forEach((p) => {
    grid.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>Premium Quality Product</p>
        <h2>₹${p.price}</h2>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}
loadProducts();

/* CART TOGGLE */
function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
}

/* ADD TO CART */
function addToCart(id) {
  let product = products.find((p) => p.id === id);
  cart.push(product);
  updateCart();
}

/* UPDATE CART */
function updateCart() {
  let cartItems = document.getElementById("cartItems");
  let totalPrice = document.getElementById("totalPrice");
  let cartCount = document.getElementById("cartCount");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    cartItems.innerHTML += `<p>✔ ${item.name} - ₹${item.price}</p>`;
  });

  totalPrice.innerText = total;
  cartCount.innerText = cart.length;
}

/* SEARCH */
function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(input)
  );

  let grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  filtered.forEach((p) => {
    grid.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>Premium Product</p>
        <h2>₹${p.price}</h2>
        <button onclick="addToCart(${p.id})">Add</button>
      </div>
    `;
  });
}

/* CHATBOT */
function sendMessage() {
  let input = document.getElementById("userInput");
  let chatBody = document.getElementById("chatBody");

  let text = input.value.trim();
  if (text === "") return;

  chatBody.innerHTML += `<div class="user-msg">${text}</div>`;
  input.value = "";

  setTimeout(() => {
    chatBody.innerHTML += `<div class="bot-msg">
      🤖 I recommend checking our premium products for "${text}"
    </div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 700);
}
