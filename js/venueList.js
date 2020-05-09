function loadTable() {
    //define some sample data
    var tabledata = [
        {id: 1, name:"Aylesbury Waterside Theatre", city:"Aylesbury", capacity:"", grossPotential:"", company:"ATG", likes:"Musicals, Plays", },
        {id: 2, name:"Birmingham Alexandra Theatre", city:"Birmingham", capacity:"", grossPotential:"", company:"ATG", likes:"Musicals, Plays", }
    ];

    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator("#venueTable", {
        data: tabledata, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[
            {title:"Venue", field:"name", hozAlign:"left", sorter:"string"},
            {title:"City", field:"city", hozAlign:"left", sorter:"string"},
            {title:"Capacity", field:"capacity", hozAlign:"left", sorter:"number"},
            {title:"Gross Potential", field:"grossPotential", hozAlign:"left", sorter:"number",},
            {title:"Company", field:"company", hozAlign:"left"},
            {title:"Genres", field:"likes", hozAlign:"left"},
        ],
    });

    var element = document.getElementById("download");
    element.style.cursor = "pointer";
    element.style.float = "left";

    document.getElementById("download").onclick = () => {
            if (confirm("Would you like to download venueData.xlsx from Theatre Tools?")) {
                table.download("xlsx", "venueData.xlsx"); 
                console.log("User accepted download...")
            } else {
                console.warn("User declined download.")
            }    
    }
}