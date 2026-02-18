

document.getElementById('bonus-btn')
    .addEventListener('click', function(){
        const bonusCoupon = getValueFromInput('coupon');
        const currentBalance = getBalance();
        const newBalance = currentBalance + 120321;
        console.log(newBalance);
        if(bonusCoupon === '10031997'){
            alert('Add Bonus Amount');
            setBalance(newBalance);
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="Transaction-card p-5 bg-base-100">
            Add $120321 Success to your account at ${new Date()}
            </div>
        `;
        history.append(newHistory);
        }
    })