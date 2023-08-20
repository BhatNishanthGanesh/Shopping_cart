// Add event listeners
window.addEventListener("DOMContentLoaded", function () {
    var params = new URLSearchParams(window.location.search);
    var cardIndex = params.get("card");
  
    if (cardIndex !== null) {
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
          price: "₹600"
        },
      ];
  
      var selectedItem = items[cardIndex];

      // Display the selected item in the cart
      displayCartItem(selectedItem);
    }
  
    calculateTotalPrice(); // Calculate initial total price
    var cartQuantity = document.querySelector(".cart-quantity");
  
    // Restrict input to positive integers only
    cartQuantity.addEventListener("input", function () {
      var value = parseInt(cartQuantity.value) || 0;
      cartQuantity.value = value < 1 ? 1 : value;
      calculateTotalPrice();
    });
  
    var orderButton = document.querySelector(".btn-danger");
    orderButton.addEventListener("click", handleFormSubmission); // Handle form submission
    closeCart(); // Close the cart
  });
  
  function displayCartItem(item) {
    var cartContainer = document.getElementById("cart-container");
  
    var card = document.createElement("div");
    card.classList.add("card");
    

    card.innerHTML = `
      <div>
          <div>
              <img src="${item.image}" alt="Image not found" class="img-size">
          </div>
          <div>
          <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <div class="cart-price">${item.price}</div>
              <input type="number" class="cart-quantity" placeholder="Quantity" />
          </div>
          <div class="text-center">
              <div>Total</div>
              <div class="total-price">₹0</div>
              <button type="submit" class="btn btn-danger">Order Now</button>
              <i class="bx bx-x-circle" id="close-cart"></i>
          </div>
      </div>
  `;
  
    cartContainer.appendChild(card);
  }
  
  // Calculate the total price based on quantity and update the display
  function calculateTotalPrice() {
    var cartQuantity = document.querySelector(".cart-quantity");
    var quantity = parseInt(cartQuantity.value) || 0;
  
    // Ensure quantity is not negative and set it to 1 if it's less than 1
    if (quantity < 1) {
      quantity = 1;
      cartQuantity.value = quantity;
    }
  
    var cartPrice = document.querySelector(".cart-price");
    var price = parseInt(cartPrice.innerText.substring(1)) || 0;
    var totalPrice = quantity * price;
    var totalPriceDisplay = document.querySelector(".total-price");
    totalPriceDisplay.innerText = "₹" + totalPrice;
  }
  
  // Handle the form submission
  function handleFormSubmission(event) {
    event.preventDefault();
    alert("Order placed successfully!");
  }
  
  // Close the cart
  function closeCart() {
    var closeButton = document.querySelector("#close-cart");
    closeButton.addEventListener("click", function () {
      var card = document.querySelector(".card");
      card.remove();
      alert("Order is removed!");
    });
  }
  