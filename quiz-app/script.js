const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c' 
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct : 'a'
    },
    {
        question: 'Who is he President of US in 2020',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question : 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d: 'Application programming Interface',
        correct : 'a'
    },{
        question : 'What year was javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'non of the above',
        correct : 'd',

    }

]

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score =0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {;
    let answer = undefined;
    answersEls.forEach((answerEl) => {

        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    console.log(answer)

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;


        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // TODO: Show Results 
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.
            </h2> <button onclick="location.reload()">Reload</button>`
        }
    }
    
})