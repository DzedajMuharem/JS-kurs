// tradicionalni nacin

// function klikni_me(a, b) {
//   //   let a = 5;
//   //   let b = 10;
//   console.log(a + b);
// }

// klikni_me(100, 200);

// ------------------------------------

// novi nacin

// const klikni_me_nova = () => {
//   let a = 5;
//   let b = 10;
//   console.log(a + b);
// };

// klikni_me_nova();

function klikni(dugme) {
  console.log(dugme.innerText);
}

let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  //Event listener koji ceka za klik, za svaki btn.
  btn.addEventListener("click", function (event) {
    console.log(event.target);
    let clickedBtn = event.target;
    console.log(clickedBtn.innerText);
  });
});

let link = document.querySelector("#link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target.innerText);
});

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  console.log("nema forme");
  event.preventDefault();
});

let select = document.querySelector("select");

select.addEventListener("change", function (event) {
  console.log(event.target.value);
});

window.addEventListener("resize", function () {
  // console.log(window.innerWidth + "px");
  if (window.innerWidth > 1000) {
    console.log("Prozor veci od 1000");
  } else {
    console.log("Prozor manji od hiljadu");
  }
});

let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
  // console.log(event);
  // console.log(event.key);
  if (event.key === "Delete") {
    console.log("Obrisao si nesto");
  }
});

window.addEventListener("mousemove", function (event) {
  console.log("mis je pomjeren");
});

input.addEventListener("mousemove", function (event) {
  console.log("mis se pomjerio preko polja input");
});
