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
var delButton;
valuIn=0;

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
    icon.setAttribute('id', 'del-' + i);
    icon.setAttribute('onclick', 'deleteEvent(this)')

    btn.appendChild(icon);

    itemDel.appendChild(btn);
    itemtest.appendChild(itemDel);





    i++;
}
function outComeEvent(val, describt) {
    outcome[o] = new event(describt, - val);
    totalOutcome -= val;

    var arr1 = 0;
    arr1 = document.createElement('div');
    outcomeList.appendChild(arr1);
    arr1.classList.add('item', 'clearfix');
    arr1.setAttribute('id', 'outcome-' + o);

    var describtionDiv1 = document.createElement('div');
    describtionDiv1.classList.add('item__description');
    describtionDiv1.innerText = describtionIN;
    arr1.appendChild(describtionDiv1);

    var itemtest1 = document.createElement('div');
    itemtest1.classList.add('right');
    itemtest1.classList.add('clearfix');
    arr1.appendChild(itemtest1);
    var itemVal1 = document.createElement('div');
    itemVal1.classList.add('item__value');
    itemVal1.innerText = valuIn;

    itemtest1.appendChild(itemVal1);

    var itemDel1 = document.createElement('div');
    itemDel1.classList.add('item__delete');

    var btn1 = document.createElement('button');
    btn1.classList.add("item__delete--btn");
    var icon1 = document.createElement('i');
    icon1.classList.add('ion-ios-close-outline');
    icon1.setAttribute('id', 'del1-' + o);
    icon1.setAttribute('onclick', 'deleteEvent(this)')

    btn1.appendChild(icon1);

    itemDel1.appendChild(btn1);
    itemtest1.appendChild(itemDel1);





    o++;

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
if(isNaN(valuIn))
{
    alert('you have to insert value')
    prepare();
}

else if(describtionIN=='')
{
alert('you have to insert describtion');
prepare();

}
else{

    if (operationSelector == 0) {

        incomeEvent(valuIn, describtionIN);
    }


    else {
        outComeEvent(valuIn, describtionIN);
    }
    clear();
    UpdateInterface();
}

}

function deleteEvent(ele) {

    var id = ele.id;


    if (id.includes('del1')) {
        var demo = id.substr(5, 1);
        var demo2 = Number(demo);

        var element1 = document.getElementById('outcome-' + demo2);
        totalOutcome = totalOutcome - outcome[demo2].value;
        outcomeList.removeChild(element1);
        UpdateInterface();
    }
    else {
        var demo = id.substr(4, 1);
        var demo2 = Number(demo);

        var element = document.getElementById('income-' + demo2);
        totalIncome = totalIncome - income[demo2].value;
        incomeList.removeChild(element);
        UpdateInterface();
    }



}

/*main*/

mainButton = document.querySelector('.add__btn');



mainButton.addEventListener("click", newEvent);



















