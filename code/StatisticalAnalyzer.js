class StatisticalAnalyser {

    // class constructor
    constructor() {
    }

    // example method
    ConvertToJSON() {
        // document.getElementById('button2').addEventListener("click", () => {
            let json = JSON.parse(obj.JsonGetter());
            console.log(json);
            return json;
        // });
    }
}
var obj = new FileManager();