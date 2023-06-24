let count = 0;
const values = document.querySelector('#count');
const decreaseButton = document.querySelector('#decrease');
const resetButton = document.querySelector('#Reset');
const increaseButton = document.querySelector('#increase');

const updateCount = () => {
  values.textContent = count;
};

const reset = () => {
  count = 0;
  updateCount();
};

const decrement = () => {
  count--;
  updateCount();
};

const increment = () => {
  count++;
  updateCount();
};

resetButton.addEventListener('click', reset);
decreaseButton.addEventListener('click', decrement);
increaseButton.addEventListener('click', increment);
