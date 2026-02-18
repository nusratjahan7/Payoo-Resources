
document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1. get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length !== 11){
        alert('Invalid Number');
        return;
    }
    // 2. get the amount
    const cashoutAmount = getValueFromInput('cashout-amount');
    // 3. get the current balance
    const currentBalance = getBalance();
    // 4. calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    const pin = getValueFromInput('cashout-pin');
    if( pin === '1234'){
        alert('Cashout successful');
        setBalance(newBalance);
        //1- history-container ke anbo
        const history = document.getElementById('history-container');
        //2- new div create
        const newHistory = document.createElement('div');
        //3- new div a inner html add
        newHistory.innerHTML = `
            <div class="Transaction-card p-5 bg-base-100">
            Cashout $${cashoutAmount} Success to ${cashoutNumber} at ${new Date()}
            </div>
        `;
        //4- history container e new div append korbo
        history.append(newHistory);
    }
    else{
        alert('Invalid Pin');
        return;
    }
})


// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // 1. get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     // 2. get the amount, validate , convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);    

//     // 3. get the current balance, validate, convert to number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4. calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     console.log(newBalance);
//     if (newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     console.log(newBalance);
    
//     // 5. get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if( pin === '1234'){
//         // 5-1 true:: show an alert > set balance
//         alert('Cashout successful');
//         console.log(newBalance);
//         balanceElement.innerHTML = newBalance;
//     }
//     else{
//         // 5-2 false:: show an error alert > return
//         alert('Invalid Pin');
//         return;
//     }
// })