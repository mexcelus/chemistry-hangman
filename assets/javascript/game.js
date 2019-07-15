var marioHangman = {
    mysteryArray: ['babymario', 'birdo', 'boo', 'bowser', 'goomba', 'koopatroopa', 'luigi', 'mario', 'peach', 'shyguy', 'starman', 'toad', 'waluigi', 'wario', 'yoshi'],
    magicWord: '',
    numberOfWins: 0,
    remainGuess: 12,
    userTextWins: document.getElementById("numberOfWins"),
    userTextMystery: document.getElementById("mysteryWord"),
    userTextLetters: document.getElementById("guessedLetters"),
    generateWord: function (array) {
        magicLetter = document.createElement('ul');
        var guess = array[Math.floor(Math.random() * array.length)];
        this.magicWord = guess;
        console.log(this.magicWord);
        
        for(i = 0; i < guess.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = '_';
            magicLetter.appendChild(li);    
        }

        marioHangman.userTextMystery.appendChild(magicLetter);

        return guess;
    },
    updateGuessedLetters: function (guess) {
        var node = document.createTextNode(guess + ' ')
        this.userTextLetters.appendChild(node);
    },
    updateRemainGuess: function () {
        this.remainGuess--;
        console.log(this.remainGuess);
    }
}

window.onload = function () {
    marioHangman.generateWord(marioHangman.mysteryArray);
}

document.onkeyup = function (event) {
    var guess = event.key;
    marioHangman.updateGuessedLetters(guess);
    marioHangman.updateRemainGuess();
}
