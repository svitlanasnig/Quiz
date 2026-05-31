document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "скільки планет в соняшній системі?",
            answers: ["2", "3", "7", "14"],
            correct: 2
        },
          {
            question: "найбільша планета?",
            answers: ["уран", "меркурій", "земля", "юпітер"],
            correct: 3
        },
        {
            question: "скільки буде 2+2?",
            answers: ["5", "3", "4", "44"],
            correct: 2
        },
         {
            question: "скільки днів в тижні?",
            answers: ["2", "3", "7", "14"],
            correct: 2
        },//   Додай свої запитання
    ];
    const questionText = document.querySelector("#question-text")
    const answerContainer = document.querySelector("#answer-container")
    let questionIndex = 0
    let score = 0
    function showQuestion(question){
        answerContainer.innerHTML = ""
        questionText.textContent = question.question
        for (let i=0; i<question.answers.length; i++){
            const button = document.createElement("button")
            button.textContent = question.answers[i]  
            button.classList.add("answer-btn")
            answerContainer.append(button)
            
        }
    }
    showQuestion(questions[questionIndex])
    
    
});
