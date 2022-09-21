const depositeButton = document.getElementById('deposite-button');
depositeButton.addEventListener('click' , function(){
    const depositeTotal = document.getElementById('deposite-total')
    const depositeTotalText = depositeTotal.innerText;
    const depositeTotalNumber = parseFloat(depositeTotalText);

    const depositeInput = document.getElementById('deposite-input');
    const depositeInputText = depositeInput.value;

    const depositeInputNumber = parseFloat(depositeInputText);
    depositeTotal.innerText = depositeTotalNumber + depositeInputNumber


    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber + depositeInputNumber


    depositeInput.value = '' ;

})

const withdrowButton = document.getElementById('withdrow-button');

withdrowButton.addEventListener('click' , function(){
    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const withdrowTotalNumber = parseFloat(withdrowTotalText);

    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowInputText = withdrowInput.value;
    const withdrowInputNumber = parseFloat(withdrowInputText);
    withdrowTotal.innerText =  withdrowTotalNumber + withdrowInputNumber

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber - withdrowInputNumber


    withdrowInput.value = '' ;
    // console.log(withdrowInputNumber );
})