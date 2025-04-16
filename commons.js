var mainCloudRect = document.getElementById("logo").getBoundingClientRect();
var navRect = document.getElementById("button_cont").getBoundingClientRect();

export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function randomPosElements(classname){
    var createdElement = document.createElement("img");
    var delay_secs = getRandomInteger(0, 20);

    createdElement.setAttribute("class", classname);
    createdElement.setAttribute("src", `../assets/${classname}.png`);
    createdElement.style.animation = `moveElements 30s linear ${delay_secs}s infinite `;
    createdElement.style.top = `${(getRandomInteger(0, 90))}vh`;
    createdElement.style.visibility = "hidden";
    
    document.body.append(createdElement);
    var secRect = createdElement.getBoundingClientRect();

    if (secRect.top >= mainCloudRect.top && secRect.bottom <= mainCloudRect.bottom){
        createdElement.style.zIndex = getRandomInteger(-1, 0);
    } else if(secRect.top >= navRect.top && secRect.bottom <= navRect.bottom ){
        createdElement.style.zIndex = -1;
    }
    setTimeout(()=>createdElement.style.visibility = "visible", delay_secs*1000);
}
