const random_word_url = "https://random-word-api.vercel.app/api?words=1&alphabetize=true";
const word_desc_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function shuffle(string){
    let arr = Array.from(string);
    let shuffled = arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return shuffled.toString();
}

function callUrl(url){
    let REQ = new XMLHttpRequest();
    REQ.open("GET", url, false);
    REQ.send();
    if (REQ.status == 404){
        getRandomWord_Desc();
    }
    return JSON.parse(REQ.responseText);
}
function getRandomWord_Desc(){
    let word = callUrl(random_word_url)[0];
    let desc = callUrl(word_desc_url + word)[0].meanings[0].definitions[0].definition;

    return [word, desc];
}


function submit(event){
    tries -= 1;

    if (document.getElementById("correct-word-input").value == cword){
        alert("Congrats: Next Level");
        score += 500;
        updateScore(score);
        Game(0);
    }
    else{
        alert("Worng Answer: Tries Left - " + tries);
    }

    if (tries == 0){
        alert("GameOver: You Lose!, Correct Answer - " + cword);
        Game(1);
    }
}
function getHint(event){
    score -= 100;
    alert("Descrption: " + desc);
    updateScore(score);
}
function updateScore(value){
    document.getElementById("score").innerText = value;
}

function Game(newGame){
    if (newGame == 1){
        score = 0;
    }
    tries = 3;
    [cword, desc] = getRandomWord_Desc();
    document.getElementById("rand-word-container").innerText = shuffle(cword);
}

var cword, desc;
var score =0, tries = 3;

document.getElementById("hint").onclick = getHint;
document.getElementById("submit").onclick = submit;

Game(1)