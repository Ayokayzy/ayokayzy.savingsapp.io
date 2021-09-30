class UserProfile {
    constructor(userName, acctBalance, flexBal, goalBal) {
        this.userName = userName;
        this.acctBalance = Number(acctBalance);
        this.flexBal = Number(flexBal);
        this.goalBal = goalBal
    }

    itroduce = () => {
        console.log(`my name is ${this.userName} and i have ${this.acctBalance}, my flexible balance is ${this.flexBal} and i've saved ${this.goalBal} so far`)
    }

    myName = () => {
        return this.userName
    }

    myAcctBalance = () => {
        return Number(this.acctBalance)
    }

    myGoalBal = () => {
        return this.goalBal
    }

    myFlexBal = () => {
        return Number(this.flexBal)
    }

    deposit = (amount) => {
        let newBal = Number(this.acctBalance) + amount
        return newBal;
    }

    withdraw = (amount) => {
        return this.acctBalance -= amount
    }

    flexDepo = (amount) => {
        this.flexBal += amount
        return this.flexBal
    }
}

let profile = localStorage.getItem("user")

let uName = localStorage.getItem(profile)

let bal = localStorage.getItem(uName)

let flex = localStorage.getItem(profile + "_flex")
let goal = localStorage.getItem(profile + "_goal")

const user = new UserProfile(uName, bal, flex, goal)

let userName = document.getElementById("user-name")
let acctBalance = document.getElementById("acct-bal")
let flexBal = document.getElementById("flex-bal")
let goalBal = document.getElementById("goal-bal")

userName.innerHTML = "Hello " + user.myName()
acctBalance.innerHTML = "N " + user.myAcctBalance()
flexBal.innerHTML = "N " + user.myFlexBal()
goalBal.innerHTML = "N " + user.myGoalBal()

const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");



const depositFund = () => {
    let depoAmount = Number(document.getElementById("depo-fund").value);
    localStorage.setItem(user.myName(), user.deposit(depoAmount))
    window.location = 'app.html';
}

const withdrawFund = () => {
    let withdrawAmount = document.getElementById("withdraw-fund").value;
    localStorage.setItem(user.myName(), user.withdraw(withdrawAmount))
    window.location = 'app.html';
}


// flex
let flexSave = document.getElementById("flex-save")
let reload = document.getElementById("reload")



const flexCredit = () => {
    let flexAmount = document.getElementById("flex-amount").value;
    let amount = Number(flexAmount)
    // credit flex account
    localStorage.setItem(profile + "_flex", user.flexDepo(amount));
    
    // debit acct bal
    localStorage.setItem(user.myName(), user.withdraw(amount));
    
    let flexBalance = document.getElementById("flex-balance");
    flexBalance.innerHTML = "N " + localStorage.getItem(profile + "_flex")

    console.log(amount);
};

const getInterval = () => {
    let intervals = document.getElementById("time-range");
    let value = intervals.options[intervals.selectedIndex].value
    let result;
    switch (value) {
        case "daily":
            result = 1000;
            break;
        case "weekly":
            result = 5000;
            break;
        case "monthly":
            result = 10000;
            break;
        case "annualy":
            result = 20000;
            break;
        default: "set your interval for saving"
    }
    return result
}


const flexApp = () => {
    let myVal = setInterval(flexCredit, getInterval())
}

const reloadPage = () => {
    window.location = 'app.html';
}


// goal
const save = document.getElementById("save");

const getNumOfDays = () => {
    let date1 = document.getElementById("date-one").value;
    let date2 = document.getElementById("date-two").value;

    let date11 = new Date(date1);
    let date22 = new Date(date2);

    let diffInTime = Math.abs(date11.getTime() - date22.getTime());
    let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

    return diffInDays
}

const getAmountToSave = () => {
    let amountToSave = document.getElementById("amount").value;
    return amountToSave
}

const mySavings = () => {
    const savings = document.getElementById("savings")
    let savingsPerDay = Math.round(getAmountToSave() / getNumOfDays());
    savings.innerHTML = " " + savingsPerDay + " naira for " + getNumOfDays() + " days"
}




reload.addEventListener("click", reloadPage)
flexSave.addEventListener("click", flexApp)
save.addEventListener("click", mySavings);
deposit.addEventListener("click", depositFund)
withdraw.addEventListener("click", withdrawFund)




// localStorage.setItem(user.myName(), 100000)
// localStorage.setItem(profile + "_flex", 0.0)

