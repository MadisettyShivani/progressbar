var container = document.querySelector(".container");
// var button = document.querySelector(".button")
var name = document.getElementsByClassName("emoji")

function handlemousemove() {
    let color = "#";
    let letters = "0123456789ABCEDEF";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);

    container.style.backgroundColor = color;
    // button.innerHTML= color;
    // button.style.color = color; 

}
handlemousemove();
function progressButton(){
    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value"),
     skillper = document.querySelector(".skill-per"),
    programvalue = document.querySelector(".skill-bar"),
    button = document.querySelector("#button"),
    con = document.querySelector(".con");


let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
    skillper.style.width = `${progressStartValue}%`
    skillper.innerHTML = `${progressStartValue}%` 
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
        con.style.display = "block"
       
    }
}, speed);

}


// let progressSvalue = 0,
//     progressEvalue = 100,
//     value = 100;
// let program = setInterval(() => {
//     progressSvalue++;
//     programvalue.textContent = `${progressSvalue}%`
//     skillper.style.background = `linear-gradient(#7d2ae8 ${progressSvalue * 3.6}deg, #ededed 0deg)`;
   
//     if (progressSvalue == progressEvalue) 
//     {
//         clearInterval(program);
//     }
// }, value);

 

