const priceBandList = [
    ["black", "Unused Seat", "priceBandA"],
    ["white", "Price Band A:", "priceBandB"],
    ["green", "Price Band B:", "priceBandC"],
    ["orange", "Price Band C:", "priceBandD"],
    ["purple", "Price Band D:", "priceBandE"],
    ["pink", "Price Band E:", "priceBandF"],
]

const wider = document.createElement("div");
wider.className = "content";
document.getElementById("welcome").appendChild(wider);

/** LEFT HAND SIDE */
const priceBandsSec = document.createElement("div");
priceBandsSec.id = "priceBands";
wider.appendChild(priceBandsSec);



const bandTitle = document.createElement("div");
bandTitle.className = "title";
priceBandsSec.appendChild(bandTitle);

const pH2Title = document.createElement("h2");
pH2Title.innerText = "Price Bands";
bandTitle.appendChild(pH2Title);

const pByLine = document.createElement("span");
pByLine.className = "byLine";
pByLine.innerText = "Set your Price Bands";
bandTitle.appendChild(pByLine);


/* Generate Each Price Band from Array */
priceBandList.forEach(list => {
    const squareCol = document.createElement("div");
    squareCol.className = list[0];

    const listName = document.createElement("p");
    listName.id = "textSize1";
    listName.innerText = list[1];

    const breakT = document.createElement("br");

    const numberInp = document.createElement("input");
    numberInp.type = "number";
    numberInp.className = "smallNumber";
    numberInp.id = list[2];
    if(list[1] == "Unused Seat") {
        numberInp.min = "0";
        numberInp.max = "0";
    } else {
        numberInp.min = "0";
        numberInp.max = "999.99";
    }
    numberInp.value = "0";
    numberInp.setAttribute("onclick", "updatePriceBands()");


    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = `c${list[2]}`;
    checkBox.onclick = "updatePriceBands()";



    priceBandsSec.appendChild(squareCol);
    priceBandsSec.appendChild(listName);
    priceBandsSec.appendChild(breakT);
    priceBandsSec.appendChild(numberInp);
    priceBandsSec.appendChild(checkBox);

    let i = 0;
    while (i < 2) {
    const additional = document.createElement("br");
    priceBandsSec.appendChild(additional);
    i++
    }
});
/** */

/** Gross Potential & Warning */
const gP = document.createElement("p");
gP.id = "textSize1";
gP.style.fontWeight = "800";
gP.innerText = "Gross Potential";

const totalPriceBox = document.createElement("p");
totalPriceBox.id = "totalPrice";

const warningBox = document.createElement("div");
warningBox.id = "warning";

priceBandsSec.appendChild(gP);
priceBandsSec.appendChild(totalPriceBox);
priceBandsSec.appendChild(warningBox);

createNewElement(div, "", "toggle",  "priceBands", "", "Toggle View");
document.getElementById("toggle").setAttribute("onclick", "");


/** RIGHT HAND SIDE */
const content = document.createElement("div");
content.className = "wider";
content.id = "mainContent"
wider.appendChild(content);

const indPageTitle = document.createElement("div");
indPageTitle.className = "title";
content.appendChild(indPageTitle);

const h2Title = document.createElement("h2");
h2Title.innerText = "Total Seater";
indPageTitle.appendChild(h2Title);

const byLine = document.createElement("span");
byLine.className = "byLine";
byLine.innerText = "Set up your venue and calculate a Gross Potential based on Price Bands";
indPageTitle.appendChild(byLine);




/** DISPLAY INPUTS ON ROWS BY NUM IN ROW */
const rowInputSec = document.createElement("input");
rowInputSec.type = "number";
rowInputSec.className = "smallNumber";
rowInputSec.id = "rows";
rowInputSec.setAttribute("oninput", "updateButtons()");
rowInputSec.max = "28";
content.appendChild(rowInputSec);

const xText = document.createTextNode(" x ");
content.appendChild(xText);

const numInputSec = document.createElement("input");
numInputSec.type = "number";
numInputSec.className = "smallNumber";
numInputSec.id = "numInRow";
numInputSec.setAttribute("oninput", "updateButtons()");
numInputSec.max = "31";
content.appendChild(numInputSec);


/** SEATING DISPLAY DIV */
const seatingDisplay = document.createElement("div");
seatingDisplay.id = "buttonDisplay";
content.appendChild(seatingDisplay);



runTotalSeater();
updateButtons(1);
updateButtons();


/*
<input type="number" class="smallNumber" id="rows" oninput="updateButtons()" max="28"></input> x
                    <input type="number" class="smallNumber" id="numInRow" oninput="updateButtons()" max="31"></input>
                    <div id="buttonDisplay"></div>



/**
 * <div id="priceBands">
					<div class="title"><h1>Price Bands</h1>
						<span class="byline">Set your price bands</span>
					</div>
					
					<div class="black"></div><p id="textSize1">Unused Seat: </p>
					<br>
					<input type="number" class="smallNumber" id="priceBandA" min="0" max="0" value="0" oninput="updatePriceBands()"></input>
					<input type="checkbox" id="cpriceBandA" checked onclick="updatePriceBands()"></input>

					<br><br>
					<div class="white"></div><p id="textSize1">Price Band A: </p>
					<br>
					<input type="number" class="smallNumber" id="priceBandB" min="0"  max="999.99" value="20" oninput="updatePriceBands()"></input>
					<input type="checkbox" id="cpriceBandB"></input>
					<br><br>
					<div class="green"></div><p id="textSize1">Price Band B: </p>
					<br>
					<input type="number" class="smallNumber" id="priceBandC" min="0"  max="999.99" value="20" oninput="updatePriceBands()"></input>
					<input type="checkbox" id="cpriceBandC"></input>
					<br><br>
					<div class="orange"></div><p id="textSize1">Price Band C: </p>
					<br>
					<input type="number" class="smallNumber" id="priceBandD" min="0"  max="999.99" value="30" oninput="updatePriceBands()"></input>
					<input type="checkbox" id="cpriceBandD"></input>
					<br><br>
					<div class="purple"></div><p id="textSize1">Price Band D: </p>
					<br>
					<input type="number" class="smallNumber" id="priceBandE" min="0"  max="999.99" value="40" oninput="updatePriceBands()"></input>
					<input type="checkbox" id="cpriceBandE"></input>
					<br><br>
					<div class="pink"></div><p id="textSize1">Price Band E: </p>
					<br>
					<input type="number" class="smallNumber" id="priceBandF" min="0"  max="999.99" value="40" oninput="updatePriceBands()"></input>
					<input type="checkbox" id="cpriceBandF"></input>
					<br><br>
					<p id="textSize1" style="font-weight: 800;">Gross Potential</p><p id="totalPrice"></p>
					<br>
                    <div id="warning"></div>
                    




                    



			</div>
			<div class="content">
				<div class="title">
					<h2>Total Seater</h2>
					<span class="byline">Set up your venue and calculate a Gross Potential based on Price Bands</span>
				 </div>
			<input type="number" class="smallNumber" id="rows" oninput="updateButtons()" max="28"></input> x
                    <input type="number" class="smallNumber" id="numInRow" oninput="updateButtons()" max="31"></input>
                    <div id="buttonDisplay"></div>
		</div>
 * 
 */