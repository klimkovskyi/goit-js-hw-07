function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const container = document.querySelector('#boxes');

function createBoxes(amount) {
  
  container.innerHTML = '';
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }

  return container.append(...boxes);
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  input.value = '';

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
})

destroyBtn.addEventListener('click', () => {
  container.innerHTML = '';
})
