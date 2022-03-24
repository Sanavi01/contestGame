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
    const threeCategories =document.createElement('div')
    threeCategories.classList.add('threeCategories')
    box.appendChild(threeCategories)

    const twoCategories =document.createElement('div')
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
}

start()

