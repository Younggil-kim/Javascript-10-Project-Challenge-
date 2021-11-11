let quizData = [
    {
        question : "[www.naver.com]에서 www의 뜻으로 올바른것은?",
        a : "World Wide Web",
        b : "West Wide Web",
        c : "Worst Wide Web",
        d : "Whole Wide Web",
        correct : "a"
    },
    {
        question : "JS에서 다음 코드의 결과는? [console.log(0.1 + 0.2 == 0.3);]",
        a : "true",
        b : "false",
        c : "undefinded",
        d : "null",
        correct : "b"
    },
    {
        question : "JS에서 다음 코드의 결과는? [console.log('a' + 'b');]",
        a : "ab",
        b : "error",
        c : "93",
        d : "undefinded",
        correct : "a"
    },
    {
        question : "Merge Sort의 시간복잡도로 올바른것은?",
        a : "N^2",
        b : "N",
        c : "NlogN",
        d : "모두 아님",
        correct : "c"
    },
]
const questionEl = document.getElementById("question")
const a_textEl = document.getElementById("a_text");
const b_textEl = document.getElementById("b_text");
const c_textEl = document.getElementById("c_text");
const d_textEl = document.getElementById("d_text");
const quiz = document.getElementById("quiz")
const button = document.getElementById("submit")

const answersEls = document.querySelectorAll('.answer')

let cur = 0;
let score = 0;

//퀴즈 불러오는 함수
function loadQuiz(){
    questionEl.innerText = quizData[cur].question
    a_textEl.innerText = quizData[cur].a
    b_textEl.innerText = quizData[cur].b
    c_textEl.innerText = quizData[cur].c
    d_textEl.innerText = quizData[cur].d
}

//무슨 답 골랐는지 찾아오는 함수
function getSelected(){
    let selected = undefined;
    answersEls.forEach(ele => {
        if(ele.checked){
            selected = ele.id
        }
    })
    return selected
}

//답 체크 해제하는 함수
function deSelectAnswer(){
    answersEls.forEach(element => {
        element.checked = false
    });
}

//버튼에 이벤트 부여
button.addEventListener('click', () => {
    if(getSelected() === quizData[cur].correct){
        score++;
    }
    cur++;

    if (cur >= quizData.length ){
        quiz.innerHTML = `<h2>총 ${quizData.length}문제 중 ${score} 문제를 맞추셨습니다.
        </h2> <button onclick="location.reload()">Reload</button>`
    }else{
        loadQuiz();
        deSelectAnswer();
    }
})




loadQuiz();