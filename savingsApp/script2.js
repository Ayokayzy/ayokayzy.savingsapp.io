const login = document.getElementById("login");



const loginUser = (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const errMsg = document.getElementById("err-msg");

    let user = localStorage.getItem(name.value);
    if (password.value === user){
        localStorage.setItem("user", password.value)
        window.location = 'app.html';
    }else {
        name.classList.add("err")
        password.classList.add("err")
        errMsg.innerHTML = "Enter a valid user"    
    }
}





login.addEventListener("click", loginUser);