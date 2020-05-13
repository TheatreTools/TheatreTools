let define = false;
let link = false;
let explain = false;

function checkBox() {
    
    if (document.getElementById("defineCheck").checked && !define) {
        let items = document.getElementsByClassName("contractItem");
        Object.keys(items).forEach(item => {
            items[0].remove();
        });
        define = true;
        link = false;
        explain = false;
        console.log("Toggled Define")
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

    addContractItem("<b>2.1</b> In consideration of payment of the <u class='define'>Venue Charge</u> and compliance by the Producer with the terms of this Agreement, ATG grants to the Producer the right (in common with ATG) to use the Permitted Areas during the Access Times in the Period solely and exclusively for the Permitted Use (and for no other purpose) subject always to the terms of this Agreement. The Producer shall not access any part of the Venue other than the Permitted Areas.");
    createNewElement(br, "contractItem", 0, "content", 0,0,0,0,0,0,0,0,0);
    addContractItem("<b>2.3</b>  ATG shall have the right to use the Venue for any purpose in connection with its own business including (having notified the Producer in advance in writing to license the Venue to a third party for other events during the Period at times other than those specified in the Terms for the Permitted Use. In the event of any such use ATG will"); 
    console.log("Loaded version with defines...")    
    mouseEvents();
}


function mouseEvents() {
    console.log("In Mouse Events")
    let items = document.getElementsByClassName("define");
    Object.keys(items).forEach(item => {
        let data = items[item].innerText;
        console.log(items[item].innerText);
        items[item].onmouseover = () =>{
            console.log("Hovering")
            document.getElementById("infoBoxText").innerText = "Venue Charge is defined as £8,000 per week.";
            document.getElementById("infoBox").style.left = event.clientX +150;
            document.getElementById("infoBox").style.right = event.clientY +150;
            document.getElementById("infoBox").style.opacity = 1;
        };
        items[item].onmouseout = () => {
            document.getElementById("infoBox").style.opacity = 0;
            document.getElementById("infoBox").style.left = event.clientX + 250;
            document.getElementById("infoBox").style.right = event.clientY + 250;
        };
    });
}

function addContractItem(input) {
    createNewElement(div, "contractItem", 0, "content", input, 0);
}


