function navigateToCart(event) {
  var cartCount = parseInt(document.querySelector(".cart-count").innerText) || 0;
  
  if (cartCount < 1) {
    event.preventDefault();
    alert("Please add exactly 1 item to the cart before proceeding to the cart page.");
  }
}

// Define the items array outside the functions
var items = [
  {
    image: "../Images/Bag.jpg",
    title: "School Bag",
    price: "₹500"
  },
  {
    image: "../Images/Bluetooth.png",
    title: "Bluetooth",
    price: "₹900"
  },
  {
    image: "../Images/Bottle.jpg",
    title: "Bottle",
    price: "₹500"
  },
  {
    image: "../Images/Hat.jpg",
    title: "Bluetooth",
    price: "₹200"
  },
  {
    image: "../Images/Hoodie.jpg",
    title: "Hoodie",
    price: "₹500"
  },
  {
    image: "../Images/Jeans.jpg",
    title: "Jeans",
    price: "₹700"
  },
  {
    image: "../Images/Shoe.jpg",
    title: "Shoe",
    price: "₹800"
  },
  {
    image: "../Images/t-shirt.jpg",
    title: "T-shirt",
    price: "₹00"
  },
  
];

function addToCart(index) {
  // Update the cart count
  var cartCount = document.querySelector(".cart-count");
  var currentCount = parseInt(cartCount.innerText) || 0;
  cartCount.innerText = currentCount + 1;

  // Show alert message
  alert("Item added to cart!");

  // Get the selected item based on the index
  var selectedItem = items[index];

  // Construct the URL with the card ID
  var url = "cart.html?card=" + index;

  // Redirect to the cart page with the card ID appended to the URL
  window.location.href = url;
}
