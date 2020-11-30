const main = document.createElement('div');
const para = document.createElement('p');
const ulist = document.createElement('ul');
const list = document.createElement('li');

const form = document.createElement('form');
const playerName = document.createElement('input');
const score = document.createElement('input');
const submitBtn = document.createElement('button');
const scoreBtn = document.createElement('button');

form.id = 'form'

playerName.placeholder = 'Name';
playerName.type = 'text';

score.placeholder = 'Score';
score.type = 'number'

submitBtn.textContent = 'Submit'
submitBtn.type = 'button';

scoreBtn.textContent = 'Score'
scoreBtn.type = 'button'

main.textContent = 'LeaderBoard';




document.body.appendChild(main);
main.appendChild(form);
main.appendChild(scoreBtn);
form.appendChild(playerName);
form.appendChild(score);
form.appendChild(submitBtn);
main.appendChild(para);
main.appendChild(ulist);
ulist.appendChild(list);
list.textContent = '';

function postGameName(url = '', inputGameName = {}) {
  const response = fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputGameName)
    }
  );

  return response;
}

function postUserScore(url = '', userScore = {}) {
  const response = fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userScore)
    }
  );

  return response;
}

function getUsersScore(url) {
  const response = fetch(url);
  return response;
}

const gameName = { "name": 'My awesome ultra game' };

// postGameName('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', gameName)
//   .then(gamename => {
//     console.log(gamename)
//   })


  submitBtn.addEventListener('click', function(e){
    postUserScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4Xty3QGmXJkxEl3MgwnA/scores',
    { "user": playerName.value, "score": score.value })
    e.preventDefault();
  })

  scoreBtn.addEventListener('click', function(e) {
    // console.log(getUsersScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4Xty3QGmXJkxEl3MgwnA/scores'))
    getUsersScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4Xty3QGmXJkxEl3MgwnA/scores')
    .then((response) => console.log(response, 'hello'))
    e.preventDefault()
  })
  
  