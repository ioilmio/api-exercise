const url = 'https://api.giphy.com/v1/gifs/random?api_key=geQ8CBjzSYWSvQ84b4XljGw4e5GxrVNY&tag=&rating=g'
const gif = document.createElement('img');
const button = document.createElement('button');
document.body.append(gif)
document.body.append(button)
button.textContent = 'GIF'

console.log('before', Date.now());

function gifButton() {
  fetch(url)
  .then(response => response.json())
  .then(json => {
    gif.src = json.data.image_url;
    console.log(Date.now(), json);
    console.log('inside', Date.now());
  })
  .catch(error => console.log(error));
}

gifButton()
console.log('after', Date.now());



function loop() {
  
  console.log('loop',Date.now());
  for (let i = 0; i < 10; i++) {
    console.log(i, Date.now());
  }
}


button.addEventListener('click',gifButton)
// button.addEventListener('click', loop)

