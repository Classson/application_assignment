fetch('/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });

const gifs = [
  'https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif',
  'https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif',
  'https://media.giphy.com/media/vaRCdgM0fLNrW/giphy.gif',
  'https://media.giphy.com/media/26DOMQa5Ib2SmaRZm/giphy.gif',
  'https://media.giphy.com/media/3o7TKqB7Y98alpjTu8/giphy.gif'
]

function randomize (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

img = document.createElement('img');
img.src = randomize(gifs)
document.getElementById('imgDiv').appendChild(img)




