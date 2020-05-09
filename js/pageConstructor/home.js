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
addItem("3", "3", "marketingPlan")

function addItem(width, height, url) {
    var link = document.createElement("a");
    link.href = `/${url}`;
    gridMasonry.appendChild(link);

    var item = document.createElement("div");
    item.className = `grid-item grid-item--width${width} grid-item--height${height}`;
    link.appendChild(item);

    var image = document.createElement("img");
    image.src = `/assets/appImages/${url}.png`;
    item.appendChild(image);
}