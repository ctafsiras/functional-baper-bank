function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputValue = inputField.value;
    const inputToFloat = parseFloat(inputValue);
    inputField.value = '';
    return inputToFloat;
}
function updateTotal(total, amount) {
    const totalAmount = document.getElementById(total);
    const totalToFloat = parseFloat(totalAmount.innerText) + amount;
    totalAmount.innerText = totalToFloat;
}
function updateBalance(amount, isAdd){
    const totalBalance = document.getElementById('total-balance');
    let updateBalance;
    if(isAdd==true){
         updateBalance = parseFloat(totalBalance.innerText) + amount;
    }else{
         updateBalance = parseFloat(totalBalance.innerText) - amount;
    }
    totalBalance.innerText = updateBalance;
}
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-amount');
    updateTotal('total-deposit', depositAmount);
updateBalance(depositAmount, true);
    
});
//// withdrawaaaaaaaaaaaaa
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-amount');
    updateTotal('total-withdraw', withdrawAmount)
    updateBalance(withdrawAmount, false);
})