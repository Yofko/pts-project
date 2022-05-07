class CentralTendencyManager {

    // class constructor
    constructor() {
    }

    // example method
    CountOccurrences(){
        data = sa.ConvertToJSON();

        let arr = new Array(10).fill(0);
        let map = new Map();

        // loop through all entries
        for (let i = 0; i < data.length; i++) {

            // count each occurrence
            switch (data[i]['Event context']) {
                case "File: Лекция 1: Въведение в програмиране за семантичен уеб":
                    arr[0] += 1;
                    break;
                case 'File: Лекция 2: Стандарт XML ':
                    arr[1] += 1;
                    break;
                case 'File: Лекция 3: Моделиране на информацията. Стандарти RDF и RDFS.':
                    arr[2] += 1;
                    break;
                case 'File: Лекция 4: Стандарт OWL':
                    arr[3] += 1;
                    break;
                case 'File: Лекция 5: Description Logics (DL). Ontology Reasoning.':
                    arr[4] += 1;
                    break;
                case 'File: Лекция 6: Проектиране на онтология':
                    arr[5] += 1;
                    break;
                case 'File: Лекция 7: Проектиране на онтология с Protégé':
                    arr[6] += 1;
                    break;
                case 'File: Лекция 8: Език за заявки SPARQL':
                    arr[7] += 1;
                    break;
                case 'File: Лекция 9: Програмиране за семантичен уеб':
                    arr[8] += 1;
                    break;
                case 'File: Лекция 10: Oracle Spatial and Graph Graph Overview':
                    arr[9] += 1;
                    break;
            }
        }

        map.set("File: Лекция 1: Въведение в програмиране за семантичен уеб", arr[0]);
        map.set("File: Лекция 2: Стандарт XML ", arr[1]);
        map.set("File: Лекция 3: Моделиране на информацията. Стандарти RDF и RDFS.", arr[2]);
        map.set("File: Лекция 4: Стандарт OWL", arr[3]);
        map.set("File: Лекция 5: Description Logics (DL). Ontology Reasoning.", arr[4]);
        map.set("File: Лекция 6: Проектиране на онтология", arr[5]);
        map.set("File: Лекция 7: Проектиране на онтология с Protégé", arr[6]);
        map.set("File: Лекция 8: Език за заявки SPARQL", arr[7]);
        map.set("File: Лекция 9: Програмиране за семантичен уеб", arr[8]);
        map.set("File: Лекция 10: Oracle Spatial and Graph Graph Overview", arr[9]);

        return map;
    }

    /**
     * Detects no modality
     * If there is more than one modality - returns the first one it detects
     */
    CalculateModality() {

        let mapOfLectures = centralTendMan.CountOccurrences();

        let biggestNum   = 0;
        let lectureTitle = "";
        let noModalityCounter = 0;

        // Check if there even is a modality
        for (const entry of mapOfLectures.entries()) {
            if (biggestNum < entry[1]) {
                biggestNum = entry[1];
            }
            else if (biggestNum == entry[1]) {
                noModalityCounter += 1;
            }
        }

        if ((noModalityCounter+1) == mapOfLectures.size) {
            lectureTitle = "No modality in this sequence!";
        }
        // There is a modality
        else {
            biggestNum = 0;
            // searches for the most viewed lecture
            for (const entry of mapOfLectures.entries()) {
                // unimodality
                if (biggestNum < entry[1]) {
                    biggestNum   = entry[1];
                    lectureTitle = entry[0];
                }
                // TODO: bimodality && multimodality
                // 1. finds the biggest number
                // 2. searches if it exists multiple times
                // 3. displays each one
            }
        }

        console.log("============= MODALITY =============");
        console.log("Title: " + lectureTitle + "\t" + biggestNum);
    }

    CalculateAverage() {
        let mapOfLectures = centralTendMan.CountOccurrences();

        let total = 0;

        // calculate the total number of viewed lectures
        for (const value of mapOfLectures.values()) {
            total += value;
        }

        // average of all
        console.log("============= AVERAGE =============");
        console.log("Total: " + total);
        console.log("Average: " + (total/mapOfLectures.size));
    }

    CalculateMedian() {
        let mapOfLectures = centralTendMan.CountOccurrences();

        // convert the values into an array
        let occurrencesArray = [...mapOfLectures.values()];
        
        // sort the newly made array
        for (let i = 0; i < occurrencesArray.length; i++) {
            for (let j = 0; j < occurrencesArray.length - 1 - i; j++) {
                if (occurrencesArray[j] > occurrencesArray[j+1]) {
                    let temp = occurrencesArray[j];
                    occurrencesArray[j] = occurrencesArray[j+1];
                    occurrencesArray[j+1] = temp;
                }
            }
        }
        console.log(occurrencesArray);

        console.log("============= MEDIAN =============");
        // Check if the number of entries is odd
        if (occurrencesArray.length % 2 != 0) {
            console.log(occurrencesArray[occurrencesArray.length/2]);
        }
        // The number of entries is even
        else {
            // check if the middle two are equal
            if (occurrencesArray[(occurrencesArray.length/2)-1] == occurrencesArray[occurrencesArray.length/2]) {
                let counter = 0;
                let nDivByTwo = occurrencesArray.length/2;
                let lowerBound = 0;
                let upperBound = 0;
                let h = 0;
                let preceedingClass = 0;

                let upperIndex = -1;
                let lowerIndex = -1;

                for (let i = 0; i < occurrencesArray.length; i++) {
                    if (occurrencesArray[i] == occurrencesArray[(occurrencesArray.length/2)-1]) {
                        counter++;
                        if (lowerIndex < 0) {
                            lowerIndex = i-1;
                        }
                        console.log("counter: " + counter);
                    }
                    else {
                        if (lowerIndex >= 0 && upperIndex < 0) {
                            upperIndex = i;
                        }
                        if (-1 == lowerIndex) {
                            preceedingClass++;
                        }
                    }
                }
                console.log("lowerIndex: " + lowerIndex);
                console.log("upperIndex: " + upperIndex);

                console.log("occurrencesArray[lowerIndex]: ", occurrencesArray[lowerIndex]);
                console.log("occurrencesArray[upperIndex]: ", occurrencesArray[upperIndex]);

                
                // Special fromula
                lowerBound = (occurrencesArray[lowerIndex] + occurrencesArray[lowerIndex+1]) / 2;
                upperBound = (occurrencesArray[upperIndex-1] + occurrencesArray[upperIndex]) / 2;
                
                h = upperBound - lowerBound;

                console.log("lowerBound: " + lowerBound);
                console.log("upperBound: " + upperBound);
                console.log("h: " + h);

                let res = lowerBound + ((nDivByTwo-preceedingClass)/counter)*h;
                console.log("Res: " + res);
            }
            // The middle two are different
            else {
                console.log((
                                (occurrencesArray[(occurrencesArray.length/2)-1])+
                                (occurrencesArray[occurrencesArray.length/2])
                            )/2);
            }
        }
    }
}

var sa = new StatisticalAnalyser();
// var centralTendMan = new CentralTendencyManager();

var data;
// document.getElementById('emchoButton3').addEventListener("click", () => {
//     centralTendMan.CalculateModality();
//     centralTendMan.CalculateAverage();
//     centralTendMan.CalculateMedian();
// });