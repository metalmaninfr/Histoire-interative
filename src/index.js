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
  hideBtn();
});
}

for (var i = 0; i < leftBtn.length; i++) {
  leftBtn[i].addEventListener('click', function(){
  numberX += + 100;
  var moveX = "translateX(" + numberX + "vw) translateY(" + numberY + "vh)";
  map.style.transform = moveX + moveY;
  hideBtn();
});
}

for (var i = 0; i < topBtn.length; i++) {
  topBtn[i].addEventListener('click', function(){
  numberY += + 100;
  var moveY = "translateY(" + numberY + "vh) translateX(" + numberX + "vw)";
  map.style.transform = moveY + moveX;
  hideBtn();
});
}

for (var i = 0; i < bottomBtn.length; i++) {
  bottomBtn[i].addEventListener('click', function(){
  numberY += - 100;
  var moveY = "translateY(" + numberY + "vh) translateX(" + numberX + "vw)";
  map.style.transform = moveY + moveX;
  hideBtn();
});
}


const questionContainer = document.querySelectorAll('.question-container');
const questionAnswer = document.querySelectorAll('.question-container-btn-answer');

showFirstQuestion();

questionAnswer[0].onclick = function() {
  showSecondeQuestion();
};

questionAnswer[1].onclick = function() {
  showthirdQuestion();
};

questionAnswer[2].onclick = function() {
  hideQuestions();
  for (var i = 0; i < rightBtn.length; i++) {
    rightBtn[i].style.display = 'block';
  }
};


// ---------- FUNCTIONS
function showFirstQuestion() {
  questionContainer[0].style.display = "block";
  questionContainer[1].style.display = "none";
  questionContainer[2].style.display = "none";
}
function showSecondeQuestion() {
  questionContainer[0].style.display = "none";
  questionContainer[1].style.display = "block";
  questionContainer[2].style.display = "none";
}
function showthirdQuestion() {
  questionContainer[0].style.display = "none";
  questionContainer[1].style.display = "none";
  questionContainer[2].style.display = "block";
}
function hideQuestions() {
  questionContainer[0].style.display = "none";
  questionContainer[1].style.display = "none";
  questionContainer[2].style.display = "block";
}
function hideBtn() {
  for (var i = 0; i < rightBtn.length; i++) {
    rightBtn[i].style.display = "none";
  }
  for (var i = 0; i < topBtn.length; i++) {
    topBtn[i].style.display = "none";
  }
  for (var i = 0; i < bottomBtn.length; i++) {
    bottomBtn[i].style.display = "none";
  }
  for (var i = 0; i < array.length; i++) {
    leftBtn[i].style.display = "none";
  }
}
