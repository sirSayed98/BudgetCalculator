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
var totalIncome = 0;
var outcome = [];
var o = 0;
var totalOutcome = 0;
var incomeList;
var outcomeList;
var incomeListArr = [];
var outcomeListArr = [];

/*selections */

function incomeEvent(val, describt) {
    income[i] = new event(describt, val);
    totalIncome += val;

    var arr = 0;
    arr = document.createElement('div');
    incomeList.appendChild(arr);
    arr.classList.add('item', 'clearfix');
    arr.setAttribute('id', 'income-' + i);

    var describtionDiv = document.createElement('div');
    describtionDiv.classList.add('item__description');
    describtionDiv.innerText = describtionIN;
    arr.appendChild(describtionDiv);

    var itemtest = document.createElement('div');
    itemtest.classList.add('right');
    itemtest.classList.add('clearfix');
    arr.appendChild(itemtest);
    var itemVal = document.createElement('div');
    itemVal.classList.add('item__value');
    itemVal.innerText = valuIn;

    itemtest.appendChild(itemVal);

    var itemDel = document.createElement('div');
    itemDel.classList.add('item__delete');

    var btn = document.createElement('button');
    btn.classList.add("item__delete--btn");
    var icon = document.createElement('i');
    icon.classList.add('ion-ios-close-outline');
    btn.appendChild(icon);

    itemDel.appendChild(btn);
    itemtest.appendChild(itemDel);





    i++;
}
function outComeEvent(val, describt) {
    outcome[o] = new event(describt, - val);
    o++;
    totalOutcome -= val;

}

function prepare() {


    var conv = document.querySelector('.add__value').value;
    valuIn = parseInt(conv, 10);

    describtionIN = document.querySelector('.add__description').value;
    operationSelector = document.querySelector('.add__type').selectedIndex;

    incomeList = document.querySelector('.income__list');
    outcomeList = document.querySelector('.expenses__list');



}
function UpdateInterface() {

    document.querySelector(".budget__income--value").textContent = totalIncome;
    document.querySelector(".budget__expenses--value").textContent = totalOutcome;

    document.querySelector(".budget__value").textContent = totalIncome + totalOutcome;

}
function clear() {

    document.querySelector('.add__value').value = "";
    document.querySelector('.add__description').value = "";


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


















