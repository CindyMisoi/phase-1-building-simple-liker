// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeGlyph = document.querySelector('.like-glyph')

// Your JavaScript code goes here!
document.addEventListener('click', handleClick)

function handleClick(e){
e.preventDefault()
mimicServerCall()
.then((data)=>{
  console.log(data);
  const like = likeGlyph.textContent;
  if(like == EMPTY_HEART){
    likeGlyph.textContent = FULL_HEART
    likeGlyph.classList.add('activated-heart')
  }
  else{
    likeGlyph.textContent = EMPTY_HEART
    likeGlyph.classList.remove('activated-heart')
  }
})
.catch(()=>{
const errorMsg = document.querySelector("#modal")
errorMsg.classList.remove("hidden")
setTimeout(()=>{errorMsg.className="hidden"}, 3000)
})

}
  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

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
