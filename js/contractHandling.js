let define = false;
let link = false;
let explain = false;
let counterId = 1;

const definition = {
    Agreement: "Agreement refers to this entire contract, including any schedules. It allows the contract to clarify meanings of words or phrases for the purposes of the agreement.",
    VenueCharge: "Venue Charge is an agreed hire fee or any payment due to the venue by the Producer.",
    Producer: "Sometimes referred to as the Visiting Manager, it refers to the company or individual hiring the venue.<br> The Producer is one of the signators of Venue Hire Agreements.",
    ResidentManager: "Sometimes referred to as the Venue Operator, it refers to the company or individual who run the venue.<br> The Resident Manager is one of the signators of Venue Hire Agreements.",
    Terms: "Sometimes referred to as Clauses. An agreement is made up of multiple terms.",
    Schedules: "Additional documents, sometimes referred to as an Appendix. These lay out specific terms of an agreement or are used to clarify event-specific terms when using a general agreement. This example is a general agreement, sometimes referred to as the Principal Terms.",
};

const colors = [
    "", "blue", "red", "green", "purple", "pink", "red"
]

const links = {
    na: {id: 0, links: [],},
}

const numberToMake = 5;

for (var i = 1; i < numberToMake; i++) {
    let name = String.fromCharCode(96 + i);
    links[`${name}`] = {id: i, links: [], clicked: false, color: colors[i]}
}


function checkBox() {
    let items = document.getElementsByClassName("contractItem");
    Object.keys(items).forEach(item => {
        items[0].remove();
    });

    if (document.getElementById("defineCheck").checked && !define) {
        define = true;
        link = false;
        explain = false;
        console.log("%cToggled Define", "color: yellow")
        document.getElementById("linkCheck").checked = false;
        document.getElementById("explainCheck").checked = false;
        addDefineVersion();
    }

    if (document.getElementById("linkCheck").checked && !link) {

        define = false;
        link = true;
        explain = false;
        console.log("Toggled Link")
        document.getElementById("defineCheck").checked = false;
        document.getElementById("explainCheck").checked = false;
        addLinkVersion();
    } 

    if (document.getElementById("explainCheck").checked && !explain) {

        define = false;
        link = false;
        explain = true;
        console.log("Toggled Explain")
        document.getElementById("defineCheck").checked = false;
        document.getElementById("linkCheck").checked = false;
        mouseEvents();
    } 
    if (!document.getElementById("defineCheck").checked && !document.getElementById("linkCheck").checked && !document.getElementById("explainCheck").checked) {
        console.log("Try")
        console.log(define);
        console.log(link)
        console.log(explain)
        if (define) {
            document.getElementById("defineCheck").checked = true;
            define = false;
        } else if (link) {
            document.getElementById("linkCheck").checked = true;
            link = false;
        } else if (explain) {
            document.getElementById("explainCheck").checked = true;
            explain = false;
        }
        checkBox();
    }

}

function addDefineVersion() {
    counterId = 1;
    addContractItem("<h2><b>1</b> Definitions and Interpretation</h2>");
    addContractItem("<b>1.1</b> In this <u class='define'>Agreement</u>, the following words and phrases shall bear the following meanings:");
    addContractItem("<b>Access Times</b> means between 08.00 and 23:00 each day;");
    addContractItem("<b>Additional Services</b> means those services which the <u class='define'>Producer</u> requests the <u class='define'>Resident Manager</u> to provide and which the Resident Manager agrees to provide; the costs of which shall be deemed an Event Cost unless mutually agreed otherwise;");
    addContractItem("<b>Additional Staff</b> means those staff which the <u class='define'>Producer</u> requests the <u class='define'>Resident Manager</u> to provide and which the Resident Manager agrees to provide, the costs of which shall be deemed an Event Cost unless mutually agreed otherwise;");
    addContractItem("<b>Agreement</b> means the Terms and all of the <u class='define'>Schedules</u> referred to in the <u class='define'>Terms</u> including these General Terms;");

    addContractItem("<b>2.1</b> In consideration of payment of the <u class='define'>Venue Charge</u> and compliance by the Producer with the terms of this Agreement, ATG grants to the Producer the right (in common with ATG) to use the Permitted Areas during the Access Times in the Period solely and exclusively for the Permitted Use (and for no other purpose) subject always to the terms of this Agreement. The Producer shall not access any part of the Venue other than the Permitted Areas.");
    addContractItem("<b>2.3</b>  ATG shall have the right to use the Venue for any purpose in connection with its own business including (having notified the Producer in advance in writing to license the Venue to a third party for other events during the Period at times other than those specified in the Terms for the Permitted Use. In the event of any such use ATG will"); 
    
    console.log("%cLoaded version with defines...", "color:green")    
    mouseEvents();
}

function addLinkVersion() {
    counterId = 1;
    addContractItem("<h2><b>1</b> Definitions and Interpretation</h2>", 1);
    addContractItem("<b>1.1</b> In this Agreement, the following words and phrases shall bear the following meanings:", 2);
    addContractItem("<b>Access Times</b> means between 08.00 and 23:00 each day;", null);
    addContractItem("<b>Additional Services</b> means those services which the Producer requests the Resident Manager to provide and which the Resident Manager agrees to provide; the costs of which shall be deemed an Event Cost unless mutually agreed otherwise;", null);
    addContractItem("<b>Additional Staff</b> means those staff which the Producer requests the Resident Manager to provide and which the Resident Manager agrees to provide, the costs of which shall be deemed an Event Cost unless mutually agreed otherwise;", 1);
    addContractItem("<b>Agreement</b> means the Terms and all of the Schedules referred to in the Terms including these General Terms;", null);

    addContractItem("<b>2.1</b> In consideration of payment of the Venue Charge and compliance by the Producer with the terms of this Agreement, ATG grants to the Producer the right (in common with ATG) to use the Permitted Areas during the Access Times in the Period solely and exclusively for the Permitted Use (and for no other purpose) subject always to the terms of this Agreement. The Producer shall not access any part of the Venue other than the Permitted Areas.", null);
    addContractItem("<b>2.3</b>  ATG shall have the right to use the Venue for any purpose in connection with its own business including (having notified the Producer in advance in writing to license the Venue to a third party for other events during the Period at times other than those specified in the Terms for the Permitted Use. In the event of any such use ATG will", null); 
    
    console.log("%cLoaded version with links...", "color:green")    
    mouseEvents();
}


function mouseEvents() {

    if (define) {
        let defineItems = document.getElementsByClassName("define");
        Object.keys(defineItems).forEach(item => {
            let data = defineItems[item].innerText.replace(/\s+/g, '');
            defineItems[item].onmouseover = () =>{
                document.getElementById("infoBoxText").innerHTML = definition[data];
                document.getElementById("infoBox").style.left = event.clientX +100;
                document.getElementById("infoBox").style.top = event.clientY;
                document.getElementById("infoBox").style.opacity = 1;
            };
            defineItems[item].onmouseout = () => {
                document.getElementById("infoBox").style.opacity = 0;
                document.getElementById("infoBox").style.left = event.clientX + 250;
                document.getElementById("infoBox").style.top = 300;
            };
        });
    }
    
    if(link) {
        Object.keys(links).forEach(linkId => {
            const refId = links[linkId].links;
            refId.forEach(indClause => {
                let target =  document.getElementById(`${indClause}`);
                target.onmousedown = () => {
                    if (!links[linkId].clicked) {
                        refId.forEach(indiv => {
                            document.getElementById(`${indiv}`).style.color = links[linkId].color;
                        });
                        links[linkId].clicked = true;
                    } else {
                        refId.forEach(indiv => {
                            document.getElementById(`${indiv}`).style.color = "inherit";
                        });
                        links[linkId].clicked = false;
                    }
                }
            });
        });
    }
}

function addContractItem(input, link) {
    /** IF WE DEFINE IT AS NULL & WE ARE IN THE CORRECT MODE */
    if(link === null && !define && !explain) {
        /** THIS ADDS A BOX WITH CLASS CLEAR */
        createNewElement(div, `contractItem clear block`, 0, "content", 0, 0);
        let clearBox = document.querySelectorAll(`.clear`);
        for (let i = 0; i < clearBox.length; i++) {
            clearBox[i].style.width = "6px";
            clearBox[i].style.height = "6px";
        }

        createNewElement(div, "contractItem", 0, "content", input, 0);
        counterId++;

    }

    /** THIS IS IF THE LINK IS UNDEFINED, I.E IF WE DO NOT SET... */
    if(link === undefined) {
        createNewElement(div, "contractItem", 0, "content", input, 0);
        counterId++;
    
    /** IF WE'VE SET LINK TO SOMETHING OTHER THAN NULL, WE GET TO HERE */
    } else if (link != undefined) {

        /** LOOPS THROUGH EACH 'LINK' WITHIN LINKS OBJECT */
        Object.keys(links).forEach(linkId => {
            /** IF THAT NUMBER IS THE ID, THEN... */
            if(link == links[linkId]["id"]) {
                const refId = links[linkId].links;
                refId.push(counterId);

                /** THIS SETS THE COLOUR BLOCK */
                createNewElement(div, `contractItem ${links[linkId].color} block`, 0, "content", 0, 0);
                let blockEl = document.querySelectorAll(`.${links[linkId].color}`);
                for (let i = 0; i < blockEl.length; i++) {
                    blockEl[i].style.width = "6px";
                    blockEl[i].style.height = "6px";
                }
            } 
        });
        /** OUTSIDE OF THE LOOP, WE STILL HAVE TO SET THE CONTRACT ITEM, AND WE MAKE THE CURSOR A POINTER */
        createNewElement(div, "contractItem", `${counterId}`, "content", input, 0);
        document.getElementById(`${counterId}`).style.cursor = "pointer";
        counterId++;
    }
    /** AFTER ALL OF THIS, WE ADD A BREAK BELOW THE CONTRACT ITEM */
    createNewElement(br, "contractItem", 0, "content", 0,0);
    createNewElement(br, "contractItem", 0, "content", 0,0);
}
