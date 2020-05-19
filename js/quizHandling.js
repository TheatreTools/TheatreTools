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

let numberOfQuestions = 1;//Object.keys(questions).length;
let correctAnswer;
let questionNumber;
let questionId;
let tried = 0;
let score = 0;
let clicked;

function randomQuestion (noOfQuests) {
    questionNumber = Math.floor(Math.random() * noOfQuests);
    questionId = String.fromCharCode(97 + questionNumber);
    tried ++;
    if(noOfQuests === undefined) {
        return null;
    }
    return questionId;
}

function canLoadQuestion (questId, objectInp, noOfQuests) {
    if(objectInp[questId] != undefined) {
        if (objectInp[questId].asked) {
            if (tried <= noOfQuests) {
                //Cannot Load this Question
                tried --;
                return false;
            } else {
                //No More Questions available...
                return null;
            }
        } else {
            //Can Load Question
            return true;
        }
    } else {
        console.log("Question is undefined!");
        return false;
    }
}


function loadQuestion(objectInp, questId) {

    document.getElementById("h2S").innerText = `Score: ${score}`;
    document.getElementById("h2Q").innerText = objectInp[questId].question;
    document.getElementById("h2A").innerText = objectInp[questId].optionA;
    document.getElementById("h2B").innerText = objectInp[questId].optionB;
    document.getElementById("h2C").innerText = objectInp[questId].optionC;
    objectInp[questId].asked = true;

    for (var i = 0; i < 3; i++) {
        let answerId = String.fromCharCode(97+i);
        answerId = answerId.toUpperCase();
        let answerString = `answer${answerId}`;
        document.getElementById(answerString).onmousedown = () => {
            clickHandler(objectInp, questId, answerId, answerString);
        }  
    }
}

function clickHandler(objectInp, questId, answerId, answerString) {
    if (objectInp[questId].answer == answerId && !clicked) {
        document.getElementById(answerString).style.color = "green";
        console.log("%cCORRECT!", "color:green");
        score++;
        document.getElementById("h2S").innerText = `Score: ${score}`;
        correctAnswer = setTimeout(() =>{
            document.getElementById(answerString).style.color = "inherit";
            newQuestion();
        }, 2000);
        clicked = true;
    } else if (!clicked) {
        document.getElementById(answerString).style.color = "red";
        console.log("%cINCORRECT!", "color:red");
        correctAnswer = setTimeout(() =>{
            document.getElementById(answerString).style.color = "inherit";
        }, 2000);
    } else {
        console.warn("Already received point, no more clicking available");
        return null;
    }
}


function newQuestion() {
    let loading = canLoadQuestion(randomQuestion(numberOfQuestions), questions, numberOfQuestions);
    if (loading) {
        clicked = false;
        console.log(`Loading Question: ${questionId.toUpperCase()}`);
        loadQuestion(questions, questionId);
    } else if (loading === null) { 
        console.log("Going to end screen...");
        loadEnd();
    } 
}

function loadEnd() {
    document.getElementById("h2S").style.opacity = 0;
    document.getElementById("h2S").innerText = `Score: ${score}`;
    document.getElementById("testQuestion").style.display = "none";
    document.getElementById("testAnswer").style.display = "none";
    const all = document.getElementsByClassName('testAnswer');
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }

    const elem = document.getElementById("testScore");
    const scoreText = document.getElementById("h2S");
    let pos = 87;
    let pos2 = 0;
    let pos3 = 0;
    const id = setInterval(frame, 0.1);
    function frame() {
        /** WAIT UNTIL 15% RIGHT (COUNTING) */
        if (pos == 15) {
            scoreText.style.padding = '30%';
            scoreText.style.fontSize = '500%';
            setTimeout(() =>{
                document.getElementById("h2S").style.opacity = 1;
                scoreText.innerText = `${score} out of ${numberOfQuestions}\n questions\n correct!`;
            }, 500);
        } else {
            pos--;
            pos2+= 0.9722222222;
            pos3 += 1.3333333333;
            elem.style.right = pos + '%';
            elem.style.width = pos2 + '%';
            elem.style.height = pos3 + '%';

        }
    }
}