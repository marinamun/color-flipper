const colors = ["#fbccff", "#b2e5ff"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");
const simpleBtn = document.getElementById("simple");

button.addEventListener("click", function (event) {
  event.preventDefault();

  //Create random number between 0 and 4
  const randomNumber = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNumber];
  document.body.style.background = randomColor;
  color.innerHTML = randomColor;
});

simpleBtn.addEventListener("click", function (event) {
  event.preventDefault();
  simpleBtn.classList.toggle("active");
});
