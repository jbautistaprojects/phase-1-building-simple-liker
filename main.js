// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//add event listener to the like button
const likeButton = document.createElement('button');
likeButton.textContent = "Like!";
const likeSection = document.getElementsByClassName('like');
const likeHeart = document.getElementsByClassName('like-glyph')[0];
likeButton.addEventListener("click", heartState);
likeSection[0].appendChild(likeButton);

//make the heart appear and disappear
function heartState (e) {
    console.log('Click!')
    let serverResp = mimicServerCall();
    if (serverResp === 'Pretend remote server notified of action!') {
    if (likeHeart.innerText === EMPTY_HEART){
    likeHeart.innerText = FULL_HEART;
    likeHeart.style.color = 'red'; 
    }
    else if (likeHeart.innerText === FULL_HEART){
      likeHeart.innerText = EMPTY_HEART;
    }
}}
//server request update the like or unlike
//error message



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


//This is the other code

// const glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// const colorStates = {
//   "red" : "",
//   "": "red"
// };


// const articleHearts = document.querySelectorAll(".like-glyph");

// function likeCallback(e) {
//   const heart = e.target;
//   mimicServerCall()
//     .then(function(serverMessage){
//       alert("You notified the server!");
//        alert(serverMessage);
//        heart.innerText = glyphStates[heart.innerText];
//        heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function(error) {
//       alert("Something went wrong!");
//     });
// }

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }