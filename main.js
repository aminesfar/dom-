var plus = Array.from(document.querySelectorAll(".plus-btn"));
var minus = Array.from(document.querySelectorAll(".minus-btn"));
var trashs = Array.from(document.querySelectorAll(".fa-trash-alt"));
var hearts = Array.from(document.querySelectorAll(".fa-heart"));

// Function total Price
function total() {
  var quantities = Array.from(document.querySelectorAll(".qute"));
  var unitPrices = Array.from(document.querySelectorAll(".unit-price"));
  var totalPrice = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < quantities.length; i++) {
    sum += quantities[i].innerText * unitPrices[i].innerText;
  }
  totalPrice.innerText = sum;
}
// Increment and Decrement quantity
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () { 
    plus[i].nextElementSibling.innerText++;
    total();
  });

  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerText > 0) {
      minus[i].previousElementSibling.innerText--;
    }
    total();
  });
}

// Remove Card product
for (let trash of trashs) {
  trash.addEventListener("click", function () {
    trash.parentElement.parentElement.parentElement.remove();
    total();
  });
}
// Change heart color
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color !== "red") heart.style.color = "red";
    else heart.style.color = "#212529";
  });
}
