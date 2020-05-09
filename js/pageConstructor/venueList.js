const indPageTitle = document.createElement("div");
indPageTitle.className = "title";
document.getElementById("welcome").appendChild(indPageTitle);

const h2Title = document.createElement("h2");
h2Title.innerText = "Venue List";
indPageTitle.appendChild(h2Title);

const byLine = document.createElement("span");
byLine.className = "byLine";
byLine.innerText = "List of UK Venues and Information.";
indPageTitle.appendChild(byLine);

const content = document.createElement("div");
content.className = "content";
document.getElementById("welcome").appendChild(content);

const download = document.createElement("div");
download.id = "download";
download.innerText ="DOWNLOAD COPY";
content.appendChild(download);

let i = 0;

while (i < 2) {
    const additional = document.createElement("br");
    content.appendChild(additional);
    i++
}

const exampleTable = document.createElement("div");
exampleTable.id = "venueTable";
content.appendChild(exampleTable);


/** Load from venueList.js (tabulator) */
loadTable();
