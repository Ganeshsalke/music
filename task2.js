const quizData = [{
    question: "Who is the Prime Minester of India?",
    a: "Narendra Modi",
    b: "Rahul Gandhi",
    c: "Yogi Adityanath",
    d: "Nitin Gadkari",
    correct: "a",
},
{
    question: "Which day is Celebrated as Maharastra Day?",
    a: "1 MAY",
    b: "1 JUNE",
    c: "15 AUGUST",
    d: "1 APRIL",
    correct: "a",
},
{
    question: "Which One Is Highest Point in Maharastra?",
    a: "RAIGAD",
    b: "KALSUBAO",
    c: "HIMALAY",
    d: "none of the above",
    correct: "b",
},
{
    question: "Who was the Frist Cheif Minister of Maharastra?",
    a: "Devendra Fandnvis",
    b: "yashwantrao chavan",
    c: "eknath shinde",
    d: "sharad pawar",
    correct: "b",
},
{
    question: "Total Number of District In Maharastra?",
    a: "36",
    b: "10",
    c: "35",
    d: "26",
    correct: "a",
},
{
    question:"Which One is the largest District in Maharsatra?",
    a: "Pune",
    b: "Ahemadnagar",
    c: "Latur",
    d: "Amravati",
    correct: "b",
},

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)
const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}
const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}
let container = document.getElementsByClassName("container")[0];
const quizEnd = () => {
container.innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`

setTimeout(() => {if(correct >= 7){
    container.innerHTML = `<img src="./AW4011377_03.gif"></img>`
    }
    else{
        container.innerHTML = `<img src="./AW4011377_04.gif"></img>`
    } 
}, 1000);

}
loadQuestion(index);
