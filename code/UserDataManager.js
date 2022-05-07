function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

var centralTendMan = new CentralTendencyManager();
var correlate = new CorrelationAnalysisManager();
var newObj = new StatisticalScatteringManager();

document.getElementById('emchoButton2').addEventListener("click", () => {
    window.open("RawLogUI.html");
});

document.getElementById('emchoButton4').addEventListener("click", () => {
    correlate.CalculateInnerFrequencyDistribution();
    correlate.CalculateLinearCorrelation();
});

document.getElementById('emchoButton3').addEventListener("click", () => {
    centralTendMan.CalculateModality();
    centralTendMan.CalculateAverage();
    centralTendMan.CalculateMedian();
});

document.getElementById('emchoButton5').addEventListener("click", () => {
	console.log("YOOOOOOOOVANKO");
	let swing = newObj.SwingManager();
    let dispersion = newObj.DispersionManager();
	console.log("SWING : " + swing);
	console.log("DISPERSION : " + dispersion);
    console.log("DEVIATION : " + Math.sqrt(dispersion));
});