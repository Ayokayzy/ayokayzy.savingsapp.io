const button = document.getElementById("submit");
let inputs = document.querySelectorAll(".input");

const confirmAllFields = () => {
    const errMsg = document.getElementById("err-msg")
    let count = 0
    inputs.forEach(input => {
        if (input.value === "") {
            input.classList.add("err")
            count += 1
        }else {
            input.classList.remove("err")
        }
    })
    if (count <= 0) {
        console.log('success');
        inputs.forEach(input => {
            input.classList.remove("err")
        })
        return true
    } else {
        errMsg.innerHTML = "Fill all areas"
        return false
    }
}

const getFullName = () => {
    let fullName
    inputs.forEach(input => {
        if (input.name === "fullname") {
            fullName = input.value
        }
    })
    return fullName
}

const getUserName = () => {
    let userName
    inputs.forEach(input => {
        if (input.name === "username") {
            userName = input.value
        }
    })
    return userName
}

const getPassword = () => {
    let password
    inputs.forEach(input => {
        if (input.name === "password") {
            password = input.value
        }
    })
    return password
}


const getAcctBal = () => {
    const bal = 100000
    return bal
}

const confrimNameAndPassword = () => {
    let user = localStorage.getItem(getUserName())
    const errMsg = document.getElementById("err-msg")
    if (user) {
        errMsg.innerHTML = "user already exists, try again."
        inputs.forEach(input => {
            input.classList.add("err")
        })
    } else {
        localStorage.setItem(getUserName(), getPassword())
        localStorage.setItem(getPassword(), getFullName())
        localStorage.setItem(getFullName(), getAcctBal())
        localStorage.setItem(getPassword()+"_goal", 0.0)
        localStorage.setItem(getPassword()+"_flex", 0.0)
        window.location = 'success.html';
    }
}

const confirmReg = (event) => {
    event.preventDefault();
    if (confirmAllFields()) {
        confrimNameAndPassword()
    }
}

button.addEventListener("click", confirmReg);