// const slide=document.querySelectorAll('.slide')
// var effect=0;
// slides.forEach((slide,index)=>{
//     slide.style.left=`${index*100}%`
// })
// const slideImage=()=>{
//     slides.forEach((slide)=>{
//         slide.style.transform = `translateX(-${effect * 100}%)`
//     });
// }
// const NextSlide=()=>{
//     if(effect<slide.length-1){
//         effect++;
//         slideImage();
//     }
// }
// const PrevSlide=()=>{
//     if(effect != 0){
//         effect--;
//         slideImage();
//     }
// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}