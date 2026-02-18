

document.getElementById('bill-pay-btn')
    .addEventListener('click', function(){
        const billSelect = getValueFromInput('bill-select');
        if(billSelect === 'Enter Organization name'){
                alert('Please select a organization');
                return;
            }
        const billPayNumber = getValueFromInput('bill-pay-number');
        if(billPayNumber.length !== 11){
            alert('Invalid Account Number');
            return;
        }
        const amount = getValueFromInput('bill-pay-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance - Number(amount);
        const pin = getValueFromInput('bill-pay-pin');
        if( pin === '1234'){
            alert(`Pay bill successful from ${billPayNumber} at ${new Date()}`);
            setBalance(newBalance);
        //1- history-container ke anbo
        const history = document.getElementById('history-container');
        //2- new div create
        const newHistory = document.createElement('div');
        //3- new div a inner html add
        newHistory.innerHTML = `
            <div class="Transaction-card p-5 bg-base-100">
            Add Money Success to ${billSelect}, account number ${billPayNumber} at ${new Date()}
            </div>
        `;
        //4- history container e new div append korbo
        history.append(newHistory);
    } else{
        alert('Invalid Pin');
        return;
    }
    })