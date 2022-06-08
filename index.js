// *** DARK MODE ON OFF TOGGLE ***

let bulb = document.getElementById("bulb");
let theme = document.getElementById('theme');
//inverts css color contrast

const lightMode = () => {
  document.querySelector("html").style.backgroundColor = "white";
  document.querySelector("header").style.backgroundColor = "black";
  let buttons = document.querySelectorAll(".nav-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "white";
  }
  document.querySelector("main").style.color = "black";
  document.querySelector("footer").style.backgroundColor = "black";
  document.querySelector("footer").style.color = "white";
  document.querySelector("#contact-button").style.color = "black";
  theme.style.color = 'white';
};

// resets css to default

const darkMode = () => {
  document.querySelector("html").style.backgroundColor = "";
  document.querySelector("header").style.backgroundColor = "";
  let buttons = document.querySelectorAll(".nav-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "";
  }
  document.querySelector("main").style.color = "";
  document.querySelector("footer").style.backgroundColor = "";
  document.querySelector("footer").style.color = "";
  document.querySelector("#contact-button").style.color = "";
  theme.style.color = '';
};

//event handler for dark mode toggle

let tracker = "dark";
const changeBulb = () => {
  if (tracker === "dark") {
    bulb.src = "./imgs/bulb2.png";
    tracker = "light";
    lightMode();
  } else {
    bulb.src = "./imgs/bulb1.png";
    tracker = "dark";
    darkMode();
  }
};

bulb.addEventListener("click", changeBulb);
theme.addEventListener("click", changeBulb);

// ----------------------------------------------------------------------------------------

// *** skills section ***


document.getElementById('skills-img1').addEventListener('mouseover', function textAppear2() {document.getElementById('skills-text1').style.visibility = 'visible'} )
document.getElementById('skills-img1').addEventListener('mouseout', function textDisappear1() {document.getElementById('skills-text1').style.visibility = ''})

document.getElementById('skills-img2').addEventListener('mouseover', function textAppear2() {document.getElementById('skills-text2').style.visibility = 'visible'})
document.getElementById('skills-img2').addEventListener('mouseout', function textDisappear2() {document.getElementById('skills-text2').style.visibility = ''})

document.getElementById('skills-img3').addEventListener('mouseover', function textAppear3() {document.getElementById('skills-text3').style.visibility = 'visible'})
document.getElementById('skills-img3').addEventListener('mouseout', function textDisappear3() {document.getElementById('skills-text3').style.visibility = ''})

document.getElementById('skills-img4').addEventListener('mouseover', function textAppear4() {document.getElementById('skills-text4').style.visibility = 'visible'})
document.getElementById('skills-img4').addEventListener('mouseout', function textDisappear4() {document.getElementById('skills-text4').style.visibility = ''})

document.getElementById('skills-img5').addEventListener('mouseover', function textAppear5() {document.getElementById('skills-text5').style.visibility = 'visible'})
document.getElementById('skills-img5').addEventListener('mouseout', function textDisappear5() {document.getElementById('skills-text5').style.visibility = ''})

document.getElementById('skills-img6').addEventListener('mouseover', function textAppear6() {document.getElementById('skills-text6').style.visibility = 'visible'})
document.getElementById('skills-img6').addEventListener('mouseout', function textDisappear6() {document.getElementById('skills-text6').style.visibility = ''})

document.getElementById('skills-img7').addEventListener('mouseover', function textAppear7() {document.getElementById('skills-text7').style.visibility = 'visible'})
document.getElementById('skills-img7').addEventListener('mouseout', function textDisappear7() {document.getElementById('skills-text7').style.visibility = ''})
