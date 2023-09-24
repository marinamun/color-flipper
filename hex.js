const hex = [0, 1, 2, 3, 4, 5, 6, 7, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");
const hexBtn = document.getElementById("hex");

button.addEventListener("click", function (event) {
  event.preventDefault();

  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomNumber];
  }
  document.body.style.background = hexColor;
  color.innerHTML = hexColor;
});


hexBtn.addEventListener("click", function (event) {
  event.preventDefault();
  hexBtn.classList.toggle("active");
});
