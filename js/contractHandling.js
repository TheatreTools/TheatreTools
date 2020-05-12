let checked = false;

function checkBox() {
    
    if (document.getElementById("defineCheck").checked && !checked) {
        checked = true;
        console.log("Clicked")
        createNewElement(div, "contractItem", 0, "center", "<b>2.1</b> In consideration of payment of the <u class='define'>Venue Charge</u> and compliance by the Producer with the terms of this Agreement, ATG grants to the Producer the right (in common with ATG) to use the Permitted Areas during the Access Times in the Period solely and exclusively for the Permitted Use (and for no other purpose) subject always to the terms of this Agreement. The Producer shall not access any part of the Venue other than the Permitted Areas.", 0);
        createNewElement(div, "contractItem", 0, "center", "<b>2.3</b>  ATG shall have the right to use the Venue for any purpose in connection with its own business including (having notified the Producer in advance in writing) to license the Venue to a third party for other events during the Period at times other than those specified in the Terms for the Permitted Use. In the event of any such use ATG will", 0); 
        mouseEvents();
    } else {
        /** REMOVE ALL CONTRACT ITEMS */
        checked = false;
        let items = document.getElementsByClassName("contractItem");
        Object.keys(items).forEach(item => {
            items[0].remove();
            console.log("removed")
        });
    }

}


function mouseEvents() {
    let items = document.getElementsByClassName("define");
    Object.keys(items).forEach(item => {
        let data = items[item].innerText;


        items[item].onmouseover = () =>{

        }
    });

}