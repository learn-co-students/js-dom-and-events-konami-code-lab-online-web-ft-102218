const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
// up up down down left right left right b a

function init() {

}

document.addEventListener('keydown', (e) => {
  const key = parseInt(e.detail || e.which);
  console.log(key);
  if (key === code[index]) {
    index++;
    console.log(`index is now ${index}`);
    if (index === code.length) {
      alert('You got it');
      index = 0;
    }
  } else {
    index = 0;
  }
});
