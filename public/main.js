
fetch('/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });

img = document.createElement('img');
img.src = 'https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif';
document.getElementById('imgDiv').appendChild(img)
