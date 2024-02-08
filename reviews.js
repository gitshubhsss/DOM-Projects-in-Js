const slides = document.querySelectorAll(".slide");
let range = slides.length;
let cnt = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  while (cnt != 0) {
    cnt--;
    slideImage();
    break;
  }
  
};
const goNext = () => {
  while (cnt != range - 1) {
    cnt++;
    slideImage();
    break;
  }
};

let slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${cnt * 100}%)`;
  });
};
