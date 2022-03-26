class Questions {
    constructor (categoria, pregunta, nivel, correcta, incorrecta1, incorrecta2, incorrecta3 ){
        this.categoria = categoria
        this.pregunta = pregunta
        this.nivel = nivel
        this.correcta = correcta
        this.incorrecta1 = incorrecta1
        this.incorrecta2 = incorrecta2
        this.incorrecta3 = incorrecta3    
    }
    
}

const mathQuestions = new Questions ('Matematicas',
                                    '¿Cuál es el número anterior a 100?',
                                     1,
                                     999,
                                     990,
                                     1001,
                                     900)


console.log(mathQuestions)



/*
function showQuestion (mathQuestions) {
    if(mathQuestions.nivel == 1){
        console.log('Nivel:1 ')
        
    }
}

showQuestion()

*/