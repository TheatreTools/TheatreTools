describe("Quizzes Tests", function() {
    const testObject = {
        a: {question: "Question?", 
        optionA: "Option A.",
        optionB: "Option B.",
        optionC: "Option C.",
        answer: "B", asked: false},

        b: {asked: true},
    };
    describe("randomQuestion Function", function() {
        it("Returns a String", function() {
            assert(typeof(randomQuestion(1)) == "string", "Doesn't return string");
        });

        it("Returns Null on Undefined", function() {
            assert(randomQuestion(undefined) == null, "Not Null");
        });

        it("Tried has increased", function() {
            let triedBefore = tried;
            randomQuestion(3);
            let triedAfter = tried;
            console.log(`${triedBefore} -> ${triedAfter}`)
            assert(triedBefore < triedAfter, "Tried not increased");
        });

        it("Equals expected range of questions", function() {
            let returned = randomQuestion(3);
            assert(returned === "a" || returned === "b" || returned === "c", "Does not equal expected.");
        });
    });

    describe("canLoadQuestion Function", function() {

        it("Can load question", function() {
            assert(canLoadQuestion("a", testObject, 2) === true, "error identifying loadable question");
        });

        it("Can load another question", function() {
            tried = 1; // as if tried one
            assert(canLoadQuestion("b", testObject, 2) === false, "Does not identify as asked...");
        });

        it("Can go to end screen", function() {
            tried = 3; //Artificially set tried to larger number as if looped through
            assert(canLoadQuestion("b", testObject, 2) === null, "hasn't detected should return null");
        });

        it("Catches undefined", function() {
            assert(canLoadQuestion("c", testObject, 3) === false, "Doesn't catch undefined");
        })
    });

    describe("loadQuestion Function", function() {
        it("Answer String is correct", function() {
            loadQuestion(testObject, "a");
            assert(document.getElementById("answerA").innerText == testObject.a.optionA, "Option A not loaded from object");
            assert(document.getElementById("answerB").innerText == testObject.a.optionB, "Option B not loaded from object");
            assert(document.getElementById("answerC").innerText == testObject.a.optionC, "Option C not loaded from object");
            console.log(`Element Inner Text is: ${document.getElementById("answerA").innerText}`);
            console.log(`Element Inner Text is: ${document.getElementById("answerB").innerText}`);
            console.log(`Element Inner Text is: ${document.getElementById("answerC").innerText}`);
        });
    });

    describe("clickHandler Function", function() {
        it("Detects wrong answer", () => {
            clickHandler(testObject, "a", "A", "answerA");
            assert(document.getElementById("answerA").style.color == "red", "Colour not red.");
            assert(!clicked, "thinks correct has been clicked")
            console.log(`clicked incorrect...`);
        });
        it("Detects correct answer", () => {
            clickHandler(testObject, "a", "B", "answerB");
            assert(document.getElementById("answerB").style.color == "green", "Colour not green.");
            console.log(`clicked correct...`);
        });
        it("Knows you have clicked answer", () => {
            assert(clicked, "Not detected clicked correct.");
            console.log(`clicked is known to be: ${clicked}`);
        });
        it("Returns Null correctly", () => {
            assert(clickHandler(testObject, "a", "A", "answerA") === null, "doesn't return null");
            console.log(`clickHandler returns null`);
        });
    });

});
