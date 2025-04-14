function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

topArr= [0, 20, 40, 50, 60, 65, 70,]
mainCloudRect = document.getElementById("logo").getBoundingClientRect()
navRect = document.getElementById("button_cont").getBoundingClientRect()

function randomPosElements(classname){
    var createdElement = document.createElement("img");
    createdElement.setAttribute("class", classname);
    createdElement.setAttribute("src", `assets/${classname}.png`);
    createdElement.style.animation = `moveElements 30s linear ${getRndInteger(0, 20)}s infinite`;
    createdElement.style.top = `${(getRndInteger(0, 90))}vh`;
    
    document.body.append(createdElement);
    var secRect = createdElement.getBoundingClientRect();

    if (secRect.top >= mainCloudRect.top && secRect.bottom <= mainCloudRect.bottom){
        createdElement.style.zIndex = Math.round(Math.random() * -1)
    } else if(secRect.top >= navRect.top && secRect.bottom <= navRect.bottom ){
        createdElement.style.zIndex = -1;
    }
}

function addCloudAtRandom(){
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

function main(){
    document.body.addEventListener("keydown", executeButton);
    addCloudAtRandom();
}
main();