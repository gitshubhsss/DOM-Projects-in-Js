const slides =document.querySelectorAll(".slide");
let cnt=0;

slides.forEach((slide,index)=>{
  slide.style.left=`${index * 100}%`;
})

const goPrev=()=>{
  cnt--;
  slideImage();
  
}
const goNext=()=>{
  cnt++;
  slideImage();
}

let slideImage=()=>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${cnt*100}%)`
  })
}