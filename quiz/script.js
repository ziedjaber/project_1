const quizDate=[
    {
       question:"",
    a:"0.843",
    b:"84.3",
 
    c:"843",
    correct:"", 
    },
   { 
    question:"",
    a:"78.231", 
    b:"783.21",
    c:"7832.1",
    correct:"",
},    
 {   question:"",
    a:"30.25 ",
    b:"3025 ",
    c:"302.5",
    correct:"",
},          
{    question:"",
    a:"235.6",
    b:"2.356",
    c:"2356",
    correct:"",},          
    {
    question:"",
    a:"48.38",
    b:"483.8",
    c:"4.83800",
    correct:"",
},{
    question:"",
    a:"47378",
    b:"47.318",
    c:"4737.8",
    correct:""}
]

const quiz= document.getElementById('quiz')
 const answerEl = document.querySelectorAll('.answer')
 const questionEl = document.getElementById('question')
 const a_texte = document.getElementById('a_text')
 const b_texte = document.getElementById('b_text')
 const c_texte = document.getElementById('c_text')
 const d_texte = document.getElementById('d_text')
 const submitBtn = document.getElementById('submit')

 let currentQuiz= 0
 let score = 0

 function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]


    questionEl.innerHTML = currentQuizData.question
    a_texte.innerText = currentQuizData.a
    b_texte.innerText = currentQuizData.b
    c_texte.innerText = currentQuizData.c
    d_texte.innerText = currentQuizData.d
}

    function deselectAnswers() {
    answerEl.forEach(answerEl=> answerEl.checked = false)
 }

    function getSelected() {
    let answer 
    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
 }
 loadQuiz();

 submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct) {
         score++

        }
     currentQuiz++

     if(currentQuiz < quizData.length){
        loadQuiz()
}

 else{
        quiz.innerHTML =`
        <h2> score ${score}/${quizData.length}</h2>

        <button onclick="location.reload()">Recommencer</button>
        `
     }
     
    }

 })


        