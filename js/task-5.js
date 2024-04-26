function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const currentColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  currentColor.textContent = randomColor;
  bodyColor.style.backgroundColor = randomColor;
  
  console.log(bodyColor.style.backgroundColor);
})