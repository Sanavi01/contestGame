class Questions {
    constructor (pregunta, nivel, correcta, incorrecta1, incorrecta2, incorrecta3 ){
        this.pregunta = pregunta
        this.nivel = nivel
        this.correcta = correcta
        this.incorrecta1 = incorrecta1
        this.incorrecta2 = incorrecta2
        this.incorrecta3 = incorrecta3    
    }
    
}

let levelMath = 1

const mathQuestions = new Questions ()


//LET THE PROGRAM GET A RANDOM POSITION OF THE CORRECT ANSWER

function randomCorrectPosition () {
    let random = Math.floor(Math.random() * 4) + 1;
    if (random == 1) {
        positionOne ()
    } else if (random == 2) {
        positionTwo () 
    } else if (random == 3) {
        positionThree ()
    } else {
        positionFour ()
    }
}

function positionOne () {
    const divQuestions = document.querySelector('.divQuestion')

    const correct = document.createElement('p')
    correct.classList.add('correct')
    divQuestions.appendChild(correct)

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('incorrect1')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('incorrect')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('incorrect3')
    divQuestions.appendChild(incorrect3)
}

function positionTwo () {
    const divQuestions = document.querySelector('.divQuestion')

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('incorrect1')
    divQuestions.appendChild(incorrect1)

    const correct = document.createElement('p')
    correct.classList.add('correct')
    divQuestions.appendChild(correct)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('incorrect2')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('incorrect3')
    divQuestions.appendChild(incorrect3)
}

function positionThree () {
    const divQuestions = document.querySelector('.divQuestion')

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('incorrect1')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('incorrect2')
    divQuestions.appendChild(incorrect2)

    const correct = document.createElement('p')
    correct.classList.add('correct')
    divQuestions.appendChild(correct)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('incorrect3')
    divQuestions.appendChild(incorrect3)
}

function positionFour () {
    const divQuestions = document.querySelector('.divQuestion')
    
    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('incorrect1')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('incorrect2')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('incorrect3')
    divQuestions.appendChild(incorrect3)

    const correct = document.createElement('p')
    correct.classList.add('correct')
    divQuestions.appendChild(correct)
}



console.log(mathQuestions)



/*
function showQuestion (mathQuestions) {
    if(mathQuestions.nivel == 1){
        console.log('Nivel:1 ')
        
    }
}

showQuestion()

*/