class Distribution {

    // class constructor
    constructor() {
        data = new Map(JSON.parse(sessionStorage.getItem("Map")));
        array = JSON.parse(sessionStorage.getItem('Array'));
        console.log(array);

        var innerTable = document.getElementById("distribution");
  
        // creates a <table> element and a <tbody> element
        var i_tbl = document.createElement("table");
        i_tbl.className = ("customers");
        var i_tblBody = document.createElement("tbody");
        var i_tblHead = document.createElement("thead");
    
        // ------------------------------------------------------------------
        var rowHead = document.createElement("tr");
        var cellHead1 = document.createElement("td");
        var cellHead2 = document.createElement("td");
        var cellHead3 = document.createElement("td");
        cellHead1.appendChild(document.createTextNode("Student ID"));
        cellHead2.appendChild(document.createTextNode("Uploaded Files"));
        cellHead3.appendChild(document.createTextNode("Relative"));
        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        i_tblHead.appendChild(rowHead);
        // ------------------------------------------------------------------
        
        let tempCount = 0;
        for (let entry of data.entries()) {
            // creates a table row
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");
            
            cell1.appendChild(document.createTextNode(entry[0]));
            cell2.appendChild(document.createTextNode(entry[1]));
            cell3.appendChild(document.createTextNode(array["array"][tempCount++]));

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);

            i_tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        i_tbl.appendChild(i_tblHead);
        i_tbl.appendChild(i_tblBody);

        // appends <table> into <body>
        innerTable.appendChild(i_tbl);

        // sets the border attribute of tbl to 2;
        i_tbl.setAttribute("border", "2");

    }


}

var raw = new Distribution();

var data;
var array;
