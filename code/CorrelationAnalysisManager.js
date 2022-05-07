class CorrelationAnalysisManager {
    
    CalculateInnerFrequencyDistribution() {
        // How many files has uploaded each student

        /* 
         * --------------------------------------------
         * Get all students' IDs from the results file 
         * --------------------------------------------
        */
        IDHolder = sa.ConvertToJSONStudentGrades();
        data = sa.ConvertToJSONUploadedFiles();

        let relativeFrequencyArr = [IDHolder.length];
        
        // A map to store the pairs ID | NumberOfUploadedFiles
        map = new Map();

        // Set the keys of the map to each student ID
        // Set the values to 0
        for (let i = 0; i < IDHolder.length; i++) {
            map.set(String(IDHolder[i].ID), 0);
        }
        
        // Iterate over the student activities
        // Each time an existing in the map ID is encountered - increment
        for (let i = 0; i < data.length; i++) {
            if (map.has(data[i].Description.substring(18, 22))) {
                map.set((data[i].Description.substring(18, 22)), (map.get(data[i].Description.substring(18, 22))+1));
            }
        }

        // The map is the first two columns of the frequency table
        console.log("====== MAP ======");
        console.log(map);

        // Calculate the relative frequency
        let tempCount = 0;
        for (let value of map.values()) {
            relativeFrequencyArr[tempCount++] = (value/data.length)*100;
        }

        console.log(relativeFrequencyArr);
        
    }

    CalculateLinearCorrelation() {
        
        // Calculate the coefficient through the formula

        // Try to represent the results on a XY coordinate system (like in Wiki)
        
        let n = IDHolder.length;

        let EsumOfProductsOfEachVar = 0;
        let EsumOfIndividualVarX = 0;
        let EsumOfIndividualVarY = 0;
        let EsumOfIndividualVarXPowered = 0;
        let EsumOfIndividualVarYPowered = 0;
        let productsOfEachVar = 0;
        let aboveCalculated = 0;
        let belowCalculated = 0;
        let inSqrtCalculations = 0;
        let criticalPointZeroFive = 0.196;
        let criticalPointZeroOne = 0.254;
        let stringRepresentationOne = "";
        let stringRepresentationTwo = "";
        let finalRes = 0;

        // Calculate only the sum of products
        let i = 0;
        for (const value of map.values()) {
            productsOfEachVar = IDHolder[i].Result*value;
            console.log(productsOfEachVar);
            EsumOfProductsOfEachVar = EsumOfProductsOfEachVar + productsOfEachVar;
            i++;
        }
        console.log(EsumOfProductsOfEachVar);

        // Calculate the stand alone sum of both variables in the equation
        i = 0;
        for (const value of map.values()) {
            EsumOfIndividualVarX = EsumOfIndividualVarX + IDHolder[i].Result;
            EsumOfIndividualVarY = EsumOfIndividualVarY + value;
            i++;
        }

        aboveCalculated = (n*EsumOfProductsOfEachVar) - (EsumOfIndividualVarX*EsumOfIndividualVarY);

        i = 0;
        for (const value of map.values()) {
            EsumOfIndividualVarXPowered = EsumOfIndividualVarXPowered + Math.pow(IDHolder[i].Result, 2);
            EsumOfIndividualVarYPowered = EsumOfIndividualVarYPowered + Math.pow(value, 2);
            i++;
        }
        inSqrtCalculations = ((n*EsumOfIndividualVarXPowered) - Math.pow(EsumOfIndividualVarX, 2)) *
                                (n*EsumOfIndividualVarYPowered - Math.pow(EsumOfIndividualVarY, 2));

        belowCalculated = Math.sqrt(inSqrtCalculations);
        finalRes = aboveCalculated / belowCalculated;

        // Statistical significance
        if ((n-2) > 100) {
            // Check if the coefficient is >= than the critical for point zero five
            if (finalRes >= criticalPointZeroFive) {
                stringRepresentationOne = "The correlation is statistically significant for level of significance 0.05";
            }
            else {
                stringRepresentationOne = "The correlation is NOT statistically significant for level of significance 0.05";
            }

            // Check if the coefficient is >= than the critical for point zero one
            if (finalRes >= criticalPointZeroOne) {
                stringRepresentationTwo = "The correlation is statistically significant for level of significance 0.01";
            }
            else {
                stringRepresentationTwo = "The correlation is NOT statistically significant for level of significance 0.01";
            }
        }

        console.log(finalRes);
    }

}

var sa = new StatisticalAnalyser();
var correlate = new CorrelationAnalysisManager();

var data;
var IDHolder;
var map;

// document.getElementById('emchoButton4').addEventListener("click", () => {
//     correlate.CalculateInnerFrequencyDistribution();
//     correlate.CalculateLinearCorrelation();
// });