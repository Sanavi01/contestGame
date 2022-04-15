let points = 0

let doorRandom = 0
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

let levelMath = 0
let levelBio = 0
let levelArts = 0
let levelSociales = 0
let levelSports = 0

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
        if (levelMath == 0) {
            questions.pregunta = '¿Cuanto es dos mas dos?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 4
            questions.incorrecta1 = 3
            questions.incorrecta2 = 2
            questions.incorrecta3 = 8
            if (doorRandom == 0) {
                levelMath = levelMath + 1
            }
            points = points + 1

        } else if (levelMath == 1) {
            questions.pregunta = '¿Si a: 2 , b: 3 , cuanto es c, si c : (a * b) + 2?'
            questions.nivel = 'Dificultad 2'
            questions.correcta = 8
            questions.incorrecta1 = 1
            questions.incorrecta2 = 6
            questions.incorrecta3 = 4
            if (doorRandom == 0) {
                levelMath = levelMath + 1
            }
            points = points + 2

        } else if (levelMath == 2) {
            questions.pregunta = 'Si 5 máquinas hacen 5 artículos en 5 minutos. ¿Cuánto tiempo necesitarán 100 máquinas para hacer 100 artículos?'
            questions.nivel = 'Dificultad 3'
            questions.correcta = '5 minutos'
            questions.incorrecta1 = '50 minutos'
            questions.incorrecta2 = '100 minutos'
            questions.incorrecta3 = '10 minutos'
            if (doorRandom == 0) {
                levelMath = levelMath + 1
            }
            points = points + 3

        } else if (levelMath == 3) {
            questions.pregunta = '¿Cual es la raiz cuadrada de 529?'
            questions.nivel = 'Dificultad 4'
            questions.correcta = '23'
            questions.incorrecta1 = '264.5'
            questions.incorrecta2 = '265'
            questions.incorrecta3 = '23.5'
            if (doorRandom == 0) {
                levelMath = levelMath + 1
            }
            points = points + 4

        } else if (levelMath == 4) {
            questions.pregunta = 'Dos ruedas están unidas por una correa de transmisión. La primera tiene un radio de 25 cm y la segunda de 75 cm. Cuando la primera ha dado 300 vueltas. ¿Cuántas vueltas dará la segunda?'
            questions.nivel = 'Dificultad 5'
            questions.correcta = '100 vueltas'
            questions.incorrecta1 = '75 vueltas '
            questions.incorrecta2 = '25 vueltas'
            questions.incorrecta3 = '125 vueltas'
            if (doorRandom == 0) {
                levelMath = levelMath + 1
            }
            points = points + 5
        }
        math = 0
    } else if (bio == 1) {
        if (levelBio == 0) {
            questions.pregunta = '¿Que es la célula?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'La célula es el componente básico de todos los seres vivos'
            questions.incorrecta1 = 'La célula es un tipo de Smartphone'
            questions.incorrecta2 = 'La celula es una parte de solo los humanos'
            questions.incorrecta3 = 'La celula es algo inherte'
            if (doorRandom == 0) {
                levelBio = levelBio + 1
            }
            points = points + 1

        } else if (levelBio == 1) {
            questions.pregunta = 'Las células reproductoras se dividen por...'
            questions.nivel = 'Dificultad 2'
            questions.correcta = 'Meiosis'
            questions.incorrecta1 = 'Metamorfosis'
            questions.incorrecta2 = 'Mitosis'
            questions.incorrecta3 = 'Miogenesis'
            if (doorRandom == 0) {
                levelBio = levelBio + 1
            }
            points = points + 2

        } else if (levelBio == 2) {
            questions.pregunta = '¿Qué explica Mendel con sus leyes?'
            questions.nivel = 'Dificultad 3'
            questions.correcta = 'Genetica'
            questions.incorrecta1 = 'Funcionamiento de órganos reproductores.'
            questions.incorrecta2 = 'La herencia dejada por los padres a los hijos. '
            questions.incorrecta3 = 'El proceso de pasteurizacion'
            if (doorRandom == 0) {
                levelBio = levelBio + 1
            }
            points = points + 3

        } else if (levelBio == 3) {
            questions.pregunta = 'Los organismos autótrofos tienen como característica:'
            questions.nivel = 'Dificultad 4'
            questions.correcta = 'Elabora sus propios alimentos'
            questions.incorrecta1 = 'Su dieta es de plantas'
            questions.incorrecta2 = 'No sintetiza sus alimentos '
            questions.incorrecta3 = 'Consume alimentos elaborados'
            if (doorRandom == 0) {
                levelBio = levelBio + 1
            }
            points = points + 4

        } else if (levelBio == 4) {
            questions.pregunta = 'La unidad estructural básica repetitiva de la cromatina de los cromosomas eucarióticos es:'
            questions.nivel = 'Dificultad 5'
            questions.correcta = 'El nucleosoma'
            questions.incorrecta1 = 'El genoma'
            questions.incorrecta2 = 'El centrosoma'
            questions.incorrecta3 = 'El proteosoma'
            if (doorRandom == 0) {
                levelBio = levelBio + 1
            }
            points = points + 5

        }
        bio = 0
    } else if (arts == 1) {
        if (levelArts == 0) {
            questions.pregunta = '¿Quien pinto la Capilla Sixtina?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'Miguel Angel'
            questions.incorrecta1 = 'Alejandro Magno'
            questions.incorrecta2 = 'Leonardo Da Vinci'
            questions.incorrecta3 = 'William Shakespeare'
            if (doorRandom == 0) {
                levelArts = levelArts + 1
            }
            points = points + 1

        } else if (levelArts == 1) {
            questions.pregunta = '¿En que premios "Oscar" Will Smith golpeo  Chris Rock?'
            questions.nivel = 'Dificultad 2'
            questions.correcta = '2022'
            questions.incorrecta1 = '2021'
            questions.incorrecta2 = '2020'
            questions.incorrecta3 = 'Nunca paso'
            if (doorRandom == 0) {
                levelArts = levelArts + 1
            }
            points = points + 2

        } else if (levelArts == 2) {
            questions.pregunta = '¿Quien escribio la Divina Comedia?'
            questions.nivel = 'Dificultad 3'
            questions.correcta = 'Dante Alighieri'
            questions.incorrecta1 = 'Nicolas Maquiavelo'
            questions.incorrecta2 = 'Miguel de Cervantes'
            questions.incorrecta3 = 'Francisco de Quevedo'
            if (doorRandom == 0) {
                levelArts = levelArts + 1
            }
            points = points + 3

        } else if (levelArts == 3) {
            questions.pregunta = '¿Quien pinto la Mona Lisa?'
            questions.nivel = 'Dificultad 4'
            questions.correcta = 'Leonardo Da Vinci'
            questions.incorrecta1 = 'Pablo Picasso'
            questions.incorrecta2 = 'Salvador Dali'
            questions.incorrecta3 = 'Vincent Van Gogh'
            if (doorRandom == 0) {
                levelArts = levelArts + 1
            }
            points = points + 4

        } else if (levelArts == 4) {
            questions.pregunta = '¿Cual fue la cancion mas importante de The Beatles?'
            questions.nivel = 'Dificultad 5'
            questions.correcta = 'Yesterday'
            questions.incorrecta1 = 'Let it Be'
            questions.incorrecta2 = 'Hey Jude'
            questions.incorrecta3 = 'Oh! Darling'
            if (doorRandom == 0) {
                levelArts = levelArts + 1
            }
            points = points + 5

        }
        arts = 0
    } else if (sociales == 1) {
        if (levelSociales == 0) {
            questions.pregunta = '¿Quien descubrio America?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'Cristobal Colon'
            questions.incorrecta1 = 'Francisco de Paula Santander'
            questions.incorrecta2 = 'El Rey de España'
            questions.incorrecta3 = 'Hernan Cortes'
            if (doorRandom == 0) {
                levelSociales = levelSociales + 1
            }
            points = points + 1
        } else if (levelSociales == 1) {
            questions.pregunta = '¿En qué país se inició la Revolución Industrial?'
            questions.nivel = 'Dificultad 2'
            questions.correcta = 'Inglaterra'
            questions.incorrecta1 = 'Italia'
            questions.incorrecta2 = 'España'
            questions.incorrecta3 = 'Francia'
            if (doorRandom == 0) {
                levelSociales = levelSociales + 1
            }
            points = points + 2

        } else if (levelSociales == 2) {
            questions.pregunta = '¿Qué famosa batalla perdió y dejó humillado a Napoleón Bonaparte?'
            questions.nivel = 'Dificultad 3'
            questions.correcta = 'Batalla de Waterloo'
            questions.incorrecta1 = 'Batalla de Austerlitz'
            questions.incorrecta2 = 'La campaña de Trafalgar.'
            questions.incorrecta3 = 'La batalla de Borodino'
            if (doorRandom == 0) {
                levelSociales = levelSociales + 1
            }
            points = points + 3

        } else if (levelSociales == 3) {
            questions.pregunta = '¿Qué inició la Segunda Guerra Mundial?'
            questions.nivel = 'Dificultad 4'
            questions.correcta = 'Alemania invadió Polonia'
            questions.incorrecta1 = 'El asesinato del archiduque Francisco Fernando.'
            questions.incorrecta2 = 'Hitler invadió Austria'
            questions.incorrecta3 = 'La caida del muro de Berlin'
            if (doorRandom == 0) {
                levelSociales = levelSociales + 1
            }
            points = points + 4

        } else if (levelSociales == 4) {
            questions.pregunta = '¿Qué emperador romano legalizó el cristianismo y puso fin a la persecución de los cristianos?'
            questions.nivel = 'Dificultad 5'
            questions.correcta = 'Constantino'
            questions.incorrecta1 = 'Adriano.'
            questions.incorrecta2 = 'Trajano'
            questions.incorrecta3 = 'Neron'
            if (doorRandom == 0) {
                levelSociales = levelSociales + 1
            }
            points = points + 5

        }
        sociales = 0
    } else if (sports == 1) {
        if (levelSports == 0) {
            questions.pregunta = '¿Quien es Lionel Messi?'
            questions.nivel = 'Dificultad 1'
            questions.correcta = 'Jugador de Futbol'
            questions.incorrecta1 = 'Jugador de Basketball'
            questions.incorrecta2 = 'Nadador profesional'
            questions.incorrecta3 = 'El Ganador de el Tour de Francia'
            if (doorRandom == 0) {
                levelSports = levelSports + 1
            }
            points = points + 1

        } else if (levelSports == 1) {
            questions.pregunta = '¿Quién tiene más goles en el fútbol?'
            questions.nivel = 'Dificultad 2'
            questions.correcta = 'Cristiano Ronaldo'
            questions.incorrecta1 = 'Ronaldinho'
            questions.incorrecta2 = 'Zlatan Ibrahimovic'
            questions.incorrecta3 = 'Lionel Messi'
            if (doorRandom == 0) {
                levelSports = levelSports + 1
            }
            points = points + 2

        } else if (levelSports == 2) {
            questions.pregunta = '¿Cuál es el significado de NBA?'
            questions.nivel = 'Dificultad 3'
            questions.correcta = 'Asociación Nacional de Basquetbol'
            questions.incorrecta1 = 'Administración Nacional de Baloncesto'
            questions.incorrecta2 = 'Administración Nacional de Canasta'
            questions.incorrecta3 = 'Asociación Nacional de Canasta'
            if (doorRandom == 0) {
                levelSports = levelSports + 1
            }
            points = points + 3

        } else if (levelSports == 3) {
            questions.pregunta = '¿Manny Pacquiao es un boxeador legendario de qué país?'
            questions.nivel = 'Dificultad 4'
            questions.correcta = 'Filipinas'
            questions.incorrecta1 = 'Corea'
            questions.incorrecta2 = 'China'
            questions.incorrecta3 = 'Mexico'
            if (doorRandom == 0) {
                levelSports = levelSports + 1
            }
            points = points + 4

        } else if (levelSports == 4) {
            questions.pregunta = '¿Cuáles son los cinco colores del anillo de los Juegos Olímpicos?'
            questions.nivel = 'Dificultad 5'
            questions.correcta = 'Azul, rojo, amarillo, verde y negro'
            questions.incorrecta1 = 'Azul, rojo, amarillo, verde y violeta'
            questions.incorrecta2 = 'índigo, rojo, morado, verde y negro'
            questions.incorrecta3 = 'Azul, rojo, amarillo, naranja y verde'
            if (doorRandom == 0) {
                levelSports = levelSports + 1
            }
            points = points + 5

        }
        sports = 0
    }
}

function defineRandomCategory() {
    let randomCategory = Math.floor(Math.random() * 5) + 1;
    if (randomCategory == 1) {
        math = 1
    } else if (randomCategory == 2) {
        bio = 1
    } else if (randomCategory == 3) {
        arts = 1
    } else if (randomCategory == 4) {
        sociales = 1
    } else {
        sports = 1
    }
}

function showQuestion() {
    const difficult = document.querySelector('.difficult')
    difficult.textContent = questions.nivel
    const questionPhrase = document.querySelector('.questionPhrase')
    questionPhrase.textContent = questions.pregunta
    const correct = document.querySelector('.answerA')
    correct.textContent = questions.correcta
    const incorrect1 = document.querySelector('.answerB')
    incorrect1.textContent = questions.incorrecta1
    const incorrect2 = document.querySelector('.answerC')
    incorrect2.textContent = questions.incorrecta2
    const incorrect3 = document.querySelector('.answerD')
    incorrect3.textContent = questions.incorrecta3
}

function answer() {
    const correct = document.querySelector('.answerA')
    correct.addEventListener('click', () => {
        hideQuestion()
        if (doorRandom == 0) {
            optionCategories()
        } else {
            levelMath = levelMath + 1
            levelArts = levelArts + 1
            levelBio = levelBio + 1
            levelSociales = levelSociales + 1
            levelSports = levelSports + 1 
            randomMode()
        }
       
    })
    const incorrect1 = document.querySelector('.answerB')
    incorrect1.addEventListener('click', () => {
        badAnswer()
    })
    const incorrect2 = document.querySelector('.answerC')
    incorrect2.addEventListener('click', () => {
        badAnswer()
    })
    const incorrect3 = document.querySelector('.answerD')
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

function showScore() {
    if (doorScore == 0) {
        const box = document.querySelector('.box')
        const divScore = document.createElement('div')
        divScore.classList.add('divScore')
        box.appendChild(divScore)
        const divCardScore = document.createElement('div')
        divCardScore.classList.add('divCardScore')
        divCardScore.textContent = `${user} tu puntaje es: ${points}!`
        divScore.appendChild(divCardScore)
    } else if (doorScore == 1) {
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
    correct.classList.add('answerA')
    divQuestions.appendChild(correct)

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('answerB')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('answerC')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('answerD')
    divQuestions.appendChild(incorrect3)
}

function positionTwo() {
    const divQuestions = document.querySelector('.divQuestion')

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('answerB')
    divQuestions.appendChild(incorrect1)

    const correct = document.createElement('p')
    correct.classList.add('answerA')
    divQuestions.appendChild(correct)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('answerC')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('answerD')
    divQuestions.appendChild(incorrect3)
}

function positionThree() {
    const divQuestions = document.querySelector('.divQuestion')

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('answerB')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('answerC')
    divQuestions.appendChild(incorrect2)

    const correct = document.createElement('p')
    correct.classList.add('answerA')
    divQuestions.appendChild(correct)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('answerD')
    divQuestions.appendChild(incorrect3)
}

function positionFour() {
    const divQuestions = document.querySelector('.divQuestion')

    const incorrect1 = document.createElement('p')
    incorrect1.classList.add('answerB')
    divQuestions.appendChild(incorrect1)

    const incorrect2 = document.createElement('p')
    incorrect2.classList.add('answerC')
    divQuestions.appendChild(incorrect2)

    const incorrect3 = document.createElement('p')
    incorrect3.classList.add('answerD')
    divQuestions.appendChild(incorrect3)

    const correct = document.createElement('p')
    correct.classList.add('answerA')
    divQuestions.appendChild(correct)
}


