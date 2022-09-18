// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//add event listener to the like button
errMessage = document.getElementById('modal');
errMessage.hidden = true;
const likeButton = document.createElement('button');
likeButton.textContent = "Like!";
const likeSection = document.getElementsByClassName('like');
const likeHeart = document.getElementsByClassName('like-glyph')[0];
likeButton.addEventListener("click", likeFoo);
likeSection[0].appendChild(likeButton);

//make the heart appear and disappear
function likeFoo (e) {
    console.log('Click!');
    mimicServerCall()
      .then(function(serverMessage){
        serverResp = serverMessage;
        console.log(serverResp)
        if (serverResp === 'Pretend remote server notified of action!') {
            if (likeHeart.innerText === EMPTY_HEART){
            likeHeart.innerText = FULL_HEART;
            likeHeart.style.color = 'red'; 
             }
             else if (likeHeart.innerText === FULL_HEART){
                 likeHeart.innerText = EMPTY_HEART;
                 }
                }})
        .catch(function(error) {
          const errText = document.getElementById('modal-message');
          errText.textContent = `${error}`
          errMessage.hidden = false;
          setTimeout(()=> errMessage.hidden = true, 3000);
        })
      }


// //------------------------------------------------------------------------------
// // Don't change the code below: this function mocks the server response
// //------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}