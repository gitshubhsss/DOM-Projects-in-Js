let randomColor = () => {
  return `#` + Math.floor(Math.random() * 16777215).toString(16);
};

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const getRandomColor = randomColor();
  document.querySelector("body").style.backgroundColor = getRandomColor;
  document.getElementById(
    "info"
  ).innerHTML = `BackgroundColor :${getRandomColor}`;
});
