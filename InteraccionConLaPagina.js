const box = document.querySelector('.box')
const boxStart = document.querySelector('.boxStart')
const btnStart = document.querySelector('.btn-grad')

function start () {
    btnStart.addEventListener('click', () => {
        box.removeChild(boxStart)
        optionCategories();
    })
}   

function optionCategories () {
    //Space for the categories
    const threeCategories = document.createElement('div')
    threeCategories.classList.add('threeCategories')
    box.appendChild(threeCategories)

    const twoCategories = document.createElement('div')
    twoCategories.classList.add('twoCategories')
    box.appendChild(twoCategories)
    //Maths
    const category = document.createElement('div')
    category.textContent = 'Matematicas!'
    category.classList.add('category')
    threeCategories.appendChild(category)
    //Biology
    const category2 = document.createElement('div')
    category2.textContent = 'Biologia!'
    category2.classList.add('category2')
    threeCategories.appendChild(category2)
    //Arts
    const category3 = document.createElement('div')
    category3.textContent = 'Artes!'
    category3.classList.add('category3')
    threeCategories.appendChild(category3)
    //Sociales
    const category4 = document.createElement('div')
    category4.textContent = 'Sociales!'
    category4.classList.add('category4')
    twoCategories.appendChild(category4)
    //Deportes
    const category5 = document.createElement('div')
    category5.textContent = 'Deportes!'
    category5.classList.add('category5')
    twoCategories.appendChild(category5)
    selectCategory()
}

function hideCategories () {
    const three = document.querySelector('.threeCategories')
    const two = document.querySelector('.twoCategories')
    box.removeChild(three)
    box.removeChild(two)
}

function cardQuestion () {
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

    randomCorrectPosition () //The function is located in script.js. The function allows put the position of the options randomly
    
}

function selectCategory () {
    const categoryMath = document.querySelector('.category')
    const categoryBio = document.querySelector('.category2')
    const categorySociales= document.querySelector('.category4')
    const categoryArts = document.querySelector('.category3')
    const categorySports = document.querySelector('.category5')
    categoryMath.addEventListener('click' , () => {
        math = 1
        hideCategories()
        cardQuestion()
        defineQuestion () //The function is located in script.js
        showQuestion ()//The function is located in script.js
        answer()

    })
    categoryBio.addEventListener('click' , () => {
        bio = 1
        hideCategories()
        cardQuestion()
        defineQuestion ()//The function is located in script.js
        showQuestion ()//The function is located in script.js
        answer()
    })
    categorySociales.addEventListener('click' , () => {
        sociales = 1
        hideCategories()
        cardQuestion()
        defineQuestion ()//The function is located in script.js
        showQuestion ()//The function is located in script.js
        answer()
    })
    categoryArts.addEventListener('click' , () => {
        arts = 1
        hideCategories()
        cardQuestion()
        defineQuestion ()//The function is located in script.js
        showQuestion ()//The function is located in script.js
        answer()
    })
    categorySports.addEventListener('click' , () => {
        sports = 1
        hideCategories()
        cardQuestion()
        defineQuestion ()//The function is located in script.js
        showQuestion ()//The function is located in script.js
        answer()
    })

}



start()