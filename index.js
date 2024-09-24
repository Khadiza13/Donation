// Card-1
document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    const amount=getinputbyId('donateval');
    const balance=getinputbyText('personal-balance');
    const totdonateval=getinputbyText('donation');
    if(isNaN(amount) || amount>balance || amount==""){
        alert('Invalid input');
        document.getElementById('donateval').value=' ';
        return;
    }
    else {
    document.getElementById('my_modal_5').showModal(); 
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
    document.getElementById('donateval').value=' ';
    }
})

//Card-2
document.getElementById('btn-2').addEventListener('click',function(e){
    e.preventDefault();
    const amount=getinputbyId('donateval2');
    const balance=getinputbyText('personal-balance');
    const totdonateval=getinputbyText('donation2');
    if(isNaN(amount) || amount>balance || amount==""){
        alert('Invalid input');
        document.getElementById('donateval2').value=' ';
        return;
    }
    else{
    document.getElementById('my_modal_5').showModal(); 
    document.getElementById('donation2').innerText=amount+totdonateval;
    const newbalance=balance-amount;
    document.getElementById('personal-balance').innerText=newbalance;
    
    // history upadate
    const name=document.getElementById('donate-name2').innerText;
    const date=new Date();
    const div=document.createElement('div');
    div.innerHTML=`
    <h2 class="text-fontMain font-bold">${amount} Taka is ${name}</h2>
        <p>Date: ${date}</p>
    `
    document.getElementById('history').appendChild(div);
    document.getElementById('donateval2').value=' ';
    }
})

//Card-3
document.getElementById('btn-3').addEventListener('click',function(e){
    e.preventDefault();
    const amount=getinputbyId('donateval3');
    const balance=getinputbyText('personal-balance');
    const totdonateval=getinputbyText('donation3');
    if(isNaN(amount) || amount>balance || amount==""){
        alert('Invalid input');
        document.getElementById('donateval3').value=' ';
        return;
    }
    else{
    document.getElementById('my_modal_5').showModal(); 
    document.getElementById('donation3').innerText=amount+totdonateval;
    const newbalance=balance-amount;
    document.getElementById('personal-balance').innerText=newbalance;
    
    // history upadate
    const name=document.getElementById('donate-name3').innerText;
    const date=new Date();
    const div=document.createElement('div');
    div.innerHTML=`
    <h2 class="text-fontMain font-bold">${amount} Taka is ${name}</h2>
        <p>Date: ${date}</p>
    `
    document.getElementById('history').appendChild(div);
    document.getElementById('donateval3').value=' ';
    }
    
})

