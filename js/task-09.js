const randomBodyBgBtn = document.querySelector('.change-color');
const bgColorCodeRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomBodyBg = () => {
  const newBgColor = getRandomHexColor();
  document.body.style.backgroundColor = newBgColor;
  bgColorCodeRef.textContent = newBgColor;
};

randomBodyBgBtn.addEventListener('click', randomBodyBg);
