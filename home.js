var sentence = document.getElementById("sentence")

async function typeSentence(text) {
  const letters = text.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(100);
    sentence.innerHTML += letters[i]
    i++
  }
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

window.onload = function() {
  typeSentence("The Typing Test Discord Bot")
};