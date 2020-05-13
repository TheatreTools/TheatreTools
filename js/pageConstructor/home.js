/** Overall Content - there is no title on this page */
const content = document.createElement("div");
content.className = "content";
document.getElementById("welcome").appendChild(content);

/** Div that holds the individual menu items */
const gridMasonry = document.createElement("div");
gridMasonry.className = "grid";
content.appendChild(gridMasonry);

/** Creates each menu item */
addItem("2", "3", "venueList");
addItem("3", "3", "totalSeater");
addItem("2", "3", "contractExplorer");
addItem("3", "3", "marketingPlan");
addItem('2', "3", "theatreCastingToolkit");
addItem("2", "3", "budgetExplorer");

/** Sets special links & targets for external links */
document.getElementById("theatreCastingToolkit").href = "https://www.theatrecastingtoolkit.org/";
document.getElementById("theatreCastingToolkit").target = "_blank";
addItem("3", "3", "stageOne");
document.getElementById("stageOne").href = "https://www.stageone.uk.com/";
document.getElementById("stageOne").target = "_blank";

/** Function for adding Items */
function addItem(width, height, url) {
    const link = document.createElement("a");
    link.style.cursor = "pointer";
    link.id = `${url}`;
    link.href = `/${url}`;
    gridMasonry.appendChild(link);
    const item = document.createElement("div");
    item.style.backgroundImage = `url('/assets/appImages/${url}.png')`;
    item.style.cursor = "pointer";
    /** THESE ARE SET SIZES WITHIN THE CSS FILE */
    item.className = `grid-item grid-item--width${width} grid-item--height${height}`;
    link.appendChild(item);
}