createNewElement(div, "title", "title", "welcome", 0, 0, 0, 0, 0, 0, 0, 0, 0);
createNewElement(h2, 0, 0, "title", 0, "Test Knowledge", 0, 0, 0, 0, 0);
createNewElement(span, "byLine", 0, "title", 0, "Interactive Quiz to Challenge Yourself", 0, 0, 0, 0,0,0, 0);

createNewElement(br, 0, 0, "welcome", 0,0,0,0,0,0,0,0,0);

createNewElement(div, 0, "testBounds", "welcome", 0, 0, 0, 0, 0, 0, 0);
createNewElement(div, 0, "testScore", "testBounds",0,0);
createNewElement(h2, 0, "h2S", "testScore", 0, 0);
createNewElement(div, 0, "testQuestion", "testBounds",0,0);
createNewElement(h2, 0, "h2Q", "testQuestion", 0, "QUESTION");

createNewElement(div, 0, "testAnswer", "testBounds", 0, 0);

createNewElement(div, "testAnswer", "answerA", "testAnswer", 0, 0);
createNewElement(h2, 0, "h2A", "answerA", 0, 0);
createNewElement(div, "testAnswer", "answerB", "testAnswer", "", 0);
createNewElement(h2, 0, "h2B", "answerB", 0, 0);
createNewElement(div, "testAnswer", "answerC", "testAnswer", "", 0);
createNewElement(h2, 0, "h2C", "answerC", 0, 0);

randomQuestion();