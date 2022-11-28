// let beliKey = document.querySelector(`.white, .a`);
// let beliQ = document.querySelector(`.white, .b`);
// const beli = function () {
//   beliKey.style.background =
//     "linear-gradient(to left bottom, #161617, #1b1e20, #202627, #272f2b, #34362e)";
// };
// const beliQq = function () {
//   beliQ.style.background =
//     "linear-gradient(to left bottom, #161617, #1b1e20, #202627, #272f2b, #34362e)";
// };

window.addEventListener("keydown", function (event) {
  let code = event.keyCode;
  console.log(code);
  let klavirKey = document.querySelector(`kbd[data-key = "${code}"]`);
  console.log(klavirKey);
  if (!klavirKey) {
    return;
  }
  let audio = document.querySelector(`audio[data-key="${code}"]`);
  audio.currentTime = 0;
  audio.play();
  //   switch (code) {
  //     case 81:
  //       beliQq();
  //       break;
  //     case 69:
  //       beli();
  //       break;
  //   }
});
