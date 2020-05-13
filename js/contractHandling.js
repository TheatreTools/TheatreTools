let define = false;
let link = false;
let explain = false;

const definition = {
    Agreement: "Agreement refers to this entire contract, including any schedules. It allows the contract to clarify meanings of words or phrases for the purposes of the agreement.",
    VenueCharge: "Venue Charge is an agreed hire fee or any payment due to the venue by the Producer.",
    Producer: "Sometimes referred to as the Visiting Manager, it refers to the company or individual hiring the venue.<br> The Producer is one of the signators of Venue Hire Agreements.",
    ResidentManager: "Sometimes referred to as the Venue Operator, it refers to the company or individual who run the venue.<br> The Resident Manager is one of the signators of Venue Hire Agreements.",
    Terms: "Sometimes referred to as Clauses. An agreement is made up of multiple terms.",
    Schedules: "Additional documents, sometimes referred to as an Appendix. These lay out specific terms of an agreement or are used to clarify event-specific terms when using a general agreement. This example is a general agreement, sometimes referred to as the Principal Terms.",
};

function checkBox() {
    
    if (document.getElementById("defineCheck").checked && !define) {
        let items = document.getElementsByClassName("contractItem");
        Object.keys(items).forEach(item => {
            items[0].remove();
        });
        define = true;
        link = false;
        explain = false;
        console.log("%cToggled Define", "color: yellow")
        document.getElementById("linkCheck").checked = false;
        document.getElementById("explainCheck").checked = false;
        addDefineVersion();
    }
    if (document.getElementById("linkCheck").checked && !link) {
        let items = document.getElementsByClassName("contractItem");
        Object.keys(items).forEach(item => {
            items[0].remove();
        });
        define = false;
        link = true;
        explain = false;
        
        console.log("Toggled Link")
        document.getElementById("defineCheck").checked = false;
        document.getElementById("explainCheck").checked = false;
        mouseEvents();
    } 
    if (document.getElementById("explainCheck").checked && !explain) {
        let items = document.getElementsByClassName("contractItem");
        Object.keys(items).forEach(item => {
            items[0].remove();
        });
        define = false;
        link = false;
        explain = true;
        console.log("Toggled Explain")
        document.getElementById("defineCheck").checked = false;
        document.getElementById("linkCheck").checked = false;
        mouseEvents();
    } 
}

function addDefineVersion() {
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

function mouseEvents() {
    let items = document.getElementsByClassName("define");
    Object.keys(items).forEach(item => {
        let data = items[item].innerText.replace(/\s+/g, '');
        items[item].onmouseover = () =>{
            document.getElementById("infoBoxText").innerHTML = definition[data];
            document.getElementById("infoBox").style.left = event.clientX +100;
            document.getElementById("infoBox").style.top = event.clientY;
            document.getElementById("infoBox").style.opacity = 1;
        };
        items[item].onmouseout = () => {
            document.getElementById("infoBox").style.opacity = 0;
            document.getElementById("infoBox").style.left = event.clientX + 250;
            document.getElementById("infoBox").style.top = 300;
        };
    });
}

function addContractItem(input) {
    createNewElement(div, "contractItem", 0, "content", input, 0);
    createNewElement(br, "contractItem", 0, "content", 0,0,0,0,0,0,0,0,0);
}