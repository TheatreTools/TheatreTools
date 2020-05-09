
const alphabeticalRows = [
    "","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS"
];

let priceBands = [
    ["priceBandA", "black", 0],
    ["priceBandB", "white", 0],
    ["priceBandC", "green", 0],
    ["priceBandD", "orange", 0],
    ["priceBandE", "purple", 0],
    ["priceBandF", "pink", 0]
];


let actualButtons = [

];

let indPriceBands = {};

/**Handles Price Band Changes & which checkbox is selected */
let priceBandPrices = {};

let boxChecked;

let totalPrice = 0;

let removeWarning;


/**Set Inputs and pull from cookies. */
let rowInput = localStorage.getItem("rowInput");
let numinRowInput = localStorage.getItem("numinRowInput");

function runTotalSeater() {
    console.log("Defining Variables")
    if (rowInput == "" || rowInput == undefined) {
        rowInput = 28;
    }
    document.getElementById("rows").value = rowInput;


    if (numinRowInput == "" || numinRowInput == undefined) {
        numinRowInput = 31;
    }

    document.getElementById("numInRow").value = numinRowInput;


    /** SET VALUES OF EACH PRICE BAND */
    priceBands.forEach(bandName => {
        if (bandName[0] != "" && localStorage.getItem(bandName[0]) != null) {
            priceBandPrices[bandName[0]] = localStorage.getItem(bandName[0]);
            document.getElementById(bandName[0]).value = priceBandPrices[bandName[0]];
        } else {
            updatePriceBands(1);
        }
        
    /** WHEN CLICK A BOX, UPDATE HANDLING */
        document.getElementById(`c${bandName[0]}`).onclick = () => {
            boxChecked = bandName[0];
            handleClicks();
        }
    });


    /**LOAD WHICH PRICE BAND HAS BEEN SELECTED */
    priceBands.forEach(bandName => {
        if (boxChecked != bandName[0]) {
            document.getElementById("c"+bandName[0]).checked = false;
            boxChecked = localStorage.getItem("boxChecked");
        } else {
            document.getElementById("c"+bandName[0]).checked = true;
        }

    });

    console.log(`%cPreloaded Box-Click to storage: \n${boxChecked}`, `color: yellow`);

}





/** Fired when you update your Price Band value input */
function updatePriceBands(int) {
    console.log("triggered");
    priceBands.forEach(bandName => {
        let value = document.getElementById(bandName[0]).value;
        if (value > 999.99) {
            clearTimeout(removeWarning);
            document.getElementById(bandName[0]).value = 999.99;
            document.getElementById("warning").innerHTML = "Maximum price is £999.99 per ticket.";
            document.getElementById("warning").style.opacity = 1;
            removeWarning = setTimeout(() =>{
                document.getElementById("warning").style.opacity = 0;
            }, 2000);
        }
        if (bandName[0] == "priceBandA") {
            if (value > 0) {
                if (removeWarning != undefined) {
                    clearTimeout(removeWarning);
                }
                document.getElementById(bandName[0]).value = 0;
                document.getElementById("warning").innerHTML = "Cannot raise the price of an unused seat!";
                document.getElementById("warning").style.opacity = 1;
                removeWarning = setTimeout(() =>{

                    document.getElementById("warning").style.opacity = 0;
                }, 2000);
            }
        }

        if (priceBandPrices[bandName[0]] != value) {
            priceBandPrices[bandName[0]] = value;
        }
        localStorage.setItem(bandName[0], priceBandPrices[bandName[0]]);
    });
    if (int != 1) {
        calculateTotals();
    }
}






/**Calculate total number of buttons from start */
let totalButtons = rowInput * numinRowInput;


/**  Updates cookies & functions of rows / numInRow */

function updateButtons(int) {
    console.time('Time to Update')
    rowInput = document.getElementById("rows").value;
    numinRowInput = document.getElementById("numInRow").value;
    totalButtons = rowInput * numinRowInput;
    console.log(`%cTotal buttons: ${totalButtons}`, `color: yellow;`);
    localStorage.setItem("rowInput", rowInput);
    localStorage.setItem("numinRowInput", numinRowInput);
    if(rowInput > 27 || numinRowInput > 30) {
        console.warn(`Seating Arrangement is at maximum.`);
    }
    console.timeEnd('Time to Update');
    renderButtons(int);
}

/**Actually renders the buttons */
function renderButtons(int) {
    console.time('Render Time');
    actualButtons = [];
    let row = 0
    const element = document.getElementById("buttonDisplay");
    
    /** ALLOWS TO OVERRIDE */
    element.innerHTML = "";


    for (var i = 0; i < totalButtons; i++) {
        var buttonNumber = i+1;

        if (buttonNumber % numinRowInput == 1) {
            row++;
            const tag = document.createElement("br");
            element.appendChild(tag);
        }

        const tag = document.createElement("div");
        let rowName = i % numinRowInput + 1;
        
        const text = document.createTextNode(alphabeticalRows[row]+ rowName);

        /**INPUTS ACTUAL SEAT NUMBER / NAMES INTO AN ARRAY */
        actualButtons[i] = alphabeticalRows[row] + rowName;
        tag.appendChild(text);
        tag.id = actualButtons[i];

        /** Iterates through Price Bands */
        priceBands.forEach(bandName => {
            /** If  */
            if(indPriceBands[actualButtons[i]] == bandName[0]) {
                tag.style.backgroundColor = bandName[1];
                localStorage.setItem(actualButtons[i], bandName[1]);
            } else {
                tag.style.backgroundColor = localStorage.getItem(actualButtons[i]);
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
        tag.style.cursor ="pointer";

        element.appendChild(tag);
        /** Send to click handler again once buttons are rendered */
    }

    try {
        if(row != rowInput) throw "Rows incorrectly created!";
        if(actualButtons.length != totalButtons) throw "Wrong number of buttons!";
    }
    catch(err) {
        console.error(err);
        console.trace();
    }
    console.timeEnd('Render Time');
    handleClicks();
    calculateTotals(int);
}



/** Sent from the Render Buttons function */

function handleClicks() {
    console.time(`Handling Clicks`);
    priceBands.forEach(bandName => {
        if (boxChecked != bandName[0]) {
            document.getElementById("c"+bandName[0]).checked = false;
            localStorage.setItem("boxChecked", boxChecked);
        } else {
            document.getElementById("c"+bandName[0]).checked = true;
        }
    });
    console.log(`%cSet Box Clicked to ${localStorage.getItem("boxChecked")}`, "color: yellow;")
    actualButtons.forEach(clicked => {
        if(localStorage.getItem("price"+clicked) != null ){
            indPriceBands[clicked] = localStorage.getItem("price"+clicked);
        } else {
            indPriceBands[clicked] = "priceBandB";
        }
        document.getElementById(clicked).onclick = () => {
            indPriceBands[clicked] = boxChecked;
            localStorage.setItem("price"+clicked, indPriceBands[clicked]);
            /** Start the processes again... */
            updateButtons();
        };
    });
    console.timeEnd(`Handling Clicks`);
}






function calculateTotals(int) {
    totalPrice = 0;
    console.time('Calculate Total function time');
    priceBands.forEach(bandName => {
        bandName[2] = 0;
        actualButtons.forEach(seats => {
            if(indPriceBands[seats] == bandName[0]) {
                bandName[2]++;
            }
        });
        if (bandName[2] != 0 || priceBandPrices[bandName[0]] != 0) {
            totalPrice = totalPrice + (bandName[2] *  priceBandPrices[bandName[0]]);
            bandName[3] = (bandName[2] *  priceBandPrices[bandName[0]]);
        }
    });
    try {     
        priceBands.forEach(bandName =>{
            if(priceBandPrices[bandName[0]] == undefined) throw `Price Band ${bandName[0]} is undefined!`
        });
        if(priceBands[0][2] + priceBands[1][2] + priceBands[2][2] + priceBands[3][2] + priceBands[4][2] + priceBands[5][2] != totalButtons) throw "Incorrect Calculation of # of Price Bands! "
        if(priceBands[0][3] + priceBands[1][3] + priceBands[2][3] + priceBands[3][3] + priceBands[4][3] + priceBands[5][3] != totalPrice) throw "Incorrect Calculation of Total Price! "

    }
    catch(err) {
        console.error(err);
        console.table(priceBands)
        console.trace();
    }
        
        console.log("%cCalculated Total as: £"+totalPrice, "color: yellow");
        console.timeEnd('Calculate Total function time')

        totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
        document.getElementById("totalPrice").innerHTML = `£ ${totalPrice}`
    if(int == 1) {
        console.clear();
        console.log("%cInitial Load Complete, re-rendering", "color:yellow;")
    }
    }