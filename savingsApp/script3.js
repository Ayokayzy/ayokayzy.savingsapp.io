const save = document.getElementById("save");


const getNumOfDays = () => {
    let date1 =  document.getElementById("date-one").value;
    let date2 = document.getElementById("date-two").value;
    const savings = document.getElementById("savings")

    let date11 = new Date(date1);
    let date22 = new Date(date2);

    let diffInTime = Math.abs(date11.getTime() - date22.getTime());
    let diffInDays = Math.round(diffInTime / (1000*3600*24));

    return diffInDays
}

const getAmountToSave = () => {
    let amountToSave = document.getElementById("amount").value;
    return amountToSave
}

const mySavings = () => {    
    let savingsPerDay = Math.round(getAmountToSave() / getNumOfDays());
    savings.innerHTML = " " + savingsPerDay + " naira for " + getNumOfDays() + " days"
}

save.addEventListener("click", mySavings);