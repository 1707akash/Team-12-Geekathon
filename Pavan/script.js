const typingGround = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const showSentence = document.querySelector('#showSentence');

let startTime, endTime, totalTime;
const sentences = ["The quick brown fox jumps over the lazy",
    "I am a very naughty boy",
    "I love coding"
];
let actualWords = 0; // Initialize to 0
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    showSentence.textContent = sentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endTyping = () => {
    btn.innerText = "Start";
    let date = new Date();
    endTime = date.getTime();
    totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);
    showSentence.innerText = "";
    typingGround.value = "";
    calculateTypingSpeed(totalTime);
}
const calculateTypingSpeed = (totalTime) => {
    let totalWords = typingGround.value.trim();
    actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if (totalWords !== 0) {
        let typingSpeed = (actualWords / totalTime) * 60;
        score.innerText = `Your typing speed is ${typingSpeed.toFixed(2)} wpm`;
        let chSpeed = (totalWords.length / totalTime) * 60;
        chSpeed = Math.round(chSpeed);
        score.innerText = `Your Typing Speed is ${chSpeed} cpm`;
    } else {
        score.innerText = 'Your typing is 0 wpm and no words typed';
    }
}

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typingGround.removeAttribute('disabled');
            startTyping();
            break;
        case "Done":
            typingGround.setAttribute('disabled', true);
            endTyping();
            break;
    }
})
