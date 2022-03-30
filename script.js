let points = 0


let doorScore = 0
let doorQuestions = 0

//math. bio, arts... = 0 is a close door
//math. bio, arts... = 1 is a open door    
//This allows to select the correct category to make the question 
//The value of 1 is set in the function SelectCategory in InteraccionConLaPagina.js

let math = 0
let bio = 0
let arts = 0
let sociales = 0
let sports = 0

//Level allows to show the correct difficult question, this variables will act like an accumulator, if the user answer the questions correct the variable will increase

let levelMath = 1
let levelBio = 1
let levelArts = 1
let levelSociales = 1
let levelSports = 1

class Questions {
    constructor(pregunta, nivel, correcta, incorrecta1, incorrecta2, incorrecta3) {
        this.pregunta = pregunta
        this.nivel = nivel
        this.correcta = correcta
        this.incorrecta1 = incorrecta1
        this.incorrecta2 = incorrecta2
        this.incorrecta3 = incorrecta3
    }
}

const questions = new Questions()

function defineQuestion() {
    if (math == 1) {
        if (levelMath == 1) {
            questions.pregunta = '¿Cuanto es dos mas dos?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 4
            questions.incorrecta1 = 3
            questions.incorrecta2 = 2
            questions.incorrecta3 = 8
            levelMath = levelMath + 1
            
        } else if (levelMath == 2) {
            questions.pregunta = '¿Si a: 2 , b: 3 , cuando es c, si c : (a * b) + 2?'
            questions.nivel = 'Dificultad 2'
            questions.correcta = 8
            questions.incorrecta1 = 1
            questions.incorrecta2 = 6
            questions.incorrecta3 = 4
            levelMath = levelMath + 1

        } else if (levelMath == 3) {
            questions.pregunta = 'Si 5 máquinas hacen 5 artículos en 5 minutos. ¿Cuánto tiempo necesitarán 100 máquinas para hacer 100 artículos?'
            questions.nivel = 'Dificultad 3'
            questions.correcta = '5 minutos'
            questions.incorrecta1 = '50 minutos'
            questions.incorrecta2 = '100 minutos'
            questions.incorrecta3 = '10 minutos'
            levelMath = levelMath + 1

        } else if (levelMath == 4) {
            questions.pregunta = '¿Cual es la raiz cuadrada de 529?'
            questions.nivel = 'Dificultad 4'
            questions.correcta = '23'
            questions.incorrecta1 = '264.5'
            questions.incorrecta2 = '265'
            questions.incorrecta3 = '23.5'
            levelMath = levelMath + 1

        } else if (levelMath == 5) {
            questions.pregunta = 'Dos ruedas están unidas por una correa de transmisión. La primera tiene un radio de 25 cm y la segunda de 75 cm. Cuando la primera ha dado 300 vueltas. ¿Cuántas vueltas dará la segunda?'
            questions.nivel = 'Dificultad 5'
            questions.correcta = '100 vueltas'
            questions.incorrecta1 = '75 vueltas '
            questions.incorrecta2 = '25 vueltas'
            questions.incorrecta3 = '125 vueltas'
            levelMath = levelMath + 1
        }
        math = 0
    } else if (bio == 1) {
        if (levelBio == 1) {
            questions.pregunta = '¿Que es la célula?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'La célula es el componente básico de todos los seres vivos'
            questions.incorrecta1 = 'La célula es un tipo de Smartphone'
            questions.incorrecta2 = 'La celula es una parte de solo los humanos'
            questions.incorrecta3 = 'La celula es algo inherte'
            levelBio = levelBio + 1
        }
        bio = 0
    } else if (arts == 1) {
        if (levelArts == 1) {
            questions.pregunta = '¿Quien pinto la Capilla Sixtina?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'Miguel Angel'
            questions.incorrecta1 = 'Alejandro Magno'
            questions.incorrecta2 = 'Leonardo Da Vinci'
            questions.incorrecta3 = 'William Shakespeare'
            levelArts = levelArts + 1
        }
        arts = 0
    } else if (sociales == 1) {
        if (levelSociales == 1) {
            questions.pregunta = '¿Quien descubrio America?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'Cristobal Colon'
            questions.incorrecta1 = 'Francisco de Paula Santander'
            questions.incorrecta2 = 'El Rey de España'
            questions.incorrecta3 = 'Hernan Cortes'
            levelSociales = levelSociales + 1
        }
        sociales = 0
    } else if (sports == 1){
        if (levelSports == 1) {
            questions.pregunta = '¿Quien es Lionel Messi?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'Jugador de Futbol'
            questions.incorrecta1 = 'Jugador de Basketball'
            questions.incorrecta2 = 'Nadador profesional'
            questions.incorrecta3 = 'El Ganador de el Tour de Francia'
            levelSports = levelSports + 1
        }
        sports = 0
    }
    
}

function showQuestion() {
    const difficult = document.querySelector('.difficult')
    difficult.textContent = questions.nivel
    const questionPhrase = document.querySelector('.questionPhrase')
    questionPhrase.textContent = questions.pregunta
    const correct = document.querySelector('.correct')
    correct.textContent = questions.correcta
    const incorrect1 = document.querySelector('.incorrect1')
    incorrect1.textContent = questions.incorrecta1
    const incorrect2 = document.querySelector('.incorrect2')
    incorrect2.textContent = questions.incorrecta2
    const incorrect3 = document.querySelector('.incorrect3')
    incorrect3.textContent = questions.incorrecta3
}

function answer() {
    const correct = document.querySelector('.correct')
    correct.addEventListener('click', () => {
        points = points + 1
        hideQuestion ()
        optionCategories ()
    })
    const incorrect1 = document.querySelector('.incorrect1')
    incorrect1.addEventListener('click', () => {
        badAnswer()
    })
    const incorrect2 = document.querySelector('.incorrect2')
    incorrect2.addEventListener('click', () => {
        badAnswer()
    })
    const incorrect3 = document.querySelector('.incorrect3')
    incorrect3.addEventListener('click', () => {
        badAnswer()
    })
}

function badAnswer() {
    const divFlex = document.querySelector('.divFlex')
    const endGame = document.createElement('div')
    endGame.classList.add('endGame')
    endGame.textContent = 'Respondiste mal, has perdido'
    divFlex.appendChild(endGame)

    const buttonReload = document.createElement('div')
    buttonReload.classList.add('buttonReload')
    buttonReload.textContent = "Empecemos de Nuevo!"
    buttonReload.addEventListener('click', () => {
        window.location.reload()
    })
    endGame.appendChild(buttonReload)
}

function showScore () {
    if (doorScore == 0){
        const box = document.querySelector('.box')
        const divScore = document.createElement('div')
        divScore.classList.add('divScore')
        box.appendChild(divScore)
        const divCardScore = document.createElement('div')
        divCardScore.classList.add('divCardScore')
        divCardScore.textContent = `${user} tu puntaje es: ${points}!`
        divScore.appendChild(divCardScore)
    } else if (doorScore == 1){
        const divCardScore = document.querySelector('.divCardScore')
        divCardScore.textContent = `${user} tu puntaje es: ${points}!`
    }    
}



//LET THE PROGRAM GET A RANDOM POSITION OF THE CORRECT ANSWER

function randomCorrectPosition() {
    let random = Math.floor(Math.random() * 4) + 1;
    if (random == 1) {
        positionOne()
    } else if (random == 2) {
        positionTwo()
    } else if (random == 3) {
        positionThree()
    } else {
        positionFour()
    }
}

function positionOne() {
    const divQuestions = document.querySelector('.divQuestion')

    const correct = document.createElement('p')
    correct.classList.add('correct')
    divQuestions.appendChild(correct)

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('incorrect1')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('incorrect2')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('incorrect3')
    divQuestions.appendChild(incorrect3)
}

function positionTwo() {
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

function positionThree() {
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

function positionFour() {
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


