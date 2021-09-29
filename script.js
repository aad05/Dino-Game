const dina = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  jump();
});
function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}
let isActive = setInterval(() => {
  let dinaTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 35 && cactusLeft > 0 && dinaTop >= 150) {
    alert("Game Over");
    var audio = new Audio(game.mp3);
    audio.play();
  }
}, 10);
