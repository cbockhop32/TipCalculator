const billAmt = document.getElementById('bill-input'),
    serviceInput = document.getElementById('service'),
    peopleInput = document.getElementById('people'),
    calculateBtn = document.getElementById('btn-calculate'),
    tipDiv = document.querySelector('.tip-result');



function calculateTip() {
    const bill = billAmt.value;
    const service = serviceInput.value;
    const people = peopleInput.value;


   const tipAmt = (bill * service) / people;
   
   console.log(bill,service,people);
  
    addTipToDOM(tipAmt.toFixed(2));
  
}

function addTipToDOM(tip) {
    tipDiv.innerHTML = `Tip is $${tip} per person`
}








// Event Listeners

calculateBtn.addEventListener('click', e => calculateTip())