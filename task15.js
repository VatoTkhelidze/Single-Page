let right_arrow = document.querySelector('.right_box');
let left_arrow = document.querySelector('.left_box');
let slideBox = document.querySelector('.slides');
let imageFirst = document.querySelector('.slide_three');
let CountButtonHomeClicks = 0;
let calculateWidthGap;



left_arrow.addEventListener('click', function sliding(){
    calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
    CountButtonHomeClicks += 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
})

right_arrow.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  CountButtonHomeClicks -= 1;
  slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
  slideBox.style.transition = '1.5s';
})


