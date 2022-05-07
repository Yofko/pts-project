function pageScroll() {
    window.scrollBy(0,15);
    scrolldelay = setTimeout(pageScroll,0.05);
}

var centralTendMan = new CentralTendencyManager();
var correlate = new CorrelationAnalysisManager();
var newObj = new StatisticalScatteringManager();
var freqDist = new FrequencyDistributionManager();

document.getElementById('emchoButton2').addEventListener("click", () => {
    window.open("RawLogUI.html");
});

document.getElementById('emchoButton4').addEventListener("click", () => {
    var distributionTable = correlate.CalculateInnerFrequencyDistribution();
    var correlation = correlate.CalculateLinearCorrelation();

    document.getElementById("outerPre").innerHTML = "";

    generate_table_ca(distributionTable, correlation);
});

document.getElementById('emchoButton3').addEventListener("click", () => {
    var modality = centralTendMan.CalculateModality();
    var average = centralTendMan.CalculateAverage();
    var median = centralTendMan.CalculateMedian();

    document.getElementById("outerPre").innerHTML = "";

    generate_table_ct(modality, average, median);
});

document.getElementById('emchoButton5').addEventListener("click", () => {
	var swing = newObj.SwingManager();
    var dispersion = newObj.DispersionManager();
	console.log("SWING : " + swing);
	console.log("DISPERSION : " + dispersion);
    console.log("DEVIATION : " + Math.sqrt(dispersion));

    document.getElementById("outerPre").innerHTML = "";

    generate_table_ss(swing, dispersion);

});

// Listens for the button to be pressed
document.getElementById('emchoButton6').addEventListener("click", () => {
    // Calculates data
    var frequency = freqDist.FrequencyCalculation();

    // Puts the calculated data in the sessionStorage
    sessionStorage.setItem("frequency", JSON.stringify(frequency));

    // Opens the new tab
    window.open("FrequencyUI.html");
});

/**
 * 
 * @param {*} swing 
 * @param {*} dispersion 
 * 
 * FUNCTION
 * 
 */
function generate_table_ss(swing, dispersion) {
    // ------------------------------------------------------------------
    var buttonSwing = document.createElement('button');
    buttonSwing.type = 'button';
    buttonSwing.innerHTML = 'SWING';
    buttonSwing.className = 'button button1';
    buttonSwing.id = 'button1';
    buttonSwing.onclick = function() {
        document.getElementById("swing").innerHTML = "SWING : " + JSON.stringify(swing,undefined,4);
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var buttonDispersion = document.createElement('button');
    buttonDispersion.type = 'button';
    buttonDispersion.innerHTML = 'DISPERSION';
    buttonDispersion.className = 'button button1';
    buttonDispersion.id = 'button2';
    buttonDispersion.onclick = function() {
        document.getElementById("dispersion").innerHTML = "DISPERSION : " + JSON.stringify(dispersion,undefined,4);
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var buttonDeviation = document.createElement('button');
    buttonDeviation.type = 'button';
    buttonDeviation.innerHTML = 'DEVIATION';
    buttonDeviation.className = 'button button1';
    buttonDeviation.id = 'button3';
    buttonDeviation.onclick = function() {
        document.getElementById("deviation").innerHTML = "DEVIATION : " + JSON.stringify(Math.sqrt(dispersion),undefined,4);
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var buttonAll = document.createElement('button');
    buttonAll.type = 'button';
    buttonAll.innerHTML = 'SHOW ALL';
    buttonAll.className = 'button button1';
    buttonAll.id = 'button4';
    buttonAll.onclick = function() {
        document.getElementById("all").innerHTML = "SWING : " + JSON.stringify(swing,undefined,4);
        document.getElementById("all").innerHTML += "\n";
        document.getElementById("all").innerHTML += "DISPERSION : " + JSON.stringify(dispersion,undefined,4);
        document.getElementById("all").innerHTML += "\n";
        document.getElementById("all").innerHTML += "DEVIATION : " + JSON.stringify(Math.sqrt(dispersion),undefined,4);
    }
    // ------------------------------------------------------------------

    // get the reference for the body
    var outerPre = document.getElementById("outerPre");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.className = "customers";
    var tblBody = document.createElement("tbody");
  
    // ------------------------------------------------------------------
    var row1 = document.createElement("tr");
    var cell11 = document.createElement("td");
    var cell12 = document.createElement("td");
    cell12.id = "swing";
    cell11.appendChild(buttonSwing);
    row1.appendChild(cell11);
    row1.appendChild(cell12);
    tblBody.appendChild(row1);
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var row2 = document.createElement("tr");
    var cell21 = document.createElement("td");
    var cell22 = document.createElement("td");
    cell22.id = "dispersion";
    cell21.appendChild(buttonDispersion);
    row2.appendChild(cell21);
    row2.appendChild(cell22);
    tblBody.appendChild(row2);
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var row3 = document.createElement("tr");
    var cell31 = document.createElement("td");
    var cell32 = document.createElement("td");
    cell32.id = "deviation";
    cell31.appendChild(buttonDeviation);
    row3.appendChild(cell31);
    row3.appendChild(cell32);
    tblBody.appendChild(row3);
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var row4 = document.createElement("tr");
    var cell41 = document.createElement("td");
    var cell42 = document.createElement("td");
    cell42.id = "all";
    cell41.appendChild(buttonAll);
    row4.appendChild(cell41);
    row4.appendChild(cell42);
    tblBody.appendChild(row4);
    // ------------------------------------------------------------------
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends <table> into <body>
    outerPre.appendChild(tbl);

    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}

/**
 * 
 * @param {*} modality 
 * @param {*} average 
 * @param {*} median 
 * 
 * FUNCTION
 */
function generate_table_ct(modality, average, median) {
    // ------------------------------------------------------------------
    var buttonModality = document.createElement('button');
    buttonModality.type = 'button';
    buttonModality.innerHTML = 'MODALITY';
    buttonModality.className = 'button button1';
    buttonModality.id = 'button1';
    buttonModality.onclick = function() {
        document.getElementById("modality").innerHTML = "MODALITY : " + JSON.stringify(modality[0]['title'],undefined,4);
        document.getElementById("modality").innerHTML += "\n";
        document.getElementById("modality").innerHTML += JSON.stringify(modality[0]['number'],undefined,4);
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var buttonMedian = document.createElement('button');
    buttonMedian.type = 'button';
    buttonMedian.innerHTML = 'MEDIAN';
    buttonMedian.className = 'button button1';
    buttonMedian.id = 'button2';
    buttonMedian.onclick = function() {
        document.getElementById("median").innerHTML = "MEDIAN : " + JSON.stringify(median,undefined,4);
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var buttonAverage = document.createElement('button');
    buttonAverage.type = 'button';
    buttonAverage.innerHTML = 'AVERAGE';
    buttonAverage.className = 'button button1';
    buttonAverage.id = 'button3';
    buttonAverage.onclick = function() {
        document.getElementById("average").innerHTML = "AVERAGE : " + JSON.stringify(average,undefined,4);
    }
    // ------------------------------------------------------------------

    // get the reference for the body
    var outerPre = document.getElementById("outerPre");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.className = "customers";
    var tblBody = document.createElement("tbody");
  
    // ------------------------------------------------------------------
    var row1 = document.createElement("tr");
    var cell11 = document.createElement("td");
    var cell12 = document.createElement("td");
    cell12.id = "modality";
    cell11.appendChild(buttonModality);
    row1.appendChild(cell11);
    row1.appendChild(cell12);
    tblBody.appendChild(row1);
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var row2 = document.createElement("tr");
    var cell21 = document.createElement("td");
    var cell22 = document.createElement("td");
    cell22.id = "median";
    cell21.appendChild(buttonMedian);
    row2.appendChild(cell21);
    row2.appendChild(cell22);
    tblBody.appendChild(row2);
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var row3 = document.createElement("tr");
    var cell31 = document.createElement("td");
    var cell32 = document.createElement("td");
    cell32.id = "average";
    cell31.appendChild(buttonAverage);
    row3.appendChild(cell31);
    row3.appendChild(cell32);
    tblBody.appendChild(row3);
    // ------------------------------------------------------------------

  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends <table> into <body>
    outerPre.appendChild(tbl);

    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }

  /**
 * 
 * @param {*} modality 
 * @param {*} average 
 * @param {*} median 
 * 
 * FUNCTION
 */
function generate_table_ca(distributionTable,correlation) {
    // ------------------------------------------------------------------
    var buttonCorrelation = document.createElement('button');
    buttonCorrelation.type = 'button';
    buttonCorrelation.innerHTML = 'CORRELATION';
    buttonCorrelation.className = 'button button1';
    buttonCorrelation.id = 'button1';
    buttonCorrelation.onclick = function() {
        document.getElementById("correlation").innerHTML =  JSON.stringify(correlation[0]['significanceOne'],undefined,4);
        document.getElementById("correlation").innerHTML += "\n";
        document.getElementById("correlation").innerHTML += JSON.stringify(correlation[0]['significanceTwo'],undefined,4);
        document.getElementById("correlation").innerHTML += "\n";
        document.getElementById("correlation").innerHTML += JSON.stringify(correlation[0]['result'],undefined,4);
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var buttonDistribution = document.createElement('button');
    buttonDistribution.type = 'button';
    buttonDistribution.innerHTML = 'DISTRIBUTION';
    buttonDistribution.className = 'button button1';
    buttonDistribution.id = 'button2';

    buttonDistribution.onclick = function() {
        sessionStorage.setItem("Map", JSON.stringify(Array.from(distributionTable[0]["map"].entries())));
        sessionStorage.setItem("Array", JSON.stringify(distributionTable[1]));
        window.open("DistributionUI.html");
    }
    // ------------------------------------------------------------------

    // get the reference for the body
    var outerPre = document.getElementById("outerPre");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.className = "customers";
    var tblBody = document.createElement("tbody");
  
    // ------------------------------------------------------------------
    var row1 = document.createElement("tr");
    var cell11 = document.createElement("td");
    var cell12 = document.createElement("td");
    cell12.id = "correlation";
    cell11.appendChild(buttonCorrelation);
    row1.appendChild(cell11);
    row1.appendChild(cell12);
    tblBody.appendChild(row1);
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    var row2 = document.createElement("tr");
    var cell21 = document.createElement("td");
    var cell22 = document.createElement("td");
    cell22.id = "distribution";
    cell21.appendChild(buttonDistribution);
    row2.appendChild(cell21);
    row2.appendChild(cell22);
    tblBody.appendChild(row2);
    // ------------------------------------------------------------------
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends <table> into <body>
    outerPre.appendChild(tbl);

    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }