const billInput = document.querySelector('.bill');
const preRegTipInput = document.querySelectorAll('.tip'); 
const customTipInput = document.querySelector('.custom');
const people = document.querySelector('.people');
const tipAmountDiv = document.getElementById('tip-amount');
const totalDiv = document.getElementById('total');

// bill input and tip input are read onChange and onKeyup
// tip input is converted to a percentage and multiplied with the bill to get the tip amount
// tip amount is added to bill to get total 
// total is divided by the number of people to get total per person
// tip amount is divided by number of people to get tip amount per person


// gets bill input on keyup
billInput.addEventListener('keyup', (e) => {
    bill = e.target.value;
    if (bill < 1) {
        bill = '';
    };
    return bill;
});
// gets bill input on keyup on change
billInput.addEventListener('change', (e) => {
    bill = e.target.value;
    if (bill < 1) {
        bill = '';
    };
    return bill;
});


// gets custom tip input on keyup
customTipInput.addEventListener('keyup', (e) => {
    custom = e.target.value;
    if (custom < 1) {
        custom = '';
    };
    return custom;
});
// gets custom tip input on change
customTipInput.addEventListener('change', (e) => {
    custom = e.target.value;
    if (custom < 1) {
        custom = '';
    };
    return custom;
});


// gets pre-registered tip percentages
preRegTipInput.forEach((percent) => {
    let preRegTipPercent = percent.getAttribute('value');
    percent.addEventListener('click', (e) => {
        custom = preRegTipPercent;
        console.log(preRegTipPercent);
        console.log(custom);
        calculateTotalPerPerson();
    });
});


// gets number of people on keyup
people.addEventListener('keyup', (e) => {
    numOfPeople = e.target.value;
    if (numOfPeople < 1) {
        numOfPeople = '';
    };
    console.log(numOfPeople);
    return numOfPeople;
});
// gets number of people on change
people.addEventListener('change', (e) => {
    numOfPeople = e.target.value;
    if (numOfPeople < 1) {
        numOfPeople = '';
    };
    return Number(numOfPeople);
});


// calculates total per person
const calculateTotalPerPerson = () => {
    let tipPercentage = custom/100;
    let tipAmount = tipPercentage * bill;
    let total = tipAmount + Number(bill);  
    let totalPerPerson = total/numOfPeople;
    totalDiv.innerText = `$${totalPerPerson.toFixed(2)}`;
    let tipAmountPerPerson = tipAmount/numOfPeople;
    tipAmountDiv.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
};

// CALCULATION ON EVENTS
// calculates onkeyup
billInput.addEventListener('keyup', (e) => {
    totalDiv.innerText = `$${bill}`;
    calculateTotalPerPerson();
});
// calculates onChange
billInput.addEventListener('change', () => {
    totalDiv.innerText = `$${bill}`;
    calculateTotalPerPerson();
});


// calculates onkeyup
customTipInput.addEventListener('keyup', (e) => {
    calculateTotalPerPerson();
});
// calculates onChange
customTipInput.addEventListener('change', (e) => {
    calculateTotalPerPerson();
});


// calculates onkeyup
people.addEventListener('keyup', (e) => {
    calculateTotalPerPerson();
});
// calculates onChange
people.addEventListener('change', (e) => {
    calculateTotalPerPerson();
});
