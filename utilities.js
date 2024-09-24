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

// Toggle effect

document.getElementById('btn-history')
.addEventListener('click', function (e) {
  showfield('history-section');
  document.getElementById('btn-history').classList.add('bg-[#B4F461]')
  document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')
})

document.getElementById('btn-donation')
.addEventListener('click', function () {
  showfield('donation-section');
  document.getElementById('btn-donation').classList.add('bg-[#B4F461]')
  document.getElementById('btn-history').classList.remove('bg-[#B4F461]')
})