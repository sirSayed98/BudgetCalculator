class event {


    constructor(describtion, value, status) {
        this.describtion = describtion;
        this.value = value;


    }


}
/*
 definatins
 */
var mainButton, valuIn, describtionIN, operationSelector;
var income = [];
var i = 0;
var totalIncome=0;
var outcome = [];
var o = 0;
var totalOutcome=0;



/*selections */

function incomeEvent(val, describt) {
    income[i] = new event(describt, val);
    i++;
    totalIncome += val;
    console.log(totalIncome);
}
function outComeEvent(val, describt) {
    outcome[o] = new event(describt, - val);
    o++;
    totalOutcome -= val;
    console.log(totalOutcome);
}

function prepare() {


    var conv = document.querySelector('.add__value').value;
    valuIn = parseInt(conv, 10);
    console.log( typeof valuIn);
    describtionIN = document.querySelector('.add__description').value;
    operationSelector = document.querySelector('.add__type').selectedIndex;


}
function UpdateInterface(){

document.querySelector(".budget__income--value").textContent=totalIncome;
document.querySelector(".budget__expenses--value").textContent=totalOutcome;

document.querySelector(".budget__value").textContent=totalIncome+totalOutcome;

}
function clear(){

    document.querySelector('.add__value').value="";
    document.querySelector('.add__description').value="";


}

function newEvent() {


    prepare();

    if (operationSelector == 0) {

        incomeEvent(valuIn, describtionIN);
    }


    else {
        outComeEvent(valuIn, describtionIN);
    }
    clear();
    UpdateInterface();

}


/*main*/

mainButton = document.querySelector('.add__btn');



    mainButton.addEventListener("click", newEvent);



















