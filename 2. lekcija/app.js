// function pokreniMe(dugme) {
//   let nazivDugmeta = dugme.innerText;
//   let klasaDugmeta = dugme.clasName;
//   console.log(nazivDugmeta);
//   let message = document.querySelector("#kliknutoDugme");
//   message.innerText = nazivDugmeta + "" + klasaDugmeta;
// }

// function testing() {
//   console.log("test");
//   let linkovi = document.querySelectorAll(" section .moj-link");
//   console.log(linkovi);
//   console.log(linkovi[0].innerText);
// }

// function testing() {
//   let link = document.querySelector(".drugi-link");
//   let link1 = link.previousElementSibling;
//   let link3 = link.nextElementSibling;

//   //   console.log(link.innerHTML);
//   //   console.log(link3.innerHTML);
//   //   console.log(link1.innerHTML);

//   //   console.log(link.closest(".inner-div"));

// }

// function testing() {
//   let link = document.querySelector(".drugi-link");
//   //   console.log(link.getAttribute("class"));
//   console.log(link.removeAttribute("class"));
// }

// function testing() {
//   let glDiv = document.querySelector(".glavni-div");
//   glDiv.innerHTML = "<span>Klikni ovaj link: <a href:>klik</a>  </span>";
// }

function validacija() {
  let input = document.querySelector("#email");
  let value = input.value;

  // provjerava da li value (string) sadrzi @ i .
  if (value.includes("@") && value.includes(".")) {
    let pocizicijaAt = value.indexOf("@"); // uzimamo poziciju @
    let pozicijaTacka = value.indexOf("."); // uzimamo poziciju .
    // substring uzima vrijednost izmedju pozicija, ne ukljucuje poslednju poziciju
    let izmedjuAtTacka = value.substring(pocizicijaAt + 1, pozicijaTacka);
    let preAt = value.substring(0, pocizicijaAt);
    let posleTacke = value.substring(pozicijaTacka + 1, value.length);
    // da li prije @ imamo vise od dva karaktera
    if (preAt.length > 2) {
      console.log("preAt je dobar");
    } else {
      console.log("preAt nije dobar");
    }
    // da li izmedju @ i . imamo barem 1 karakter
    if (izmedjuAtTacka.length > 0) {
      console.log("dobro je");
    } else {
      console.log("nije dobro");
    }
    // da li posle tacke imamo barem 1 karakter
    if (posleTacke.length > 2) {
      console.log("posle takce je dobro");
    } else {
      console.log("posle tacke nije dobro");
    }
  } else {
    console.log("ne sadrzi @");
  }

  //   console.log(input);
  //   console.log("test");
  //   console.log(value);
}
