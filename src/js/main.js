/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');
const lengthPEl = document.getElementById('length');
const volumePEl = document.getElementById('volume');
const massPEl = document.getElementById('mass');

function renderLength() {
  const feet = inputEl.value * 3.281;
  const meters = inputEl.value / 3.281;
  lengthPEl.innerText = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${
    inputEl.value
  } feet = ${meters.toFixed(3)} meters`;
}

function renderVolume() {
  const gallons = inputEl.value * 0.264;
  const liters = inputEl.value / 0.264;
  volumePEl.innerText = `${inputEl.value} liters = ${gallons.toFixed(3)} gallons | ${
    inputEl.value
  } gallons = ${liters.toFixed(3)} liters`;
}

function renderMass() {
  const pounds = inputEl.value * 2.204;
  const kilograms = inputEl.value / 2.204;
  massPEl.innerText = `${inputEl.value} kilograms = ${pounds.toFixed(3)} pounds | ${
    inputEl.value
  } pounds = ${kilograms.toFixed(3)} kilograms`;
}

function render() {
  renderLength();
  renderVolume();
  renderMass();
}

buttonEl.addEventListener('click', render);
