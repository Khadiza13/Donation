document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    const amount=getinputbyId('donateval');
    const balance=getinputbyText('personal-balance');
    const totdonateval=getinputbyText('donation');
    if(isNaN(amount) || amount>balance || amount==""){
        alert('Invalid input');
        return;
    }
    document.getElementById('donation').innerText=amount+totdonateval;
    const newbalance=balance-amount;
    document.getElementById('personal-balance').innerText=newbalance;
    // history upadate
    const name=document.getElementById('donate-name').innerText;
    const date=new Date();
    const div=document.createElement('div');
    div.innerHTML=`
    <h2 class="text-fontMain font-bold">${amount} Taka is ${name}</h2>
        <p>Date: ${date}</p>
    `
    document.getElementById('history').appendChild(div);
})

