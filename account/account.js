const userString = localStorage.getItem("users");
const userObject = JSON.parse(userString);
const currentUsername = localStorage.getItem("username");
let obj = {};
for (let i = 0; i < userObject.length; i++){
    const {firstname, lastname, username, password} = userObject[i];
    if (currentUsername === username){
        obj = {firstname, lastname, username, password};
        break;
    }
}

const {firstname, lastname, username, password} = obj;

document.getElementById("firstname").value = firstname
document.getElementById("lastname").value = lastname
document.getElementById("username").value = username
document.getElementById("password").value = password
