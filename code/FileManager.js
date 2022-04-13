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

//var fm = new FileManager();
//fm.ReadFromExcel();


//var fm = new FileManager();
//fm.ReadFromExcel();

var temp;

document.getElementById('button').addEventListener("click", () => {
    if(selectedFile) 
    {
        let fileReader = new FileReader();

        // let fileName = "test.xlsx";
        // let text_blob = new Blob([fileName], {
        //     type: "text/plain; charset=utf-8"
        // });
        fileReader.readAsBinaryString(selectedFile);



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


            let smth = JSON.parse(temp);
            
            let writeToFile = "BEGINNING_OF_FILE";

            for (let i = 0; i < smth.length; i++) {
                if (smth[i]["Event context"].includes("Лекция")) {
                    console.log(smth[i]);
                    writeToFile += JSON.stringify(smth[i]);
                }
            }

            var blob = new Blob([writeToFile], {type: "text/plain; charset=utf-8"});
            saveAs(blob, "testing.txt");
        }
    }

});
/*
          var blob = new Blob([temp], {type: "text/plain; charset=utf-8"});
            saveAs(blob, "testing.txt");
            let smth = JSON.parse(temp);
            console.log(smth[0].ID);
*/
