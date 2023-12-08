
function play (letter) {
console.log(letter);

switch (letter) {
    case "w":
    new Audio("./sounds/w.mp3").play();
    break;

    case "a":
        new Audio("./sounds/a.mp3").play();
        break;

    case "d":
        new Audio("./sounds/d.mp3").play();
        break;
        
    case "j":
        new Audio("./sounds/j.mp3").play();
        break;
    
    case "k":
        new Audio("./sounds/k.mp3").play();
        break;

    case "l":
        new Audio("./sounds/l.mp3").play();
        break;

    case "s":
        new Audio("./sounds/s.mp3").play();
        break;
    
}

};



function effectsbutton () {


}


let songbutton = document.querySelectorAll("button");
for (let i=0; i<songbutton.length; i++) {
    songbutton[i].addEventListener("click", function() {
        play(this.innerHTML);
    });
};

// quand une touche est presée, recuperer la valeur de la touche keyup



function animate(letter) {
    const button = document.querySelector("." + letter);
    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 200);

}; 


// event objet prédefinis, qui donne l'information sur l'evenement en cours, la ici c'est keydown
document.addEventListener("keydown", function(event) {

});