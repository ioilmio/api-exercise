const main = document.createElement('div');
const para = document.createElement('p')
const ulist = document.createElement('ul');
const list = document.createElement('li');
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

// const playersScore = [

//   { "user": "john", "score": 155 },
//   { "user": "mark", "score": 156 },
//   { "user": "michael", "score": 157 },
//   { "user": "angel", "score": 158 },

// ];



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

async function postGameScore(url = '', userScore = {}) {
  const response = await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userScore)
    }
  );

  return response.json();
}

async function getGameScore(url) {
  const response = await fetch(url);
  return response.json();
}

const gameName = { "name": 'My awesome ultra game' };

postGameName('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', gameName)
  .then(gamename => {
    console.log(gamename);
    postGameScore(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gamename.result.split(' ')[3]}/scores`, { "user": `"${playerName.value}"`, "score": `"${score.value}"` })
      .then((score) => {
        console.log(score);
        getGameScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eBRgSwHrFmz4MjTjLIp4/scores')
          .then(userScore => {
            console.log(userScore);
            list.textContent = JSON.stringify(userScore)
          });
      });
  })


// submitBtn.addEventListener('click', function(event) {
//   postGameScore()
//   event.preventDefault()
// })