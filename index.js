function random255(){
  return Math.floor(Math.random() * 256);
}

function randomColor(){
  return `rgb(${random255()}, ${random255()}, ${random255()})`;
}

let stage;
let problemSet;
let correctAnswer;

function init(){
  stage = 0;
  problemSet = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

function nextStage(){
  stage++;
  problemSet = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

function draw(){
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.background = problemSet[index];
  })
  document.querySelector('.rgb-text').textContent = problemSet[correctAnswer];
  document.querySelector('.score').textContent = stage;
}

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    if(index === correctAnswer){
      nextStage();
      draw();
    } else {
      init();
      draw();
    }
  })
});

init();
draw();
