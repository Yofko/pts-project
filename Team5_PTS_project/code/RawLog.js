class RawLog {

    // class constructor
    constructor() {
        data = JSON.parse(sessionStorage.getItem('Log'));
        grades = JSON.parse(sessionStorage.getItem('Grades'));
        uploaded = JSON.parse(sessionStorage.getItem('Uploaded'));

        for (let i = 0; i < data.length; i++) {
            if (document.getElementById("jsondata")) document.getElementById("jsondata").innerHTML += JSON.stringify(data[i],undefined,4);
            document.getElementById("jsondata").innerHTML += "\n";
        }
        for (let i = 0; i < grades.length; i++) {
            document.getElementById("jsondata1").innerHTML += JSON.stringify(grades[i],undefined,4);
            document.getElementById("jsondata1").innerHTML += "\n";
        }
        for (let i = 0; i < grades.length; i++) {
            document.getElementById("jsondata2").innerHTML += JSON.stringify(uploaded[i],undefined,4);
            document.getElementById("jsondata2").innerHTML += "\n";
        }
    }

    BuildRawLog() {        
    }
}

var raw = new RawLog();

var data;
var grades;
var uploaded;