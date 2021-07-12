const themeslider = document.querySelector(".theme-slider");
const body = document.getElementsByTagName("body")[0];
const toggle = document.querySelector(".slider-button");
const display = document.querySelector(".result-box");
const header = document.querySelector(".heading-box");
const digits = document.querySelectorAll(".btn");
const numpad = document.querySelector(".numpad-box");

var themeset = ["flex-start", "center", "flex-end"];
var i = 0;
themeslider.addEventListener("click", () => {
  console.log(themeslider);
  i++;
  if (i > 2) {
    i = 0;
  }
  themeslider.style.justifyContent = themeset[i];
  if (i == 0) {
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    header.style.color = "white";
    themeslider.style.backgroundColor = "hsl(223, 31%, 20%)";
    toggle.style.backgroundColor = "hsl(25, 98%, 40%)";
    display.style.backgroundColor = "hsl(224, 36%, 15%)";
    display.style.color = "white";
    numpad.style.backgroundColor = "hsl(223, 31%, 20%)";
    for (let j = 0; j < digits.length; j++) {
      const element = digits[j];
      element.style.color = "hsl(221, 14%, 31%)";
      element.style.backgroundColor = "hsl(45, 7%, 89%)";
      element.style.boxShadow = "0px 3px hsl(28, 16%, 65%)";
      if (j == 3 || j == 16) {
        element.style.backgroundColor = "hsl(225, 21%, 49%)";
        element.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
        element.style.color = "white";
      }
      if (j == 17) {
        element.style.backgroundColor = "hsl(6, 63%, 50%)";
        element.style.boxShadow = "0px 3px hsl(6, 70%, 34%)";
        element.style.color = "white";
      }
    }
  } else if (i == 1) {
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    header.style.color = "black";
    themeslider.style.backgroundColor = "hsl(0, 5%, 81%)";
    toggle.style.backgroundColor = "hsl(25, 98%, 40%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.color = "black";
    numpad.style.backgroundColor = "hsl(0, 5%, 81%)";
    for (let j = 0; j < digits.length; j++) {
      const element = digits[j];
      element.style.color = "hsl(60, 10%, 19%)";
      element.style.backgroundColor = "hsl(45, 7%, 89%)";
      element.style.boxShadow = "0px 3px hsl(35, 11%, 61%)";
      if (j == 3 || j == 16) {
        element.style.backgroundColor = "hsl(185, 42%, 37%)";
        element.style.boxShadow = "0px 3px hsl(185, 58%, 25%)";
        element.style.color = "white";
      }
      if (j == 17) {
        element.style.backgroundColor = "hsl(25, 98%, 40%)";
        element.style.boxShadow = "0px 3px hsl(25, 99%, 27%)";
        element.style.color = "white";
      }
    }
  } else {
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    header.style.color = "hsl(52, 100%, 62%)";
    themeslider.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggle.style.backgroundColor = "hsl(176, 100%, 44%)";
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.color = "hsl(52, 100%, 62%)";
    numpad.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (let j = 0; j < digits.length; j++) {
      const element = digits[j];
      element.style.color = "hsl(52, 100%, 62%)";
      element.style.backgroundColor = "hsl(268, 47%, 21%)";
      element.style.boxShadow = "0px 3px hsl(290, 70%, 36%)";
      if (j == 3 || j == 16) {
        element.style.backgroundColor = "hsl(281, 89%, 26%)";
        element.style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
        element.style.color = "white";
      }
      if (j == 17) {
        element.style.backgroundColor = "hsl(176, 100%, 44%)";
        element.style.boxShadow = "0px 3px hsl(177, 92%, 70%)";
        element.style.color = "black";
      }
    }
  }
});

// logical part,

let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (const item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += "*";
    } else if (buttonText == "=") {
      screen.innerText = eval(screenValue);
      screenValue = screen.innerText;
    } else if (buttonText == "RESET") {
      screenValue = "0";
    } else if (buttonText == "DEL") {
      screenValue = screenValue.slice(0, -1);
      if (screenValue == "" || screenValue == "undefine") {
        screenValue = "0";
      }
    } else {
      screenValue += buttonText;
    }
    screenValue = screenValue.substr(0, 10);
    screen.innerText = screenValue;
    if (screenValue == "0") {
      screenValue = "";
    }
  });
}
