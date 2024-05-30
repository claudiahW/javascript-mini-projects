const container = document.getElementById("_container");

// adding different hues of green

let greenColorCodes = [
  "#7CFC00",
  "#78AB46",
  "#3B5353",
  "#458B00",
  "#BCED91",
  "#61B329",
  "#5DFC0A",
  "#4CBB17",
  "#4AC948",
  "#00EE00",
  "#33FF33",
  "#00C957",
];

let greenColorCodes2 = ["#00FC00", "#782222", "#3B5353", "#400ddd"];

const numberOfSquares = 50;

for (let i = 0; i < numberOfSquares; i++) {
  const activity = document.createElement("div");
  activity.classList.add("activity");

  activity.addEventListener("mouseover", () => {
    addColor(activity);
  });

  activity.addEventListener("mouseout", () => {
    addColor(activity);
  });

  container.appendChild(activity);
}

function addColor(squareTile) {
  const gettingColor = greenColors();
  squareTile.style.backgroundColor = gettingColor;
  squareTile.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function stickColor(squareTile) {
  const gettingColor = greenColors2();
  squareTile.style.backgroundColor = gettingColor;
  squareTile.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function greenColors() {
  return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}

function greenColors2() {
  return greenColorCodes2[Math.floor(Math.random() * greenColorCodes.length)];
}
