let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let decrease = document.querySelector("#decrease");

let cnt = 0;

increase.addEventListener("click", () => {
  cnt++;
  document.querySelector("#num").innerText = `${cnt}`;
});

decrease.addEventListener("click", () => {
  document.querySelector("#num").innerText = `${cnt - 1}`;
  cnt--;
});

reset.addEventListener("click", () => {
  document.location.reload();
});
