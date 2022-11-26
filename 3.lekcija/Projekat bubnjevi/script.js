// let crashRide = document.querySelector("#crash-ride");
// let hihat = document.querySelector("#hihat-top");
// const animateCrashOrRide = function () {
//   crashRide.style.transform = "rotate(0deg) scale(1.5)";
// };

// const animatehihat = function () {
//   hihat.style.top = "171px";
// };

// window.addEventListener("keydown", function (event) {
//   let code = event.keyCode;
//   // console.log(code);

//   let keyElement = document.querySelector(`div[data-key="${code}"]`);
//   if (!keyElement) {
//     return;
//   }

//   // console.log(keyElement);
//   let audio = document.querySelector(`audio[data-key="${code}"]`);
//   audio.currentTime = 0;
//   audio.play();

//   switch (code) {
//     case 69:
//     case 82:
//       animateCrashOrRide();
//       break;
//     case 75:
//     case 73:
//       animatehihat();
//       break;
//   }
//   keyElement.classList.add("playing");
// });

// const removeCrashRideTransition = function (event) {
//   if (event.propertyName !== "transform") {
//     return;
//   }
//   event.target.style.transform = "rotate(-7.2deg) scale(1.5)";
// };
// const hihatremove = function (event) {
//   if (event.propertyName !== "top") {
//     return;
//   }
//   event.target.style.top = "166px";
// };
// const removeKeyTransition = function (event) {
//   if (event.propertyName !== "transform") {
//     return;
//   }
//   event.target.classList.remove("playing");
// };

// let drumKeys = document.querySelectorAll(".key");
// drumKeys.forEach(function (key) {
//   key.addEventListener("transitionend", removeKeyTransition);
// });

// crashRide.addEventListener("transitionend", removeCrashRideTransition);

// hihat.addEventListener("transitionend", hihatremove);

let erbubanj = document.querySelector("#crash-ride");
const animateER = function () {
  erbubanj.style.transform = "rotate(0deg) scale(1.5)";
};
let ikBubanj = document.querySelector("#hihat-top");
const animatehitop = function () {
  ikBubanj.style.top = "171px";
};

window.addEventListener("keydown", function (event) {
  let code = event.keyCode;
  console.log(code);

  let bubnjeviKey = document.querySelector(`div[data-key = "${code}"]`);
  console.log(bubnjeviKey);
  if (!bubnjeviKey) {
    return;
  }

  let audio = document.querySelector(`audio[data-key ="${code}"]`);
  audio.currentTime = 0;
  audio.play();

  switch (code) {
    case 69:
    case 82:
      animateER();
      break;
    case 82:
    case 73:
      animatehitop();
      break;
  }
  bubnjeviKey.classList.add("playing");
});

const removeCrashRideTransition = function (event) {
  if (event.propertyName !== "transform") {
    return;
  }
  event.target.style.transform = "rotate(-7.2deg) scale(1.5)";
};
const hihatremove = function (event) {
  if (event.propertyName !== "top") {
    return;
  }
  event.target.style.top = "166px";
};
const removeKeyTransition = function (event) {
  if (event.propertyName !== "transform") {
    return;
  }
  event.target.classList.remove("playing");
};

let drumKeys = document.querySelectorAll(".key");
drumKeys.forEach(function (key) {
  key.addEventListener("transitionend", removeKeyTransition);
});

// crashRide.addEventListener("transitionend", removeCrashRideTransition);

// hihat.addEventListener("transitionend", hihatremove);

// // const removeCrashRideTransition = function (event) {
// //   if (event.propertyName !== "transform") {
// //     return;
// //   }
// //   event.target.style.transform = "rotate(-7.2deg) scale(1.5)";
// // };

// const removeHihat = function (event) {
//   console.log(event.target);
//   if (event.propertyName !== "top") {
//     return;
//   }
//   event.target.style.top = "171px";
// };

// const removeKeyTransition = function (event) {
//   if (event.propertyName !== "transform") {
//     return;
//   }
//   event.target.classList.remove("playing");
// };

// let drumKeys = document.querySelectorAll(".key");
// drumKeys.forEach(function (key) {
//   key.addEventListener("transitionend", removeKeyTransition);
// });

// // erbubanj.addEventListener("transitionend", removeCrashRideTransition());
// ikBubanj.addEventListener("transitionend", removeHihat());
