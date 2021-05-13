$(document).ready(function () {
    $('.building-style').hide();
    
    $('#building-type').change(function () {
        $('.building-style').hide();
        $('#'+$(this).val() + "1").show();
        clearOutputFields();
    })         
});


const standard = 7565.00;
const premium = 12345.00;
const excelium = 15400.00;


var resultOutput1 = document.getElementById("choice1");
var resultOutput2 = document.getElementById("choice2");
var resultOutput3 = document.getElementById("choice3");
var resultOutput4 = document.getElementById("choice4");
var resultOutput5 = document.getElementById("choice5");

var radiobutton1 = document.getElementById("radio1");
var radiobutton2 = document.getElementById("radio2");
var radiobutton3 = document.getElementById("radio3");

var building_type = document.getElementById("building-type");

var arrayOfResults = [resultOutput1, resultOutput2, resultOutput3, resultOutput4, resultOutput5]







function mainQuote() {
    
    clearOutputFields();
    
    if (building_type.value === "residential") {
        residentialCalculation();
        pricePerElevators();
        totalPriceElevators();
        instFee();
        finalPrice();
        turnToFloat();
        beautify();
       
    } else if (building_type.value === "commercial"){
        pricePerElevators()
        commercialChoice();
        totalPriceElevators();
        instFee();
        finalPrice();
        turnToFloat();
        beautify();
    } else if (building_type.value === "corporate") {
        corporateCalculation();
        pricePerElevators()
        totalPriceElevators();
        instFee();
        finalPrice();
        turnToFloat();
        beautify();

    } else if (building_type.value === "hybrid") {
        hybridCalculation();
        pricePerElevators();
        totalPriceElevators();
        instFee();
        finalPrice();
        turnToFloat();
        beautify();
        
    }   
    
}


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


function finalPrice() {
    var result1 = Number(resultOutput3.value);
    var result2 = Number(resultOutput4.value);
    
    resultOutput5.value = result1 + result2;
    return resultOutput5;
}



function residentialCalculation() {
    var nbApartment = document.getElementById("numApartR");
    var nbFloors = document.getElementById("numFloorR");
    var nbBasement = document.getElementById("numBaseR");
    var avrgApartperFloor = nbApartment.value / nbFloors.value;
    var nbColumnStart = Math.ceil(avrgApartperFloor / 6.00);
    var nbColumnEnd = Math.ceil(nbFloors.value / 20.00);
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
    var nbElevators = Math.floor(totalNumberOfOccupant / 1000.00);
    var nbColumns = Math.ceil(nbAllFloors / 20.00);
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

function beautify() {
        resultOutput2.value = resultOutput2.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' $';
        resultOutput3.value = resultOutput3.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' $';
        resultOutput4.value = resultOutput4.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' $';
        resultOutput5.value = resultOutput5.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' $';
    
    
    
}





function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' $';
}



function clearOutputFields() {
    resultOutput1.value = "";
    resultOutput2.value = "";
    resultOutput3.value = "";
    resultOutput4.value = "";
    resultOutput5.value = "";
}






function turnToFloat() {
    res3 = Number(resultOutput3.value)
    res4 = Number(resultOutput4.value)
    res5 = Number(resultOutput5.value)

    decimal3 = res3.toFixed(2)
    decimal4 = res4.toFixed(2)
    decimal5 = res5.toFixed(2)

    almostThere3 = decimal3.toString();
    almostThere4 = decimal4.toString();
    almostThere5 = decimal5.toString();
    
    resultOutput3.value = almostThere3;
    resultOutput4.value = almostThere4;
    resultOutput5.value = almostThere5;
}