const container = document.querySelector('.main');
const conversionBoxes = document.querySelectorAll('.conversion-box');
const conversionPELs = document.querySelectorAll('.conversion-text');
const conversionTitles = document.querySelectorAll('.conversion-title');
const darkModeToggle = document.getElementById('dark-icon');
const lightModeToggle = document.getElementById('light-icon');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  container.classList.add('darkmode-box');
  conversionBoxes.forEach((box) => box.classList.add('darkmode-cb'));
  conversionPELs.forEach((el) => el.classList.add('darkmode-cp'));
  conversionTitles.forEach((title) => title.classList.add('darkmode-ct'));
  localStorage.setItem('darkMode', 'enabled');
  lightModeToggle.style.display = 'flex';
  darkModeToggle.style.display = 'none';
};

const disableDarkMode = () => {
  container.classList.remove('darkmode-box');
  conversionBoxes.forEach((box) => box.classList.remove('darkmode-cb'));
  conversionPELs.forEach((el) => el.classList.remove('darkmode-cp'));
  conversionTitles.forEach((title) => title.classList.remove('darkmode-ct'));
  localStorage.removeItem('darkMode');
  lightModeToggle.style.display = 'none';
  darkModeToggle.style.display = 'flex';
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

lightModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
