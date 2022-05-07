//идеята е да се правят обекти в UI meniger и от там ще се извикват функциите с исканията/user storitata
//obj.show() => показва резултатите от двете таблици + резултатите

class FrequencyDistributionManager {
  constructor() {}//no need for a constructor

  fromJsonToInt( jsondata ){      
    let intArr = new Array();
    let i = 0; 
      while(jsondata["Results"].Next != NULL){
        console.log(jsondata["Result"][i]);
        intArr[i] = jsondata["Result"][i];
        i++;
      }
    console.log(intArr);
    return intArr;
  }
      
  partition( items, left, right ) {
    //rem that left and right are pointers.
      
    let pivot = items[Math.floor((right + left) / 2)],
    i = left, //left pointer
    j = right; //right pointer

    while (i <= j) {
      //increment left pointer if the value is less than the pivot
      while (items[i] < pivot) {
        i++;
      }
    
      //decrement right pointer if the value is more than the pivot
      while (items[j] > pivot) {
        j--;
      }
    
      //else we swap.
      if (i <= j) {
        [items[i], items[j]] = [items[j], items[i]];
        i++;
       j--;
     }
    }
    //return the left pointer
    return i;
  }

  quickSort( items, left, right ) { //need first and last element 
    let index;
  
    if (items.length > 1) {
      index = partition(items, left, right); //get the left pointer returned
    
      if (left < index - 1) {
        //more elements on the left side
        quickSort(items, left, index - 1);
      }
    
      if (index < right) {
        //more elements on the right side
        quickSort(items, index, right);
      }
    }
  return items; //return the sorted array
  }
  //Оценки   || Абсолютна честота или Брой повторения || Относителна честота                           || 
  //2        ||  3 повторения                         || ( 3 повторения / брой на студентите ) * 100   ||   
  //3        ||  6 повторения                         || ( 6 повторения / брой на студентите ) * 100   ||
  //4        ||  12 повторения                        || ( 12 повторения / брой на студентите ) * 100  ||
  //5        ||  154 повторения                       || ( 154 повторения / брой на студентите ) * 100 ||
  //6        ||  30 повторения                        || ( 30 повторения / брой на студентите ) * 100  ||
  absoluteFrequency( intArr ){// колко ендакви и от какви са еднаквите 
    let absoluteFrequency = new Array(); //трябва да намеря повторенията 
    let i = 0;    
    let counter = 1;  
    let j = 0;
    for( i; i <= intArr.length; i++ ){//goes trought the arr of result 
      if( intArr[i] == intArr[i+1] ){//compaires the current and the next
        counter++; //if they are the same, add one to the result
      }else{ //if not
            absoluteFrequency[j] = counter;//the number of repeating is stored  
            j++; //we move to the next element of the arrey 
            counter = 1; //and we reset the counter of elements
      }
    }
    return absoluteFrequency; //then return the array of absolute frequency 
  }

  relativeFrequency( intArr, absoluteFrequency ){// относителна честота 
    let relativeFrequency = new Array; // масива с честотата 
    let numOfStudents = intArr.length; // трябват ни бройката на студентите, а те са същия брой като оценките 

    for( i = 0; i <= absoluteFrequency.length; i++  ){ // преминава през всяка абсолютна честота || 2; 3; 4; 5; 6;
      relativeFrequency[i] = ( absoluteFrequency[i] / numOfStudents ) * 100; // с формулата ( абсолютна честота / общ брой на студентите ) * 100 се изчислява относителната честота с процен
    }
    return relativeFrequency;
  }   

  CreateDataForTable(relativeFrequency, absoluteFrequency){
    var dataForTable = {
      tableData: []
    };
    for( i = 0; i < 6; i ++ ){

       let result = i+2;
       let rf = relativeFrequency[i];
       let af = absoluteFrequency[i];

      dataForTable.tableData.push({
        "Results" : result,
        "Relative Frequency" : rf,
        "Absolute Frequency" : af
      });

    }
    
    return dataForTable; // we have now json format ready for the table 
  }

  generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

      for( let key of data ){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
  }
  VisualiseTable(table, dataForTable){
     
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  VisualiseDiagram(){
    
  }

  
  ToScreen(){
    let obj = new FileManager(); // creating object from FileManager class
    let jsondata = obj.JsonGetterStudentResult();// so we can get the data

    let intArr = fromJsonToInt(jsondata);//the data is extracted to int arrey
    intArr = quickSort(intArr, 0, intArr.length - 1);// and sorted 
    console.log(intArr); 
    let aF = absoluteFrequency(intArr);
    console.log("Absolute Frequency: " + aF);//printing the arrey of absolute frequency 
    console.log(dataForTable);

    let table = document.querySelector("table");
    let data = Object.keys(dataForTable[0]);
    generateTableHead(table, data);
    VisualiseTable(table, dataForTable);
  }
}


