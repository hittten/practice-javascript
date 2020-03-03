import addCounter from "./counter";

// Elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const counters: HTMLUListElement = document.querySelector('#counters');

// Events
input.onkeyup = (e) => {
  const inputElement = e.target as HTMLInputElement;
  const seconds = inputElement.value;

  button.textContent = seconds ? `Contar ${seconds} segundos` : 'Contar';

  if (e.key === 'Enter') {
    button.click();
  }
}

button.onclick = () => {
  if (input.value) {
    addCounter(parseInt(input.value), counters);
  }
  input.focus();
  input.select();
}
