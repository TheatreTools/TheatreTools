const questions = {
    a: {question: "How would you calculate the Gross Potential of an event?", 
        optionA: "A total of all seats available, taking price bands into account after tax or other fee deductions.",
        optionB: "A total of all seats available, taking price bands into account before tax or other fee deductions.",
        optionC: "The total profit a Producer can make on an event.",
        answer: "B", asked: false},

    b: {question: "What is meant by the Resident Manager?",
        optionA: "The Producer who is hiring the venue.",
        optionB: "The Company who runs the Venue.",
        optionC: "The theatre company who is in residence at the venue.",
        answer: "B", asked: false},

    c: {question: "What is the purpose of a Schedule attached to a contract?",
        optionA: "They are used by the Producer to inform the venue of their performance schedule.",
        optionB: "They only ever outline the time schedule of the event.",
        optionC: "They can be used to clarify specific details for events when using general terms.",
        answer: "C", asked: false},

    d: {question: "What is meant by Recoupment?",
        optionA: "The total profit a Producer can make on an event.",
        optionB: "The recovery of money, usually through Net Profit. This is the point when a show begins to profit.",
        optionC: "The point at which a show begins to pay back investors.",
        answer: "B", asked: false},
    
    e: {question: "What union(s) represent Stage Managers?",
        optionA: "Equity",
        optionB: "BECTU, SOLT, UK Theatre",
        optionC: "Equity & BECTU",
        answer: "A", asked: false},
    
    f: {question: "What is SOLT?",
        optionA: "The Society of London Theatre, a government body set up to manage the West End tourism market.",
        optionB: "The Society of London Theatre, a union representing Theatre Producers.",
        optionC: "The Society of London Theatre, comprising of West-End Theatre Producers and Venue Managers.",
        answer: "C", asked: false},

    f: {question: "What is meant by a Theatre's Levy?",
        optionA: "The running costs & other fees passed onto a Producer at settlement",
        optionB: "A government tax on all theatre tickets.",
        optionC: "The point at which a show begins to pay back investors.",
        answer: "A", asked: false},
        
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
        if (questions[questionId].answer == "A") {
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
        if (questions[questionId].answer == "B") {
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
        if (questions[questionId].answer == "C") {
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
            if(pos2 == 70) {
                setTimeout(() =>{
                    document.getElementById("h2S").style.opacity = 1;
                    scoreText.innerText = `${score} out of ${numberOfQuestions}\n questions\n correct!`;
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