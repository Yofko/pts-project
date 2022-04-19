class Emo {

    // class constructor
    constructor() {
    }

    // example method
    CalculateSomething(){
        data = sa.ConvertToJSON();

        console.log("=========================================");
        console.log(data[0].Description);
    }
}

var sa = new StatisticalAnalyser();
var emo = new Emo();

var data;
document.getElementById('button2').addEventListener("click", () => {
    emo.CalculateSomething();
});