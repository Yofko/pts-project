class FrequencyDistributionManager {

  // class constructor
  constructor() {
  }

  // example method
  CountLections() {
    // Get data from FileManager
    let json = freq.ConvertToJSON();
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let cnt4 = 0;
    let cnt5 = 0;
    let cnt6 = 0;
    let cnt7 = 0;
    let cnt8 = 0;
    let cnt9 = 0;
    let cnt10 = 0;

    // Count all the lectures
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
    let newJson = [{"Лекция 1":cnt1},
    {"Лекция 2":cnt2},
    {"Лекция 3":cnt3},
    {"Лекция 4":cnt4},
    {"Лекция 5":cnt5},
    {"Лекция 6":cnt6},
    {"Лекция 7":cnt7},
    {"Лекция 8":cnt8},
    {"Лекция 9":cnt9},
    {"Лекция 10":cnt10}
    ]
    // newJson == absolute
    return newJson;
  }
FrequencyCalculation() {
  let lectionCount = 0;
  let jsonInner = newObj.CountLections();
  let arr = new Array(10).fill(0);

  // sum of all views
  for(let i = 0; i < jsonInner.length; i++)
  {
    lectionCount += jsonInner[i]["Лекция " + (i + 1)];
    console.log(lectionCount);
  }

  // relative
  for(let i = 0; i < jsonInner.length; i++)
  {
    arr[i] = jsonInner[i]["Лекция " + (i + 1)]/lectionCount*100;
  }
  return [{"absolute":jsonInner},
          {"relative":arr}];
}

}


var freq = new FrequencyDistributionManager();