createNewElement(div, "title", "title", "welcome", 0, 0, 0, 0, 0, 0, 0, 0, 0);
createNewElement(h2, 0, 0, "title", 0, "Contract Explorer", 0, 0, 0, 0, 0);
createNewElement(span, "byLine", 0, "title", 0, "Interactive Contract Explorer", 0, 0, 0, 0,0,0, 0);

createNewElement(br, 0, 0, "welcome", 0,0,0,0,0,0,0,0,0);

createNewElement(div, 0, "contractInfoBox", "welcome", 0, 0, 0, 0, 0, 0, 0, 0);
createNewElement(br, 0, 0, "contractInfoBox", 0,0,0,0,0,0,0,0,0);


createNewElement(span, 0, "buttonLabel", "contractInfoBox", "<b>Define</b>", 0);
createNewElement(div, "onoffswitch", 0, "contractInfoBox", "<input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' checked id='defineCheck' oninput='checkBox()'> <label class='onoffswitch-label' for='defineCheck'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label>", 0, 0, 0);
createNewElement(br, 0, 0, "contractInfoBox", 0,0,0,0,0,0,0,0,0);
createNewElement(br, 0, 0, "contractInfoBox", 0,0,0,0,0,0,0,0,0);
createNewElement(span, 0, "buttonLabel", "contractInfoBox", "<b>Link</b>", 0);
createNewElement(div, "onoffswitch", 0, "contractInfoBox", "<input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='linkCheck' oninput='checkBox()'> <label class='onoffswitch-label' for='linkCheck'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label>", 0, 0, 0);
createNewElement(br, 0, 0, "contractInfoBox", 0,0,0,0,0,0,0,0,0);
createNewElement(br, 0, 0, "contractInfoBox", 0,0,0,0,0,0,0,0,0);
createNewElement(span, 0, "buttonLabel", "contractInfoBox", "<b>Explain</b>", 0);
createNewElement(div, "onoffswitch", 0, "contractInfoBox", "<input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='explainCheck' oninput='checkBox()'> <label class='onoffswitch-label' for='explainCheck'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label>", 0, 0, 0);


/*
createNewElement("input", 0, "linkCheck", "contractInfoBox", 0,0,0,0,0,0,0,"3em", "checkbox", "checkBox()");
document.getElementById("linkCheck").checked = false;

createNewElement("input", 0, "explainCheck", "contractInfoBox", 0,0,0,0,0,0,0,"3em", "checkbox", "checkBox()");
document.getElementById("explainCheck").checked = false;
*/

createNewElement(div, 0, "infoBox", "welcome", 0,0,0,0,0,0,0,0);
createNewElement(p, 0, "infoBoxText", "infoBox", 0,0,0,0,0,0,0,0);

createNewElement(div, "content noSelect", "content", "welcome", 0, 0, 0, 0, 0, 0, 0);
/*
let mouseDown = false;
document.getElementById("contractInfoBox").onmousedown = () => {
    document.getElementById("contractInfoBox").style.backgroundColor = "grey";
    mouseDown = true;
};
document.getElementById("contractInfoBox").touchstart = () => {
    mouseDown = true;
};
document.getElementById("wrapper1").onmouseup = () => {
    if(mouseDown) {
        document.getElementById("contractInfoBox").style.left = event.clientX - 50;
        document.getElementById("contractInfoBox").style.top = event.clientY - 50;
        document.getElementById("contractInfoBox").style.backgroundColor = "white";
        mouseDown = false;
    }
};
*/

checkBox();


// reateNewElement(type, classInp, idInp, parent, innerHTML, innerText, srcInp, width, height, size, color, margin, inpType, onInput) {

/*
Licence
2.1. In consideration of payment of the Venue Charge and compliance by the Producer with the terms of this Agreement, ATG grants to the Producer the right (in common with ATG) to use the Permitted Areas during the Access Times in the Period solely and exclusively for the Permitted Use (and for no other purpose) subject always to the terms of this Agreement. The Producer shall not access any part of the Venue other than the Permitted Areas.
2.2. During the Period, the Venue (including the Permitted Areas) shall remain at all times in the possession and control of ATG, and ATG and all persons authorised by ATG shall have the right:
2.2.1. of access and egress at all times; and
2.2.2. to execute and carry out any works authorised by ATG or any competent authority (including the local council and/or any superior landlord),
provided always that where reasonably possible, the same shall not interfere with any equipment of the Producer or the Permitted Use.

2.3. ATG shall have the right to use the Venue for any purpose in connection with its own business including (having notified the Producer in advance in writing) to license the Venue to a third party for other events during the Period at times other than those specified in the Terms for the Permitted Use. In the event of any such use ATG will:
2.3.1. leave where practicable the scenery and equipment for the Event in its usual setting;
2.3.2. be responsible for any additional costs directly occasioned by such use;
2.3.3. pay for any damage to the equipment or property of the Producer caused by such use.
2.4. The Producer acknowledges that the right to grant admission to the Venue lies solely with ATG and unless otherwise agreed, ATG reserves the right of superintendence and control of all persons at the Venue including the protection and proper accommodation of the public and in order to fulfil the obligations of all relevant licences and consents.
2.5. ATG shall have the sole and exclusive right to sell in the Venue drinks, confectionery, food, merchandise (including Venue specific merchandise but excluding Merchandise) and to provide cloakroom accommodation, Programmes, screen advertising and to let advertising space in Programmes, bars and other places (including the auditorium and on the back of Tickets), to sell and provide corporate entertainment and hospitality and to exercise all front of house privileges and all Front of House Revenue shall belong to ATG.

*/