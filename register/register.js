function pindahKeLoginPage(){
    window.location.href = "../login/"
}

function createNewUser(){
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let usersString = localStorage.getItem('users');

    if (!firstname || !lastname || !username || !password){
        swal("Sign Up Failed", "Mohon lengkapi semua data field yang ada");
    } else {
        const user = {
            firstname,
            lastname,
            username,
            password
        }
    
        let users;
        if (!usersString){
            users = [];
        } else {
            users = JSON.parse(usersString);
        }

        let isThereUsername = false;
        for (let i = 0; i < users.length; i++){
            const usernameDatabase = users[i].username;
            if (usernameDatabase === username) {
                isThereUsername = true;
                break;
            }
        }
    
        if (!isThereUsername){
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            pindahKeLoginPage();
        } else {
            swal("Sign Up Failed", "Username yang Anda masukkan sudah ada, silahkan login");
        }
        
    }

    
}