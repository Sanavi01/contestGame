const box = document.querySelector('.box')
const boxStart = document.querySelector('.boxStart')
const btnStart = document.querySelector('.btn-grad')
const name = document.querySelector('.name')

let user = ""

function start() {
    btnStart.addEventListener('click', () => {
        const name = document.querySelector('.name').value;
        user = name
        box.removeChild(boxStart)
        modes()
    })
}

function modes() {
    //MODES DIV
    const modesDiv = document.createElement('div')
    modesDiv.classList.add('modesDiv')
    const modes = document.createElement('div')
    modes.classList.add('modes')
    box.appendChild(modesDiv)
    modesDiv.appendChild(modes)
    const modePhrase = document.createElement('p')
    modePhrase.textContent = '¿Que modo deseas elegir?'
    modes.appendChild(modePhrase)
    //BUTTONS
    const buttonsModeDiv = document.createElement('div')
    buttonsModeDiv.classList.add('buttonsMode')
    modes.appendChild(buttonsModeDiv)
    const userSelectQuestions = document.createElement('div')
    userSelectQuestions.classList.add('userSelect')
    userSelectQuestions.textContent = '¡Tu Eliges La Categoria Que Quieras!'
    buttonsModeDiv.appendChild(userSelectQuestions)
    const randomQuestions = document.createElement('div')
    randomQuestions.classList.add('userSelectII')
    randomQuestions.textContent = '¡Probemos preguntas al azar!'
    buttonsModeDiv.appendChild(randomQuestions)
    //CALL FUNCTION
    selectMode()
}

function selectMode() {
    const userSelectQuestions = document.querySelector('.userSelect')
    const modesDiv = document.querySelector('.modesDiv')
    userSelectQuestions.addEventListener('click', () => {
        box.removeChild(modesDiv)
        optionCategories()
    })
    const randomQuestions = document.querySelector('.userSelectII')
    randomQuestions.addEventListener('click', () => {
        box.removeChild(modesDiv)
        randomMode()
    })
}


function optionCategories() {
    doorCategories = 1 //This is let know to the program if the categories is active
    const threeCategories = document.createElement('div')
    threeCategories.classList.add('threeCategories')
    threeCategories.classList.add('wrap')
    box.appendChild(threeCategories)

    const twoCategories = document.createElement('div')
    twoCategories.classList.add('twoCategories')
    twoCategories.classList.add('wrap')
    box.appendChild(twoCategories)
    //Maths
    const category = document.createElement('div')
    category.textContent = `Matematicas ${levelMath}/5!`
    category.classList.add('category')
    threeCategories.appendChild(category)
    //Biology
    const category2 = document.createElement('div')
    category2.textContent = `Biologia ${levelBio}/5!`
    category2.classList.add('category2')
    threeCategories.appendChild(category2)
    //Arts
    const category3 = document.createElement('div')
    category3.textContent = `Artes ${levelArts}/5!`
    category3.classList.add('category3')
    threeCategories.appendChild(category3)
    //Sociales
    const category4 = document.createElement('div')
    category4.textContent = `Sociales ${levelSociales}/5!`
    category4.classList.add('category4')
    twoCategories.appendChild(category4)
    //Deportes
    const category5 = document.createElement('div')
    category5.textContent = `Deportes ${levelSports}/5!`
    category5.classList.add('category5')
    twoCategories.appendChild(category5)
    selectCategory()
    showScore()
    surrenderOption()
    doorFinish = 1
    doorScore = 1

}


function selectCategory() {
    const categoryMath = document.querySelector('.category')
    const categoryBio = document.querySelector('.category2')
    const categorySociales = document.querySelector('.category4')
    const categoryArts = document.querySelector('.category3')
    const categorySports = document.querySelector('.category5')
    categoryMath.addEventListener('click', () => {
        math = 1
        hideCategories()
        defineQuestion() //The function is located in script.js
        cardQuestion()
        showQuestion()//The function is located in script.js
        answer()
    })
    categoryBio.addEventListener('click', () => {
        bio = 1
        hideCategories()
        defineQuestion() //The function is located in script.js
        cardQuestion()
        showQuestion()//The function is located in script.js
        answer()
    })
    categorySociales.addEventListener('click', () => {
        sociales = 1
        hideCategories()
        defineQuestion() //The function is located in script.js
        cardQuestion()
        showQuestion()//The function is located in script.js
        answer()
    })
    categoryArts.addEventListener('click', () => {
        arts = 1
        hideCategories()
        defineQuestion() //The function is located in script.js
        cardQuestion()
        showQuestion()//The function is located in script.js
        answer()
    })
    categorySports.addEventListener('click', () => {
        sports = 1
        hideCategories()
        defineQuestion() //The function is located in script.js
        cardQuestion()
        showQuestion()//The function is located in script.js
        answer()
    })
}

function randomMode() {
    doorRandom = 1
    defineRandomCategory()
    defineQuestion()
    cardQuestion()
    showQuestion()
    answer()
    showScore()
    surrenderOption()
    doorScore = 1
    doorFinish = 1

}

function hideCategories() {
    const three = document.querySelector('.threeCategories')
    const two = document.querySelector('.twoCategories')
    box.removeChild(three)
    box.removeChild(two)
}

function hideQuestion() {
    const divFlex = document.querySelector('.divFlex')
    box.removeChild(divFlex)
}

function cardQuestion() {
    const divFlex = document.createElement('div')
    divFlex.classList.add('divFlex')
    box.appendChild(divFlex)

    const divQuestions = document.createElement('div')
    divQuestions.classList.add('divQuestion')
    divFlex.appendChild(divQuestions)

    const difficult = document.createElement('p')
    difficult.classList.add('difficult')
    divQuestions.appendChild(difficult)

    const questionPhrase = document.createElement('h2')
    questionPhrase.classList.add('questionPhrase')
    divQuestions.appendChild(questionPhrase)

    randomCorrectPosition() //The function is located in script.js. The function allows put the position of the options randomly
    doorCategories = 0 //This is let know to the program if the categories is active
}

function surrenderOption() {
    if (doorFinish == 0) {
        const buttonFinish = document.createElement('div')
        const divFinish = document.createElement('div')
        divFinish.classList.add('divFinish')
        buttonFinish.classList.add('btnFinish')
        divFinish.appendChild(buttonFinish)
        if (doorRandom == 0) {
            buttonFinish.textContent = `No me quiero arriesgar, me llevo ${points} puntos`
            box.appendChild(divFinish)
        } else if (doorRandom == 1) {
            buttonFinish.textContent = `No me quiero arriesgar, me llevo ${pointsRandom} puntos`
            box.appendChild(divFinish)
        }
    } else if (doorFinish == 1) {
        const buttonFinish = document.querySelector('.btnFinish')
        const divFinish = document.querySelector('.divFinish')

        if (doorRandom == 0) {
            buttonFinish.textContent = `No me quiero arriesgar, me llevo ${points} puntos`
            box.appendChild(divFinish)
        } else if (doorRandom == 1) {
            buttonFinish.textContent = `No me quiero arriesgar, me llevo ${pointsRandom} puntos`
            box.appendChild(divFinish)
        }
    }
    if (activeBtn == 0) {
        finishGame()
        activeBtn = 1
    } else if (activeBtn == 1) {
        return
    }
}

function finishGame() {
    const buttonFinish = document.querySelector('.btnFinish')
    buttonFinish.addEventListener('click', () => {
        if (doorCategories == 1){
            hideCategories()
        } else{
            hideQuestion()
        }
        winRandomMode()
    })
}

start()