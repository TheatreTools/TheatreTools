/** Overall Content - there is no title on this page */
const content = document.createElement("div");
content.className = "content";
document.getElementById("welcome").appendChild(content);

/** Div that holds the individual menu items */
const gridMasonry = document.createElement("div");
gridMasonry.className = "photo-grid";
content.appendChild(gridMasonry);

/** Creates each menu item */
addItem("", "venueList");
addItem("tall", "quizzes");
addItem("", "contractExplorer");
addItem("",  "totalSeater");
addItem("", "budgetExplorer");
addItem("wide", "marketingPlan");


/** Sets special links & targets for external links */
//document.getElementById("theatreCastingToolkit").href = "https://www.theatrecastingtoolkit.org/";
//document.getElementById("theatreCastingToolkit").target = "_blank";
//document.getElementById("stageOne").href = "https://www.stageone.uk.com/";
//document.getElementById("stageOne").target = "_blank";

/** Function for adding Items */
function addItem(cardType, url) {
    const item = document.createElement("div");
    item.className = `card card-${cardType}`
    item.style.backgroundImage = `url('/assets/appImages/${url}.png')`;
    item.style.cursor = "pointer";
    /** THESE ARE SET SIZES WITHIN THE CSS FILE */
    gridMasonry.appendChild(item);

    const link = document.createElement("a");
    link.style.cursor = "pointer";
    link.className = "hiddenClickable"
    link.href = `/${url}`;
    item.appendChild(link);

}