const questions = {
    a: {question: "What is 50 plus 50?", optionA: "100", optionB: "150", optionC: "500", answer: "100", asked: false},
    b: {question: "What is meant by the Resident Manager?", optionA: "The Producer who is hiring the venue.", optionB: "The Company who runs the Venue.", optionC: "The theatre company who is in residence at the venue.", answer: "The Company who runs the Venue.", asked: false},
}

let numberOfQuestions = Object.keys(questions).length;
let correctAnswer;
let questionNumber;
let questionId;
let tried = 0;
let score = 0;

function randomQuestion () {
    questionNumber = Math.floor(Math.random() * numberOfQuestions);
    questionId = String.fromCharCode(97+questionNumber);
    /** Ability to double questions to 52 *//*
    if (Math.random() > 0.5) {
        console.log("Rolled to add additional!")
        questionNumber = Math.floor(Math.random() * 26);
        let additional = String.fromCharCode(97+questionNumber);
        questionId = `${questionId}${additional}`;
    }*/
    tried ++;
    if (questions[questionId].asked) {
        if (tried <= numberOfQuestions) {
            tried --;
            randomQuestion();
        } else {
            console.warn("No more questions!");
            loadEnd();
        }
    } else {
        loadQuestion();
    }
}

function loadQuestion() {
    console.log(questionId);
    if(questions[questionId] != undefined) {
        document.getElementById("h2S").innerText = `Score: ${score}`;
        document.getElementById("h2Q").innerText = questions[questionId].question;
        document.getElementById("h2A").innerText = questions[questionId].optionA;
        document.getElementById("h2B").innerText = questions[questionId].optionB;
        document.getElementById("h2C").innerText = questions[questionId].optionC;
        questions[questionId].asked = true;
    } else {
        console.log("Question is undefined!");
    }

    document.getElementById("answerA").onmousedown = () => {
        if (document.getElementById("h2A").innerText == questions[questionId].answer) {
            document.getElementById("answerA").style.color = "green";
            console.log("%cCORRECT!", "color:green");
            score++;
            document.getElementById("h2S").innerText = `Score: ${score}`;
            correctAnswer = setTimeout(() =>{
                document.getElementById("answerA").style.color = "inherit";
                randomQuestion();
            }, 2000);
        } else {
            document.getElementById("answerA").style.color = "red";
            console.log("%cCORRECT!", "color:red");
            correctAnswer = setTimeout(() =>{
                document.getElementById("answerA").style.color = "inherit";
            }, 2000);
        }
    }

    document.getElementById("answerB").onmousedown = () => {
        if (document.getElementById("h2B").innerText == questions[questionId].answer) {
            document.getElementById("answerB").style.color = "green";
            console.log("%cCORRECT!", "color:green");
            score++;
            document.getElementById("h2S").innerText = `Score: ${score}`;
            correctAnswer = setTimeout(() =>{
                document.getElementById("answerB").style.color = "inherit";
                randomQuestion();
            }, 2000);
        } else {
            document.getElementById("answerB").style.color = "red";
            console.log("%cCORRECT!", "color:red");
            correctAnswer = setTimeout(() =>{
                document.getElementById("answerB").style.color = "inherit";
            }, 2000);
        }
    }

    document.getElementById("answerC").onmousedown = () => {
        if (document.getElementById("h2C").innerText == questions[questionId].answer) {
            document.getElementById("answerC").style.color = "green";
            console.log("%cCORRECT!", "color:green");
            score++;
            document.getElementById("h2S").innerText = `Score: ${score}`;
            correctAnswer = setTimeout(() =>{
                document.getElementById("answerC").style.color = "inherit";
                randomQuestion();
            }, 2000);
        } else {
            document.getElementById("answerC").style.color = "red";
            console.log("%cCORRECT!", "color:red");
            correctAnswer = setTimeout(() =>{
                document.getElementById("answerC").style.color = "inherit";
            }, 2000);
        }
    }


}

function loadEnd() {
    document.getElementById("h2S").style.opacity = 0;
    document.getElementById("h2S").innerText = `Score: ${score}`;
    document.getElementById("h2Q").innerText = "";
    document.getElementById("h2A").innerText = "";
    document.getElementById("h2B").innerText = "";
    document.getElementById("h2C").innerText = "";

    var elem = document.getElementById("testScore");
    var scoreText = document.getElementById("h2S");
    var pos = 87;
    var topPos = 0;
    var id = setInterval(frame, 0.1);
    function frame() {
      if (pos == 12) {
        clearInterval(id);
        var pos2 = 0;
        var id2 = setInterval(frame, 1);
        function frame() {
            if(pos2 == 75) {
                setTimeout(() =>{
                    document.getElementById("h2S").style.opacity = 1;
                    scoreText.innerText = `${score} out of ${numberOfQuestions}\n questions`;
                }, 100);
                clearInterval(id2);
            } else {
                pos2++;
                let size = pos2 + 125;
                let margin = pos2 - 50;
                if(margin < 0) {
                    margin = 0;
                }
                scoreText.style.marginTop = margin + '%';
                elem.style.height = pos2 + '%';
                elem.style.width = pos2 + '%';
                setTimeout(() =>{
                    elem.style.fontSize = size + '%';
                }, 500);
            } 
        }
      } else {
        pos--;
        elem.style.left = pos + '%';
      }
    }
}