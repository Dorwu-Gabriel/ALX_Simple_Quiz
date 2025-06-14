function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById('feedback');
    if (!selected) {
        feedback.textContent = "Please select an answer.";
        return;
    }
    if (selected.value === "b") {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect. Try again!";
    }
}

document.getElementById('submit').addEventListener('click', checkAnswer);