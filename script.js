const images = [
  'https://images.unsplash.com/photo-1555949963-aa79dcee981d',
  'https://images.unsplash.com/photo-1549921296-3a6b51f60151',
  'https://images.unsplash.com/photo-1621562614266-1032c2c71820',
  'https://images.unsplash.com/photo-1655725318674-df5266f1a1ab'
];

let index = 0;
const background = document.getElementById('background');

function changeBackground() {
  background.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 10000);