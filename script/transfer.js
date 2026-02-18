

document.getElementById('transfer-btn')
    .addEventListener('click', function(){
        const tranferNumber = getValueFromInput('transfer-number');
        if(tranferNumber.length !== 11){
            alert('Invalid Number');
            return;
        }
        const transferAmount = getValueFromInput('transfer-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance - Number(transferAmount);
        console.log(newBalance);
        if(newBalance < 0 ){
            alert('Invalid Amount');
            return;
        }
        const transferPin = getValueFromInput('transfer-pin');
        if( transferPin === '1234'){
            alert(`Transfer Successful at ${new Date()}`);
            setBalance(newBalance);
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="Transaction-card p-5 bg-base-100">
            Transfer $${transferAmount} Success to ${tranferNumber} at ${new Date()}
            </div>
        `;
        history.append(newHistory);
        }
        else{
        alert('Invalid Pin');
        return;
    }
})