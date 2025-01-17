let ques = document.getElementById("question")
let opt = document.getElementById("options")
let nextBtn = document.getElementById("nextBtn")
let score = document.getElementById("score")

let i = 0
let scr = 0

function getQuestion() {
    reset()
    let questions = quiz[i]
    ques.innerHTML = questions.question

    let options = questions.options
    options.forEach(option => {
        let button = document.createElement("div")
        button.textContent = option
        button.classList.add("option")
        opt.appendChild(button)
        button.onclick = selectAnswer
    });
}



function selectAnswer(e) {
    const selected = e.target
    const correct = quiz[i].answer
    if (selected.textContent == correct) {
        scr += 1
        selected.classList.add("correct")
    }
    else {
        selected.classList.add("wrong")
    }
    Array.from(opt.children).forEach(option => {
        option.onclick = null
        if(option.textContent === correct) {
            option.classList.add("correct")
        }
    });
    nextBtn.style.display = "block"
}

function reset () {
    nextBtn.style.display = "none"
    opt.innerHTML = ""
}


nextBtn.addEventListener("click" , () => {
    i++
    if (i < quiz.length) {
        getQuestion()
    }
    else {
        showScore()
    }
})


function showScore () {
    reset()
    ques.innerHTML = "Quiz Finished!"
    score.innerHTML = `Your score: ${scr} / ${quiz.length}`
    nextBtn.textContent = 'Restart';
    nextBtn.style.display = 'block';
    nextBtn.onclick = () => location.reload();
  }

getQuestion()