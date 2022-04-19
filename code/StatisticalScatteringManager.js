class StatisticalScatteringManager {

    // class constructor
    constructor() {
    }

    // example method
    CountLections() {
            let json = obj.ConvertToJSON();
            console.log(json);
			let newJson;
			let cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7, cnt8, cnt9, cnt10 = 0;
			for (let i = 0; i < json.length; i++) {
				switch(json[i]["Event context"]){
					case "File: Лекция 1: Въведение в програмиране за семантичен уеб":
						cnt1++;
						break;
					case "File: Лекция 2: Стандарт XML ":
						cnt2++;
						break;
					case "File: Лекция 3: Моделиране на информацията. Стандарти RDF и RDFS.":
						cnt3++;
						break;
					case "File: Лекция 4: Стандарт OWL":
						cnt4++;
						break;
					case "File: Лекция 5: Description Logics (DL). Ontology Reasoning.":
						cnt5++;
						break;
					case "File: Лекция 6: Проектиране на онтология":
						cnt6++;
						break;
					case "File: Лекция 7: Проектиране на онтология с Protégé":
						cnt7++;
						break;
					case "File: Лекция 8: Език за заявки SPARQL":
						cnt8++;
						break;
					case "File: Лекция 9: Програмиране за семантичен уеб":
						cnt9++;
						break;
					case "File: Лекция 10: Oracle Spatial and Graph Graph Overview":
						cnt10++;
						break;
				}
		    }
			newJson["Лекция 1"] = cnt1;
			newJson["Лекция 2"] = cnt2;
			newJson["Лекция 3"] = cnt3;
			newJson["Лекция 4"] = cnt4;
			newJson["Лекция 5"] = cnt5;
			newJson["Лекция 6"] = cnt6;
			newJson["Лекция 7"] = cnt7;
			newJson["Лекция 8"] = cnt8;
			newJson["Лекция 9"] = cnt9;
			newJson["Лекция 10"] = cnt10;
			console.log(newJson);
            return newJson;
    }
	SwingManager() {
		let min = Number.MIN_VALUE;
		let max = Number.MAX_VALUE;
		let json = newObj.CountLections();
		for(let i = 0; i < json.length; i++)
		{
			if(min<json[i]["Лекция"])
			{
				min = json[i]["Лекция"];
			}
			if(max>json[i]["Лекция"])
			{
				max = json[i]["Лекция"];
			}
		}
		return max-min;
	}
}
document.getElementById('button3').addEventListener("click", () => {
    let swing = newObj.SwingManager();
    console.log(swing);
});
var obj = new StatisticalAnalyser();
var newObj = new StatisticalScatteringManager();