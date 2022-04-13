const box = document.querySelector('.box')
const boxStart = document.querySelector('.boxStart')
const btnStart = document.querySelector('.btn-grad')
const name = document.querySelector('.name')

let user = ""

function modes () {
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
    randomQuestions.classList.add('userSelect')
    randomQuestions.textContent = '¡Probemos preguntas al azar!'
    buttonsModeDiv.appendChild(randomQuestions)
}


function start() {
    btnStart.addEventListener('click', () => {
        const name = document.querySelector('.name').value;
        user = name
        box.removeChild(boxStart)
        modes()
    })
}

function optionCategories() {
    //Space for the categories
    const threeCategories = document.createElement('div')
    threeCategories.classList.add('threeCategories')
    box.appendChild(threeCategories)

    const twoCategories = document.createElement('div')
    twoCategories.classList.add('twoCategories')
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
    doorScore = 1

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



start()