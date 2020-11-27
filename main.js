const main = document.createElement('div');
const para = document.createElement('p')
const ulist = document.createElement('ul');
const list = document.createElement('li');
// const playerName = document.querySelector('input[name=playerName]');
// const score = document.querySelector('input[name=score]');
// const submitBtn = document.createElement('button');
const playerName = document.createElement('input');
const score = document.createElement('input');
const submitBtn = document.createElement('button');

playerName.placeholder = 'Name';
playerName.type = 'text';

score.placeholder = 'Score';
score.type = 'number'

submitBtn.textContent = 'Submit'
submitBtn.type = 'submit';

main.textContent = 'LeaderBoard';




document.body.appendChild(main);
main.appendChild(playerName);
main.appendChild(score);
main.appendChild(submitBtn);
main.appendChild(para);
main.appendChild(ulist);
ulist.appendChild(list);
list.textContent = '';

submitBtn.addEventListener('click', console.log(score.value));

async function postGameName(url = '', inputGameName = {}) {
  const response = await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputGameName)
    }
  );
  return response.json();
}


const gameName = { "name": 'My awesome ultra game' };

postGameName('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', gameName)
.then(data => {
  // console.log(data);
  para.textContent += JSON.stringify(data.result);
  })


async function postGameScore(url = '', userScore = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userScore)
  });

  // console.log(userScore);
  return response.json();
}

const playersScore = [
  
  { "user": "john", "score": 155 },
  { "user": "mark", "score": 156 },
  { "user": "michael", "score": 157 },
  { "user": "angel", "score": 158 },
  
];

postGameScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eBRgSwHrFmz4MjTjLIp4/scores',
 { "user": playerName.value, "score": score.value })
// JSON.stringify(playersScore))
.then(data => {
  console.log(data);
  list.textContent = JSON.stringify(data);
  });


async function getGameScore(url) {
  const response = await fetch(url);
  return response.json();
}

getGameScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eBRgSwHrFmz4MjTjLIp4/scores')
  .then(data => {
      list.textContent = JSON.stringify(data)
      // list.textContent += JSON.stringify(data.result.score)
    });
