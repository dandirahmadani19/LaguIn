const usersString = localStorage.getItem('users');
const users = JSON.parse(usersString);

function prosesLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let firstname = '';
    let lastname = '';

    if (!username || !password) {
        swal("Login Failed", "Semua field harus diisi");
    } else {
        let isUserName = false;
        let isPassword = false;
        for (let i = 0; i < users.length; i++){
            if (username === users[i].username){
                isUserName = true;
            }
            if (password === users[i].password){
                isPassword = true;
            }
        }
        if (isUserName && isPassword){
            window.location.href = 'homepage/';
            
            localStorage.setItem("username", username);
        } else {
            swal("Login Failed", "Username atau password salah");
        }
    }
}

function pindahKeSignUpPage(){
    window.location.href = 'register/';
}
