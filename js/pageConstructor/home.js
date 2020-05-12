const content = document.createElement("div");
content.className = "content";
document.getElementById("welcome").appendChild(content);





var center = document.createElement("center");
content.appendChild(center);


var gridMasonry = document.createElement("div");
gridMasonry.className = "grid";
gridMasonry.setAttribute("data-masonry", '{ "columnWidth": 10, "itemSelector": ".grid-item" }');
center.appendChild(gridMasonry);

addItem("2", "3", "venueList");
addItem("3", "3", "totalSeater");
addItem("2", "3", "contractExplorer");
addItem("3", "3", "marketingPlan");
addItem('2', "3", "theatreCastingToolkit");
addItem("2", "3", "budgetExplorer");
document.getElementById("theatreCastingToolkit").href = "https://www.theatrecastingtoolkit.org/";
document.getElementById("theatreCastingToolkit").target = "_blank";
addItem("3", "3", "stageOne");
document.getElementById("stageOne").href = "https://www.stageone.uk.com/";
document.getElementById("stageOne").target = "_blank";


function addItem(width, height, url) {
    var link = document.createElement("a");
    link.style.cursor = "pointer";
    link.id = `${url}`;
    link.href = `/${url}`;
    gridMasonry.appendChild(link);

    var item = document.createElement("div");
    item.style.cursor = "pointer";
    item.className = `grid-item grid-item--width${width} grid-item--height${height}`;
    link.appendChild(item);

    var image = document.createElement("img");
    image.src = `/assets/appImages/${url}.png`;
    item.appendChild(image);
}