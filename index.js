let bulb = document.getElementById("bulb");
let theme = document.getElementById('theme');
//inverts css color contrast

const lightMode = () => {
  document.querySelector("html").style.backgroundColor = "white";
  document.querySelector("header").style.backgroundColor = "black";
  let buttons = document.querySelectorAll(".nav-button");
  for (var i = 0; i < buttons.length; i++) {
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
  for (var i = 0; i < buttons.length; i++) {
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
