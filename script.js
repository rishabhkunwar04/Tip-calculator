//selecting ids of input
const inp = document.querySelectorAll("#bill,#tip,#no-of-people");

inp.forEach(function(s){
    s.addEventListener("input",calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);


//meathod
function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);

    //calculation total tip and total amount
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    
    //calculating tip and amount per person
    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);
    

   // displaying results on Web page 
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}
calculateTip();