function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

topArr= [0, 20, 40, 50, 60, 65, 70,]
function addCloudAtRandom(){
    for(let i=0; i<= 7; i++){
        var cloud = document.createElement("img");
        cloud.setAttribute("class", "cloud");
        cloud.setAttribute("src", "assets/cloud.png");

        cloud.style.left = `-${(getRndInteger(10, 50))}vw`;
        cloud.style.top = `${topArr[i]}vh`;

        document.body.append(cloud);
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