window.addEventListener("keydown", function (event) {
  //   console.log(event);
  let code = event.keyCode;
  let audio = this.document.querySelector(`audio [data-key = "66"]`);

  audio.currentTime = 0;
  audio.play();
});
