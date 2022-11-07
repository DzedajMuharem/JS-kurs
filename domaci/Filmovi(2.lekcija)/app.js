let allTotal = 0;

function addToTotal(element) {
  let mainEl = element.closest(".kartica");
  //   console.log(mainEl);
  let name = mainEl.querySelector("h1").innerText;
  //   console.log(name);
  let price = mainEl.querySelector("p span").innerText;
  //   console.log(price);
  element;
  let total = document.querySelector("#total");
  let odgledanih = document.querySelector("#odgledanih");
  let deleteBtn = mainEl.querySelector(".btn-delete");

  price = price.substring(1, price.length);
  price = parseInt(price);
  allTotal += price;
  //   console.log(allTotal);
  total.innerHTML = `Ukupno potroseno novca: $${allTotal}`;
  mainEl.style.background = "blue";
  mainEl.style.opacity = "0.8";

  element.innerText = "Dodato";
  element.setAttribute("disabled", "");

  deleteBtn.style.display = "block";
}

function deleteBtn(element) {
  let mainEl = element.closest(".kartica");
  let total = document.querySelector("#total");
  let price = mainEl.querySelector("p span").innerText;
  let karta = document.querySelector(".kartica");
  let name = mainEl.querySelector("h1");
  let mainBtn = mainEl.querySelector(".btn");

  mainEl.innerHTML = ` <img src="./img/carrot.png" alt="" />
<div class="body-kartice">
  <h2>Ocena: 7.2</h2>
  <h1>Barbarian</h1>
  <button onclick="addToTotal(this)">+ Dodaj</button>
  <p>Cena: <span>$10</span></p>
  <button onclick="deleteBtn(this)" class="btn-delete">X</button>
</div>`;
  mainEl.style.background = "red";
  mainEl.style.opacity = "1";
  element.style.display = "none";
  price = price.substring(1, price.length);
  price = parseInt(price);
  allTotal -= price;
  total.innerText = `Ukupno potroseno novca: $ ${allTotal}`;

  mainBtn.removeAttribute("disabled");
}
