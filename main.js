const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(el => {
    let span = document.createElement("span");
    let letter = document.createTextNode(el);
    span.append(letter);
    lettersContainer.append(span)
    span.className= "letter_box";
});

const words = {
    programming:["php","javascript","go","scale","fortran","r","mysql","python"],
    movies: ["Prestige","Inception","parasite","Interstellar","Whiplash","Memento","Coco","Up"],
    people:["Albert Einstein","Hitchcock","Alexander","Cleopatra","Mahatma Gandhi"],
    countries:["Syria","Palestine","Yemen","Egypt","Bahrain","Qatar"]
}

let keys = Object.keys(words);
let randomPropNum = Math.floor(Math.random() * keys.length);
let randomProp = keys[randomPropNum];
let randomValues = words[randomProp];

let randomvalueNum = Math.floor(Math.random() * randomValues.length);
let randomvalue = randomValues[randomvalueNum];

let categoryInfo = document.querySelector(".category span");
categoryInfo.innerHTML = randomProp;

let guessingField = document.querySelector(".letters-guess");
let wordArr = Array.from(randomvalue)
wordArr.forEach(el =>{
    let span = document.createElement("span");
    if(el === " "){
        span.className = "space";
        
    }
    guessingField.append(span);
})

let spans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let draw = document.querySelector(".hangman-draw");













document.addEventListener("click", (e) =>{
    
    
    if(e.target.classList.contains("letter_box")){
        
        let answer = false;
        let completed = false;

        e.target.classList.add("clicked");

        let clickedLetter = e.target.innerHTML.toLowerCase();

        wordArr.forEach((letter, letterIndex)=>{

            if(clickedLetter === letter.toLowerCase()){

                answer = true

                spans.forEach((span, spanIndex)=>{

                    if(letterIndex === spanIndex){

                        span.innerHTML = letter
                    }
                })







            }
        })

        if(!answer){

            wrongAttempts++;

            draw.classList.add(`wrong-${wrongAttempts}`);

            document.getElementById("fail").play()

            if(wrongAttempts == 8){
                endGame(`Game Over The Word Is ${randomvalue} `);

                lettersContainer.classList.add("finished")
            }

        }else{
            document.getElementById("success").play()
            foundWords = 0
            spans.forEach(e =>{
                if(!e.innerHTML == ""){
                    foundWords++
                }
            })
            if(foundWords == spans.length){
                endGame(`congratulations, your attemps are :${wrongAttempts}`);
            }
            

        }

    }
})



function endGame(text){

    let div = document.createElement("div");

    let divText = document.createTextNode(text)

    div.append(divText)

    div.className = "pop-up"

    document.body.append(div);


}