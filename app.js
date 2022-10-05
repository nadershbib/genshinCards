let bodyBg = 
[
    {firstColor:`rgb(4,4,4)`, secondColor:`rgb(88,67,168)`,boxShadowColor:`rgb(88,67,168)`},
    {firstColor:`#489ea1`, secondColor:`#000`,boxShadowColor:`#489ea1`},
    {firstColor:`rgb(4,4,4)`, secondColor:`rgb(88,67,168)`,boxShadowColor:`rgb(88,67,168)`},
    {firstColor:`rgb(255,255,255)`,secondColor:`#223e96`,boxShadowColor:`#40ccff`},

    {firstColor:`#000`,secondColor:`#b73b22`,boxShadowColor:`#b73b22`},
    
    {firstColor:`#e3e3e3`,secondColor:`rgb(14 141 51)`,boxShadowColor:`rgb(54 182 81)`},



]
let body = document.body;
let cardsArr = document.querySelectorAll(".card");
let index = 0;
// adding class show for first card
cardsArr[index].classList.add("show");
body.style.background = addBackground(bodyBg[index].firstColor,bodyBg[index].secondColor)
cardsArr[index].style.boxShadow = ` 0 0 15px ${bodyBg[index].boxShadowColor}`;

body.addEventListener("wheel",function (e){

    //scrolled down
   if(e.deltaY === 114){
     if(index === cardsArr.length - 1){
       index = 0;
       removeAndAdd(index);
       changeBg(addBackground(bodyBg[index].firstColor,bodyBg[index].secondColor));
       body.style.boxShadow
       cardsArr[index].style.boxShadow = ` 0 0 15px ${bodyBg[index].boxShadowColor}`;
    }
    else{
        index++;
        removeAndAdd(index);
        changeBg(addBackground(bodyBg[index].firstColor,bodyBg[index].secondColor));
        cardsArr[index].style.boxShadow = ` 0 0 15px ${bodyBg[index].boxShadowColor}`;
    }
}
//scroll up
if(e.deltaY === -114){
    if(index === 0){
        index = cardsArr.length - 1;
        removeAndAdd(index);
        changeBg(addBackground(bodyBg[index].firstColor,bodyBg[index].secondColor));
        cardsArr[index].style.boxShadow = ` 0 0 15px ${bodyBg[index].boxShadowColor}`;
    }
    else{
        index--;
        removeAndAdd(index);
        changeBg(addBackground(bodyBg[index].firstColor,bodyBg[index].secondColor));
        cardsArr[index].style.boxShadow = ` 0 0 15px ${bodyBg[index].boxShadowColor}`;
    }
}


})

// 114 down, -114 up

function changeBg(color){
    body.style.background = color;
}

function addBackground(firstColor,secondColor){
    return `linear-gradient(40deg, ${firstColor}, ${secondColor})`;
}

function removeAndAdd(index){
    removeAll()
    cardsArr[index].classList.add("show");
}

function removeAll(){
    cardsArr.forEach(card=>{
        card.classList.remove("show");
    })
}