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
