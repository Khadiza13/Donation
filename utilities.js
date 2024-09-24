function getinputbyId(id){
    const inputNumber=parseFloat(document.getElementById(id).value);
    return inputNumber;
}

function getinputbyText(id){
    const inputText=parseFloat(document.getElementById(id).innerText);
    return inputText;
}

function showfield(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('btn-history')
.addEventListener('click', function () {
  showfield('history-section');
})

document.getElementById('btn-donation')
.addEventListener('click', function () {
  showfield('donation-section');
})