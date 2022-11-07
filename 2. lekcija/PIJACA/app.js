let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".single-item");
  //   console.log(mainEl);
  let price = mainEl.querySelector(".price").innerHTML;
  //   console.log(price);
  let name = mainEl.querySelector("h3").innerHTML;
  //   console.log(name);
  let quantity = mainEl.querySelector("input").value;
  console.log(quantity);

  let cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.substring(1, price.length);
    let finalPrice = quantity * parseInt(price);
    cartItems.innerHTML += `<div class ='cart-single-item'>
    <h3> ${name} </h3>
    <p> $${price} x ${quantity} = $<span>${finalPrice}</span> </p>
    <button onclick="removeFromCart(this)" class = "remove-item">Ukloni </button>
    </div>`;
    allTotal += finalPrice;
    document.querySelector(".total").innerHTML = `Total: ${allTotal}`;
    element.innerText = "Dodato";
    element.setAttribute("disabled", "");
  } else {
    alert("odaberi kolicinu");
  }
}

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("p span").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let vegetables = document.querySelectorAll(".single-item");
  price = parseInt(price);

  allTotal -= price;

  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  console.log(vegetables);
  mainEl.remove();
  vegetables.forEach(function (vege) {
    let itemName = vege.querySelector(".si-content h3").innerText;
    if (itemName === name) {
      vege.querySelector(".actions input").value = 0;
      vege.querySelector(".actions button").removeAttribute("disabled");
    }
    vege.querySelector(".actions button").innerText = "Dodaj: ";
  });
}
