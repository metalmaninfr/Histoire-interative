import 'flexboxgrid';
import './styles/styles.scss';

const container = document.querySelectorAll('.container');
const map = document.querySelector('.mapContainer');
const leftBtn = document.querySelectorAll('.stickLeft');
const rightBtn = document.querySelectorAll('.stickRight');
const topBtn = document.querySelectorAll('.stickTop');
const bottomBtn = document.querySelectorAll('.stickBottom');

var numberX = 0;
var numberY = 0;
var moveX = "translateX(" + numberX + "vw)";
var moveY = "translateY(" + numberY + "vh)";



for (var i = 0; i < rightBtn.length; i++) {
  rightBtn[i].addEventListener('click', function(){
  numberX += - 100;
  var moveX = "translateX(" + numberX + "vw) translateY(" + numberY + "vh)";
  map.style.transform = moveX;
});
}

for (var i = 0; i < leftBtn.length; i++) {
  leftBtn[i].addEventListener('click', function(){
  numberX += + 100;
  var moveX = "translateX(" + numberX + "vw) translateY(" + numberY + "vh)";
  map.style.transform = moveX + moveY;
});
}

for (var i = 0; i < topBtn.length; i++) {
  topBtn[i].addEventListener('click', function(){
  numberY += + 100;
  var moveY = "translateY(" + numberY + "vh) translateX(" + numberX + "vw)";
  map.style.transform = moveY + moveX;
});
}

for (var i = 0; i < bottomBtn.length; i++) {
  bottomBtn[i].addEventListener('click', function(){
  numberY += - 100;
  var moveY = "translateY(" + numberY + "vh) translateX(" + numberX + "vw)";
  map.style.transform = moveY + moveX;
});
}
