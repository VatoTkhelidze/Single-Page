let right_arrow = document.querySelector('.right_box_desktop');
let left_arrow = document.querySelector('.left_box_desktop');
let slideBox = document.querySelector('.slides');
let imageFirst = document.querySelector('.slide_three');
let CountButtonHomeClicks = 0;
let calculateWidthGap;

let right_arrow_tablet = document.querySelector('.right_box_tablet');
let left_arrow_tablet = document.querySelector('.left_box_tablet');

let right_arrow_phone = document.querySelector('.right_box_phone');
let left_arrow_phone = document.querySelector('.left_box_phone');


left_arrow.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  if(calculateWidthGap * CountButtonHomeClicks < 1710 && calculateWidthGap * CountButtonHomeClicks >= -570){
    CountButtonHomeClicks += 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
  }
})

right_arrow.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  if(calculateWidthGap * CountButtonHomeClicks > -570 && calculateWidthGap * CountButtonHomeClicks <= 1710){
    CountButtonHomeClicks -= 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
  }
})






left_arrow_tablet.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  if(calculateWidthGap * CountButtonHomeClicks < 1140 && calculateWidthGap * CountButtonHomeClicks >= -1140){
    CountButtonHomeClicks += 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
  }
})

right_arrow_tablet.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  if(calculateWidthGap * CountButtonHomeClicks > -1140 && calculateWidthGap * CountButtonHomeClicks <= 1710){
    CountButtonHomeClicks -= 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
  }
})




left_arrow_phone.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  if(calculateWidthGap * CountButtonHomeClicks < 570 && calculateWidthGap * CountButtonHomeClicks >= -1140){
    CountButtonHomeClicks += 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
  }
})

right_arrow_phone.addEventListener('click', function sliding(){
  calculateWidthGap = parseInt(window.getComputedStyle(imageFirst).width) + parseInt(window.getComputedStyle(slideBox).gap);
  if(calculateWidthGap * CountButtonHomeClicks > -570 && calculateWidthGap * CountButtonHomeClicks <= 1710){
    CountButtonHomeClicks -= 1;
    slideBox.style.transform = `translateX(${calculateWidthGap * CountButtonHomeClicks}px)`;
    slideBox.style.transition = '1.5s';
  }
})






