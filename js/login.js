function login() {

    let loginButton = document.getElementById("loginButton");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    loginButton.addEventListener('click', (event) => {

        let emailValue = email.value;
        let passwordValue = password.value;

        const apiResponse = performeLogin()

        apiResponse.then(data => {
            
            console.log(data);

            const { user } = data;
            handleLogin(user, {
                email: emailValue,
                password: passwordValue
            })
        })
    })
}

async function performeLogin() {

    let result;
    return await fetch('../BDjson.json').then(response => response.json()).then(data => {
        return data;
    })
}

function handleLogin(apiResponse, userInput){
    const { password, email } = apiResponse;
    const userInputPassword = userInput.password;
    const userInputEmail = userInput.email;

    if (userInputEmail === email && userInputPassword === password) {
        window.location.href = 'https://loginscreeninokri.netlify.app/';
    }else {
        alert('Este usuário não é reconhecido');
    }
}

window.onload = login