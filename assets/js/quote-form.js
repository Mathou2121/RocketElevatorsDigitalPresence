$(document).ready(function () {
    $('.building-style').hide();
    
    $('#building-type').change(function () {
        $('.building-style').hide();
        $('#'+$(this).val() + "1").show();
    })         
});


const standard = 7565;
const premium = 12345;
const excelium = 15400;


var resultOutput1 = document.getElementById("choice1");
var resultOutput2 = document.getElementById("choice2");
var resultOutput3 = document.getElementById("choice3");
var resultOutput4 = document.getElementById("choice4");
var resultOutput5 = document.getElementById("choice5");

var radiobutton1 = document.getElementById("radio1");
var radiobutton2 = document.getElementById("radio2");
var radiobutton3 = document.getElementById("radio3");

var building_type = document.getElementById("building-type");



function hello() {
    console.log(building_type.value)

    if (building_type.value === "residential") {
        console.log("residential")
       
    } else if (building_type === "commercial"){
        console.log("test")
}
}





function mainQuote() {
    
    if (building_type.value === "residential") {
        residentialCalculation();
        pricePerElevators();
        totalPriceElevators();
        instFee();
        finalPrice();
       
    } else if (building_type.value === "commercial"){
        pricePerElevators()
        commercialChoice();
        totalPriceElevators();
        instFee();
        finalPrice();
        
    } else if (building_type.value === "corporate") {
        corporateCalculation();
        pricePerElevators()
        totalPriceElevators();
        instFee();
        finalPrice();


    } else if (building_type.value === "hybrid") {
        hybridCalculation();
        pricePerElevators();
        totalPriceElevators();
        instFee();
        finalPrice();
        
    }    
}


totalPriceElevators();
instFee();


function commercialChoice() {
    
    // this takes the value of the input field in the quote
    var numElevators = document.getElementById("commercial-elevators").value;
    // the "value" of result is gonna = numElevators
    resultOutput1.value = numElevators;
    //return the result to the box
    return resultOutput1
        
}

function pricePerElevators() {
    if (radiobutton1.checked) {
        resultOutput2.value = standard
    } else if (radiobutton2.checked) {
        resultOutput2.value = premium
    } else if (radiobutton3.checked) {
        resultOutput2.value = excelium
    }
}


function totalPriceElevators() {
    resultOutput3.value = resultOutput1.value * resultOutput2.value;
    return resultOutput3;
}

function instFee() {
    if (radiobutton1.checked) {
        resultOutput4.value = (resultOutput3.value * 0.10);
        return resultOutput4;
    } else if (radiobutton2.checked) {
        resultOutput4.value = (resultOutput3.value * 0.13);
        return resultOutput4;
    } else if (radiobutton3.checked) {
        resultOutput4.value = (resultOutput3.value * 0.16);
        return resultOutput4;
    }
}
                                                                                     // TTTTTTTTTTTTTOOOOOOOOOOOOOOOOOOOO DDDDDDDDDDDDDOOOOOOOOOOOOOOOOOO

function finalTouch() {
    resultOutput1.value = resultOutput1.value.toFixed(2).replace('.',',') + "$"
    resultOutput2.value = resultOutput2.value.toFixed(2).replace('.',',') + "$"
    resultOutput3.value = resultOutput3.value.toFixed(2).replace('.',',') + "$"
    resultOutput4.value = resultOutput4.value.toFixed(2).replace('.',',') + "$"
    resultOutput5.value = resultOutput5.value.toFixed(2).replace('.',',') + "$"
}

function finalPrice() {
    var result1 = Number(resultOutput3.value);
    var result2 = Number(resultOutput4.value);
    
    resultOutput5.value = result1 + result2;
    return resultOutput5;
}

function clear() {                                                              // TTTTTTTTTTTTTOOOOOOOOOOOOOOOOOOOO DDDDDDDDDDDDDOOOOOOOOOOOOOOOOOO

}

function residentialCalculation() {
    var nbApartment = document.getElementById("numApartR");
    var nbFloors = document.getElementById("numFloorR");
    var nbBasement = document.getElementById("numBaseR");
    var avrgApartperFloor = nbApartment.value / nbFloors.value;
    var nbColumnStart = Math.ceil(avrgApartperFloor / 6);
    var nbColumnEnd = Math.ceil(nbFloors.value / 20);
    var nbElevators = nbColumnEnd * nbColumnStart;

    console.log(nbColumnStart);
    console.log(nbColumnEnd);
    resultOutput1.value = nbElevators;
}

function corporateCalculation() {
    var nbFloors = document.getElementById("corpfloors");
    var nbBasement = document.getElementById("corpbasements");
    var nbCorporations = document.getElementById("corpcomporations");
    var nbParkings = document.getElementById("corpparkings");
    var maxOccupancyPerFloor = document.getElementById("corpoccupancy");
    var nbAllFloors = Number(nbFloors.value) + Number(nbBasement.value)

   
    var totalNumberOfOccupant = nbAllFloors * maxOccupancyPerFloor.value;
    var nbElevators = Math.floor(totalNumberOfOccupant / 1000);
    var nbColumns = Math.ceil(nbAllFloors / 20);
    var nbElevatorPerColumn = Math.ceil(nbElevators / nbColumns);
    var totalNbElevators = Math.ceil(nbElevatorPerColumn * nbColumns);

    resultOutput1.value = totalNbElevators;
    return resultOutput1

}

function hybridCalculation() {
    var nbFloors = document.getElementById("hybridfloors");
    var nbBasement = document.getElementById("hybridbasements");
    var nbCorporations = document.getElementById("hybridcompagnies");
    var nbParkings = document.getElementById("hybridparkings");
    var maxOccupancyPerFloor = document.getElementById("hybridoccupancy");
    var nbAllFloors = Number(nbFloors.value) + Number(nbBasement.value)

   
    var totalNumberOfOccupant = nbAllFloors * maxOccupancyPerFloor.value;
    var nbElevators = Math.floor(totalNumberOfOccupant / 1000);
    var nbColumns = Math.ceil(nbAllFloors / 20);
    var nbElevatorPerColumn = Math.ceil(nbElevators / nbColumns);
    var totalNbElevators = Math.ceil(nbElevatorPerColumn * nbColumns);

    console.log(nbElevators)
    console.log(nbColumns)

    resultOutput1.value = totalNbElevators;
    return resultOutput1

}

