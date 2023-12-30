const textContainer = document.getElementById("text-container");
const textInput = document.getElementById("input");
const activeFontSize = document.getElementById("activeFontSize");
const fontIncrease = document.getElementById("font-up");
const fontDecrease = document.getElementById("font-down");
const text = document.getElementById("text");

const colorPicker = document.getElementById("colorPicker");

const textView = () => {
  textInput.addEventListener("input", () => {
    textContainer.textContent = textInput.value;
  });
};
textView();

let i = 3;
let j = 0;
fontSizeArray = [
  "4px",
  "8px",
  "12px",
  "16px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "40px",
  "44px",
  "48px",
  "52px",
  "56px",
  "60px",
];

const fontSizeUp = () => {
  fontIncrease.addEventListener("click", () => {
    textContainer.style.fontSize = fontSizeArray[++i];
  });
};
fontSizeUp();

const fontSizeDown = () => {
  fontDecrease.addEventListener("click", () => {
    textContainer.style.fontSize = fontSizeArray[--i];
  });
};
fontSizeDown();

const color = () => {
  let colorValue = colorPicker.value;
  textContainer.style.color = colorValue;
};

colorPicker.addEventListener("input", color);
color();

function changeFont() {
  const selectedFont = document.getElementById("font-option").value;

  textContainer.style.fontFamily = selectedFont;
}
changeFont();
