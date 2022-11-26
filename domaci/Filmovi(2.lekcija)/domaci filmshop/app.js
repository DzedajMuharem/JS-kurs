let allTotal = 0;
let nameTotal = "";

function addToTotal(element) {
  let mainEl = element.closest(".kartica");
  // console.log(mainEl);
  let price = mainEl.querySelector("p span").innerText;
  // console.log(price);
  let total = document.querySelector("#total");
  let deleteBtn = mainEl.querySelector(".btn-delete");
  let name = mainEl.querySelector("h1").innerText;
  let odgledanih = mainEl.querySelector("#odgledanih");

  // Total cena
  price = price.substring(1, price.lenght);
  price = parseInt(price);
  allTotal += price;
  total.innerText = `Ukupno potroseno novca: $${allTotal}`;
  if (allTotal > 0) {
    total.style.visibility = "visible";
  }

  // izgled kartice
  mainEl.style.background = "blue";
  mainEl.style.opacity = "0.7";
  deleteBtn.style.display = "block";
  element.setAttribute("disabled", "");
}

function deleteBtn(element) {
  let mainEl = element.closest(".kartica");
  let deleteBtn = mainEl.querySelector(".btn-delete");
  let dodajBtn = mainEl.querySelector(".btn");
  let price = mainEl.querySelector("p span").innerText;
  let total = document.querySelector("#total");

  // console.log(mainEl);

  // izgled kartice na staro

  mainEl.style.background = "red";
  mainEl.style.opacity = "1";
  deleteBtn.style.display = "none";
  dodajBtn.removeAttribute("disabled");

  // total update
  price = price.substring(1, price.lenght);
  price = parseInt(price);

  allTotal -= price;

  if (allTotal === 0) {
    total.style.visibility = "hidden";
  } else {
    total.innerText = `Ukupno potroseno novca: $${allTotal}`;
  }
}
