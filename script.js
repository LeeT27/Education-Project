function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = `${Math.random() * window.innerWidth}px`;
  confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear infinite`;

  document.body.appendChild(confetti);

  confetti.addEventListener('animationiteration', () => {
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
  });
}

function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
}



// Create a keyframe animation for falling





function change(id,id2) {
  // Get the video element
  document.getElementById("po").innerHTML = id2;
  var video = document.getElementById('myVideo');

  // Get the source element
  var source = document.getElementById('videoSource');

  // Change the source URL
  source.src = id;

  // Load the new video
  video.load();
}









function checkScroll() {
  // Get the current scroll position
  var scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition >= 5) {
    document.getElementById('page2a').style.animation = 'slidein 1s ease-out 0s 1 normal forwards';
    document.getElementById('page2b').style.animation = 'slidein 1s ease-out 0.2s 1 normal forwards';
    document.getElementById('page2c').style.animation = 'slidein 1s ease-out 0.6s 1 normal forwards';
    document.getElementById('page2d').style.animation = 'slidein 1s ease-out 0.8s 1 normal forwards';
  }
  if (scrollPosition >= 1000) {
    document.getElementById('page3a').style.animation = 'fade 1s ease-out 0s 1 normal forwards';
    document.getElementById('page3b').style.animation = 'fade 1s ease-out 0.2s 1 normal forwards';
    document.getElementById('image-container').style.animation = 'fade 1s ease-out 0.6s 1 normal forwards';
  }
  if (scrollPosition >= 1800) {
    document.getElementById('page4t').style.animation = 'slidey 1s ease-out 0s 1 normal forwards';
    document.getElementById('page4g').style.animation = 'slidey 1s ease-out 0.2s 1 normal forwards';
    document.getElementById('page4b').style.animation = 'slidey 1s ease-out 0.5s 1 normal forwards';
  }
  if (scrollPosition >= 2600) {
    document.getElementById('page5t').style.animation = 'shake 0.2s linear 0.5s 3 normal forwards';

  }


}
window.addEventListener('scroll', checkScroll);





function rhange(id2,chap) {
  chapter=chap;
  document.getElementById("ho").innerHTML = id2;
  newQ();
}


var score=0;
var question=0;
var g1=true;
var g2=false;
var g3=false;
var g4=false;

document.getElementById("C1").addEventListener("click", function(){
  if (g1==true){
    score++;
    question++;
    updateScore();
    colorAnswer();
    right();
    g1=false;
  }
  else {
    question++;
    updateScore();
    colorAnswer();
    wrong();
    g1=false;
  }
});
document.getElementById("C2").addEventListener("click", function(){
  if (g2==true){
    score++;
    question++;
    updateScore();
    colorAnswer();
    right();
    g2=false;
  }
  else {
    question++;
    updateScore();
    colorAnswer();
    wrong();
    g2=false;
  }
});
document.getElementById("C3").addEventListener("click", function(){
  if (g3==true){
    score++;
    question++;
    updateScore();
    colorAnswer();
    right();
    g3=false;
  }
  else {
    question++;
    updateScore();
    colorAnswer();
    wrong();
    g3=false;
  }
});
document.getElementById("C4").addEventListener("click", function(){
  if (g4==true){
    score++;
    question++;
    updateScore();
    colorAnswer();
    right();
    g4=false;
  }
  else {
    question++;
    updateScore();
    colorAnswer();
    wrong();
    g4=false;
  }
});

function updateScore(){
  document.getElementById("store").innerHTML= score + "/" + question;
  document.getElementById("C1").disabled = true;
  document.getElementById("C2").disabled = true;
  document.getElementById("C3").disabled = true;
  document.getElementById("C4").disabled = true;
}

var myElement = document.getElementById('red');

var errorSound = new Audio('wrong.mp3');
var correctSound = new Audio('correct.mp3');
var child = new Audio('child.mp3');

function wrong(){
  errorSound.play();
  myElement.classList.add('wrong');
  setTimeout(function() {
    myElement.classList.remove('wrong');
  }, 200);
}

function right(){
  correctSound.play();
  myElement.classList.add('correct');
  setTimeout(function() {
    myElement.classList.remove('correct');
  }, 200);
}

function colorAnswer(){
  if (g1==true){
    document.getElementById('C1').style.backgroundColor='green';
    document.getElementById('C1').style.color='white';
    document.getElementById('C2').style.backgroundColor='red';
    document.getElementById('C2').style.color='black';
    document.getElementById('C3').style.backgroundColor='red';
    document.getElementById('C3').style.color='black';
    document.getElementById('C4').style.backgroundColor='red';
    document.getElementById('C4').style.color='black';
  }
  if (g2==true){
    document.getElementById('C1').style.backgroundColor='red';
    document.getElementById('C1').style.color='black';
    document.getElementById('C2').style.backgroundColor='green';
    document.getElementById('C2').style.color='white';
    document.getElementById('C3').style.backgroundColor='red';
    document.getElementById('C3').style.color='black';
    document.getElementById('C4').style.backgroundColor='red';
    document.getElementById('C4').style.color='black';
  }
  if (g3==true){
    document.getElementById('C1').style.backgroundColor='red';
    document.getElementById('C1').style.color='black';
    document.getElementById('C2').style.backgroundColor='red';
    document.getElementById('C2').style.color='black';
    document.getElementById('C3').style.backgroundColor='green';
    document.getElementById('C3').style.color='white';
    document.getElementById('C4').style.backgroundColor='red';
    document.getElementById('C4').style.color='black';
  }
  if (g4==true){
    document.getElementById('C1').style.backgroundColor='red';
    document.getElementById('C1').style.color='black';
    document.getElementById('C2').style.backgroundColor='red';
    document.getElementById('C2').style.color='black';
    document.getElementById('C3').style.backgroundColor='red';
    document.getElementById('C3').style.color='black';
    document.getElementById('C4').style.backgroundColor='green';
    document.getElementById('C4').style.color='white';
  }
  setTimeout(function() {
    document.getElementById('C1').style.backgroundColor='#77C3EC';
    document.getElementById('C1').style.color='white';
    document.getElementById('C2').style.backgroundColor='#77C3EC';
    document.getElementById('C2').style.color='white';
    document.getElementById('C3').style.backgroundColor='#77C3EC';
    document.getElementById('C3').style.color='white';
    document.getElementById('C4').style.backgroundColor='#77C3EC';
    document.getElementById('C4').style.color='white';

    newQ();
  }, 3000);
}

function newQ(){
  if (question==0 && chapter==8){
    showQuestion('Consider a circle with center O and radius r. Let AB be a chord of the circle, and P be a point on the circle such that AP = PB = r/2. If the measure of the minor arc AB is 60°, what is the ratio of the area of the sector AOB to the area of the triangle AOB, where ∠AOB is the central angle subtended by the chord?','sqrt(3)/4','sqrt(3)/3','π/4','π/6');
    g1=false;
    g2=false;
    g3=false;
    g4=true;
  }
  if (question==1 && chapter==8){
    showQuestion("In circle O, angle_ABC is a central angle with a measure of 5/12 of the circle's circumference. If the radius of the circle is r, what is the length of the minor arc AC?",'15π/4*r','5π/6*r','25π/3*r','20π/3*r');
    g1=false;
    g2=true;
    g3=false;
    g4=false;
  }
  if (question==2 && chapter==8){
    showQuestion('In circle P, the central angle XYZ measures 75 degrees. If the radius of the circle is 15 units, what is the area of the sector formed by this central angle?','47πsq','70πsq','94πsq','117πsq');
    g1=true;
    g2=false;
    g3=false;
    g4=false;
  }
  if (question==3 && chapter==8){
    showQuestion('In a circle with a radius r equal to 12 units, the central angle alpha measures 5pi/6 radians. If the measure of another central angle beta in degrees is twice the measure of alpha, what is the measure of beta?','150∘','180∘','210∘','240∘');
    g1=true;
    g2=false;
    g3=false;
    g4=false;
  }
  if (question==4 && chapter==8){
    showQuestion('In a circle with a radius r equal to 15 units, the central angle theta measures 150 degrees. What is the measure of theta in radians?','3π radians','2.75π radians','2.5π radians','5/6π radians');
    g1=false;
    g2=false;
    g3=false;
    g4=true;
  }
  if (question==5 && chapter==8){
    showQuestion('In a circle with a radius r equal to 12 units, the central angle theta measures 2 radians. What is the measure of the arc formed by this central angle?','2π','6π','4π','8π');
    g1=false;
    g2=true;
    g3=false;
    g4=false;
  }
  if (question==6 && chapter==8){
    showQuestion('In circle C, chord XY subtends an angle of 1.5 radians at the center. Point Z lies on the circle, and angle XZY is formed by the chord and the circle. What is the measure of angle XZY in degrees?','45∘','270∘','120∘','90∘');
    g1=false;
    g2=true;
    g3=false;
    g4=false;
  }
  if (question==7 && chapter==8){
    showQuestion('In circle C, quadrilateral WXYZ is inscribed. If the measure of arc WX is 2.5 radians and the measure of arc YZ is 1.8 radians, what is the measure of angle WYZ in degrees?','90∘','72∘','144∘','108∘');
    g1=false;
    g2=false;
    g3=true;
    g4=false;
  }
  if (question==8 && chapter==8){
    showQuestion('In circle C, quadrilateral PQRS is inscribed. The diameter of the circle passes through points P and R. If the measure of arc PQ is 2 radians, and the measure of angle PSR is twice the measure of angle PQR, what is the measure of angle PQR in degrees?','90∘','60∘','45∘','30∘');
    g1=false;
    g2=false;
    g3=false;
    g4=true;
  }
  if (question==9 && chapter==8){
    showQuestion('In circle C, chord DE subtends an angle of 1.8 radians at the center. Point F lies on the circle, and angle DEF is formed by the chord and the circle. If the measure of angle DEF is twice the measure of angle FEC, what is the measure of angle FEC in degrees?','54∘','72∘','36∘','18∘');
    g1=true;
    g2=false;
    g3=false;
    g4=false;
  }
  if (question==10 && chapter==8){
    showQuestion('Congrats!!! You got a ' + score*10 + "%!!!",'','','','');
    document.getElementById("C1").disabled = true;
    document.getElementById("C2").disabled = true;
    document.getElementById("C3").disabled = true;
    document.getElementById("C4").disabled = true;
    child.play();
    generateConfetti();
  }
}

function showQuestion(question,c1,c2,c3,c4){
  document.getElementById('q').innerHTML=question;
  document.getElementById('C1').innerHTML=c1;
  document.getElementById('C2').innerHTML=c2;
  document.getElementById('C3').innerHTML=c3;
  document.getElementById('C4').innerHTML=c4;
  document.getElementById("C1").disabled = false;
  document.getElementById("C2").disabled = false;
  document.getElementById("C3").disabled = false;
  document.getElementById("C4").disabled = false;
}




