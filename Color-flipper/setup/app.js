const colors = [
  "#DFCCFB",
  "#FFC6AC",
  "#FFD9B7",
  "#FFD89C",
  "#FF9B9B",
  "#D7C0AE",
  "#F2BED1",
  "#7286D3",
  "#65647C",
  "#E97777",
  "#829460",
  "#FF8DC7",
  "#AAC4FF",
  "#FFE3E1",
  "#CDF0EA",
];
const button = document.getElementById("btn");
const changedColor = document.querySelector(".color");

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

function colorHandler() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = colors[randomColor];
  changedColor.textContent = colors[randomColor];
}

button.addEventListener("click", colorHandler);
