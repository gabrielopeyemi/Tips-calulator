// hide the tip amount on load
document.getElementById('calculateTip').onclick = function(){
    var onSale = true
        billAmount = document.getElementById('billAmount').value,
        billSharing = document.getElementById('billSharing').value,
        totalPeople = document.getElementById('totalPeople').value,
        totalTipHere = document.getElementById('totalTipHere').value;
    
    tip = (billAmount * billSharing);
    finalTip = (tip / totalPeople);
    document.getElementById("totalTipHere").innerHTML = finalTip;
}
