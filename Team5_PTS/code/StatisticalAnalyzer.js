class StatisticalAnalyser {

    // class constructor
    constructor() {
    }

    // example method
    ConvertToJSON() {
            let json = JSON.parse(obj.JsonGetter());
            console.log(json);
            return json;
    }
	
	ConvertToJSONUploadedFiles() {
            let json = JSON.parse(obj.JsonGetterUploadedFiles());
            console.log(json);
            return json;
    }
	
	ConvertToJSONStudentGrades() {
            let json = JSON.parse(obj.JsonGetterStudentGrades());
            console.log(json);
            return json;
    }
}
var obj = new FileManager();