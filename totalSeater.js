var alphabeticalRows = [
    "","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var priceBands = [
    ["priceBandA", "white"],
    ["priceBandB", "red"],
    ["priceBandC", "pink"],
    ["priceBandD", "orange"],
    ["priceBandE", "purple"],
    ["priceBandF", "blue"]
];


var actualButtons = [

];

var indPriceBands = {};

var boxChecked;


/**Set Inputs and pull from cookies. */
var rowInput = getCookie("rowInput");
if (rowInput == "") {
    rowInput = 10;
}
document.getElementById("rows").value = rowInput;

var numinRowInput = getCookie("numinRowInput");
if (numinRowInput == "") {
    numinRowInput = 15;
}
document.getElementById("numInRow").value = numinRowInput;


/**Handles Price Band Changes & which checkbox is selected */
var priceBandPrices = {};


/** SET VALUES OF EACH PRICE BAND */
priceBands.forEach(bandName => {
    if (bandName[0] != "" && getCookie(bandName[0]) != null) {
        priceBandPrices[bandName[0]] = getCookie(bandName[0]);
        document.getElementById(bandName[0]).value = priceBandPrices[bandName[0]];
    }
    
/** WHEN CLICK A BOX, UPDATE HANDLING */
    document.getElementById("c"+bandName[0]).onclick = () => {
        boxChecked = bandName[0];
        console.log("Selected box: " + boxChecked);
        handleClicks();
    }
});

/** Fired when you update your Price Band value input */
function updatePriceBands() {
    priceBands.forEach(bandName => {
        let value = document.getElementById(bandName[0]).value;
        if (priceBandPrices[bandName[0]] != value) {
            console.log("New value of "+bandName[0]+"is: "+value);
            priceBandPrices[bandName[0]] = value;
        }
        setCookie(bandName[0], priceBandPrices[bandName[0]], 100);
    });
}



/**LOAD WHICH PRICE BAND HAS BEEN SELECTED */
priceBands.forEach(bandName => {
    if (boxChecked != bandName[0]) {
        document.getElementById("c"+bandName[0]).checked = false;
        boxChecked = getCookie("boxChecked");
    } else {
        document.getElementById("c"+bandName[0]).checked = true;
    }
});

console.log("Preloaded Box-Click to cookie: " + boxChecked);



/**Calculate total number of buttons from start */
var totalButtons = rowInput * numinRowInput;


/**  Updates cookies & functions of rows / numInRow */

function updateButtons() {
    rowInput = document.getElementById("rows").value;
    numinRowInput = document.getElementById("numInRow").value;
    totalButtons = rowInput * numinRowInput;
    console.log("Total buttons: " + totalButtons);
    setCookie("rowInput", rowInput, 100);
    setCookie("numinRowInput", numinRowInput, 100);
    renderButtons();
}

/**Actually renders the buttons */
function renderButtons() {
    actualButtons = [];
    var row = 0
    var element = document.getElementById("buttonDisplay");
    
    /** ALLOWS TO OVERRIDE */
    element.innerHTML = "";


    for (var i = 0; i < totalButtons; i++) {
        var buttonNumber = i+1;

        if (buttonNumber % numinRowInput == 1) {
            row++;
            var tag = document.createElement("br");
            var element = document.getElementById("buttonDisplay");
            element.appendChild(tag);
        }

        var tag = document.createElement("div");
        var rowName = i % numinRowInput + 1;
        
        var text = document.createTextNode(alphabeticalRows[row]+ rowName);

        /**INPUTS ACTUAL SEAT NUMBER / NAMES INTO AN ARRAY */
        actualButtons[i] = alphabeticalRows[row] + rowName;
        tag.appendChild(text);
        tag.id = actualButtons[i];

        /** Iterates through Price Bands */
        priceBands.forEach(bandName => {
            /** If  */
            if(indPriceBands[actualButtons[i]] == bandName[0]) {
                tag.style.backgroundColor = bandName[1];
                setCookie(actualButtons[i], bandName[1]);
            } else {
                tag.style.backgroundColor = getCookie(actualButtons[i]);
            }
        });

        tag.style.borderRadius = "5px";
        tag.style.color = "black";
        //tag.style.textAlign = "center";
        tag.style.fontSize = "10px";
        tag.style.margin = "2px";
        tag.style.width = "30px";
        tag.style.height = "20px";
        tag.style.display = "inline-block";

        element.appendChild(tag);
       
        /** Send to click handler again once buttons are rendered */
        handleClicks();
    }

    try {
        if(row != rowInput) throw "Rows incorrectly created!";
        if(actualButtons.length != totalButtons) throw "Wrong number of buttons!";
    }
    catch(err) {
        console.log(err);
    }

}



/** Sent from the Render Buttons function */

function handleClicks() {
    priceBands.forEach(bandName => {
        if (boxChecked != bandName[0]) {
            document.getElementById("c"+bandName[0]).checked = false;
            setCookie("boxChecked", boxChecked, 100);
        }
    });
    actualButtons.forEach(clicked => {
        indPriceBands[clicked] = clicked;
        document.getElementById(clicked).onclick = () => {
            console.log("Clicked "+ clicked);
            console.log(boxChecked);
            indPriceBands[clicked] = boxChecked;
            console.log(indPriceBands[clicked])

            /** Start the processes again... */
            updateButtons();
        };
    });
}





