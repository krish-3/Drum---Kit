
// document.querySelectorAll("button")[0].addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);
// function handleClick() {
//         alert("I got clicked!");
// }


// this is for Button press function
var numberOfDrum = document.querySelectorAll(".drum").length;  // here querySelectorAll is use then we can get length of drum

for (var i = 0; i <numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
}

//This is For Key Board press function
document.addEventListener("keypress",keypressForSound);


function keypressForSound(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

// This function is Make Sound for Key Press and Button Press
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("crash.mp3").play();
            break;
        case "a":
            new Audio("kick-bass.mp3").play();
            break;
        case "s":
            new Audio("snare.mp3").play();
             break;
        case "d":
            new Audio("tom-1.mp3").play();
            break;
        case "j":
            new Audio("tom-2.mp3").play();
            break;
        case "k":
            new Audio("tom-3.mp3").play();
            break;
        case "l":
            new Audio("tom-4.mp3").play();
            break;
        default:
            console.log(innerHtml);
            break;
    }
}

 function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
 }



  // alert("I got clicked!");
