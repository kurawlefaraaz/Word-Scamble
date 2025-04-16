import {randomPosElements} from "/commons.js"

function addElementsAtRandom(){
    for(let i=0; i<= 9; i++){
        randomPosElements("cloud")
    }

    for(let i=0; i<= 9; i++){
        randomPosElements("bird")
    }
}

function executeButton(e){
    if (!(["p", "a"].includes(e.key))){
        console.log(e.key);
        return;
    }

    if (e.key == "p"){
        document.getElementById("play_link").click();
    } else{
        document.getElementById("about_link").click();
    }
}

document.body.addEventListener("keydown", executeButton);
addElementsAtRandom();