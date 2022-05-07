class Frequency {

    // class constructor
    constructor() {
        data = JSON.parse(sessionStorage.getItem("frequency"));

        var innerTable = document.getElementById("frequency");
  
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
        cellHead1.appendChild(document.createTextNode("Lecture"));
        cellHead2.appendChild(document.createTextNode("Absolute Frequency"));
        cellHead3.appendChild(document.createTextNode("Relative Frequency"));
        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        i_tblHead.appendChild(rowHead);
        // ------------------------------------------------------------------
        
        for (let i=0;i< data[0]["absolute"].length;i++) {
            // creates a table row
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");
            let name = "Лекция " + (i + 1);
            cell1.appendChild(document.createTextNode(name));
            cell2.appendChild(document.createTextNode(data[0]["absolute"][i][name]));
            cell3.appendChild(document.createTextNode(data[1]["relative"][i]));

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

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
               text: "Frequency Distribution"
            }, 
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"%\"",
                indexLabel: "{label} {y}",
                dataPoints: [
                    {y: data[1]["relative"][0], label: "Лекция 1 - "},
                    {y: data[1]["relative"][1], label: "Лекция 2 - "},
                    {y: data[1]["relative"][2], label: "Лекция 3 - "},
                    {y: data[1]["relative"][3], label: "Лекция 4 - "},
                    {y: data[1]["relative"][4], label: "Лекция 5 - "},
                    {y: data[1]["relative"][5], label: "Лекция 6 - "},
                    {y: data[1]["relative"][6], label: "Лекция 7 - "},
                    {y: data[1]["relative"][7], label: "Лекция 8 - "},
                    {y: data[1]["relative"][8], label: "Лекция 9 - "},
                    {y: data[1]["relative"][9], label: "Лекция 10 - "}]
            }]
        });
        chart.render();
    }

}

var rawObj = new Frequency();

var data;

