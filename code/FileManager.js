class FileManager {

    constructor() {

    }

    ReadFromExcel() {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:"binary"});
            console.log(workbook);
            
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log(JSON.stringify(rowObject));
                document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
                temp = JSON.stringify(rowObject);
            });

            var blob = new Blob([temp], {type: "text/plain; charset=utf-8"});
            saveAs(blob, "testing.txt");

            let smth = JSON.parse(temp);
            console.log(smth[0].ID);
        }
    }

    ConvertToJSON() {

    }

    JsonGetter() {

    }

    WriteToJSON() {

    }
}

let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

var temp;

document.getElementById('button').addEventListener("click", () => {
    if(selectedFile) 
    {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString("test.xlsx");
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:"binary"});
            console.log(workbook);
            
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log(JSON.stringify(rowObject));
                document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
                temp = JSON.stringify(rowObject);
            });

            var blob = new Blob([temp], {type: "text/plain; charset=utf-8"});
            saveAs(blob, "testing.txt");

            let smth = JSON.parse(temp);
            console.log(smth[0].ID);
        }
    }
});
