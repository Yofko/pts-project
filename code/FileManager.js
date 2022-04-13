class FileManager {

    constructor() {
    }

    ReadFromExcel() {
        let fileReader = new FileReader();

        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let temp;
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:"binary"});
            console.log(workbook);
            
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log(JSON.stringify(rowObject));
                document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
                temp = JSON.stringify(rowObject);
            });

            let smth = JSON.parse(temp);
            
            let writeToFile = "BEGINNING_OF_FILE";

            for (let i = 0; i < smth.length; i++) {
                if (smth[i]["Event context"].includes("File: Лекция") && smth[i]["Component"].includes("File"))  {
                    console.log(smth[i]);
                    writeToFile += JSON.stringify(smth[i]);
                }
            }

            blob = new Blob([writeToFile], {type: "text/plain; charset=utf-8"});
            saveAs(blob, "testing.txt");    
        }
    }
    JsonGetter() {
        return blob;
    }
    
    WriteToJSON() {
    }
}

let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];

});

var obj = new FileManager(); 
document.getElementById('button').addEventListener("click", () => {
    obj.ReadFromExcel();
    console.log(obj.JsonGetter());
});
var blob;
