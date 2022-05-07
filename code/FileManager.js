class FileManager {

    constructor() {
        let selectedFile;
		let selectedFile2;
        console.log(window.XLSX);

		document.getElementById('input').addEventListener("change", (event) => {
			numOfFiles = event.target.files.length;
			if (1 < numOfFiles) {
				selectedFile = event.target.files[0];
				selectedFile2 = event.target.files[1];
			}
			else {
				selectedFile = event.target.files[0];
			}
		});

		document.getElementById('emchoButton1').addEventListener("click", () => {
			if (1 < numOfFiles) {
				this.ReadFromExcel(selectedFile);
				this.ReadFromExcel(selectedFile2);
			}
			else {
				this.ReadFromExcel(selectedFile);
			}

			document.getElementById("emchoButton2").disabled = false;
			document.getElementById("emchoButton3").disabled = false;
			document.getElementById("emchoButton4").disabled = false;
			document.getElementById("emchoButton5").disabled = false;
			document.getElementById("emchoButton6").disabled = false;
		});

    }

    ReadFromExcel(selectedFile) {
        let fileReader = new FileReader();

        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let temp;
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:"binary"});
            console.log(workbook);
            
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                temp = JSON.stringify(rowObject);
            });

            let smth = JSON.parse(temp);

			if(selectedFile["name"].includes("Logs_Course A_StudentsActivities.xlsx"))
			{
				for (let i = 0; i < smth.length; i++) {
					if (smth[i]["Event context"].includes("File: Лекция") && smth[i]["Component"].includes("File"))  {
						writeToFile += JSON.stringify(smth[i]);
						writeToFile += ",";
					}
					if (smth[i]["Event name"].includes("A file has been uploaded."))  {
						uploadedFiles += JSON.stringify(smth[i]);
						uploadedFiles += ",";
					}
				}
			}
			if(selectedFile["name"].includes("Course A_StudentsResults.xlsx"))
			{
				for (let i = 0; i < smth.length; i++) {
					studentGrades += JSON.stringify(smth[i]);
					studentGrades += ",";
				}
			}
			if(selectedFile["name"].includes("Logs_Course A_StudentsActivities.xlsx"))
			{
				uploadedFiles = uploadedFiles.slice(0, uploadedFiles.length-1);
				uploadedFiles = "[" +uploadedFiles +"]";
				writeToFile = writeToFile.slice(0, writeToFile.length-1);
				writeToFile = "[" +writeToFile +"]";
			}
			if(selectedFile["name"].includes("Course A_StudentsResults.xlsx"))
			{
				studentGrades = studentGrades.slice(0, studentGrades.length-1);
				studentGrades = "[" +studentGrades +"]";
				console.log(studentGrades);
			}
			
			// Save data to sessionStorage
			sessionStorage.setItem('Log', writeToFile);
			sessionStorage.setItem('Grades', studentGrades);
			sessionStorage.setItem('Uploaded', uploadedFiles);
        }
    }
    JsonGetter() {
        return writeToFile;
    }
	
	JsonGetterUploadedFiles() {
        return uploadedFiles;
    }
	
	JsonGetterStudentGrades() {
        return studentGrades;
    }
    
    WriteToJSON() {
    }
}

var writeToFile = "";
var uploadedFiles = "";
var studentGrades = "";
var numOfFiles = 0;