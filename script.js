function generateColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}

function generatePalette() {
  const palette = document.getElementById('palette');
  palette.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const color = generateColor();
    const div = document.createElement('div');
    div.classList.add('color');
    div.style.backgroundColor = color;

    const hex = document.createElement('p');
    hex.classList.add('hex');
    hex.textContent = color;

    div.appendChild(hex);
    div.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`${color} copied to clipboard!`);
    });

    palette.appendChild(div);
  }
}

document.getElementById('generate').addEventListener('click', generatePalette);
window.onload = generatePalette;
