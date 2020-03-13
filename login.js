var login_field, passwd_field, err_field;
var passwords = {
        "C++" : "Stroustroup",
        "Python" : "v Rossum",
        "C" : "Ritchie"
};

window.onload = function()
{
    login_field = document.getElementById("login");
    password_field = document.getElementById("password");
    err_field = document.getElementById("entry_error");
    err_field.style.visibility = "hidden";
}


function register()
{ 
    var login = login_field.value, passwd = password_field.value;
    if (passwords[login] == passwd) {
        window.location = "chat.html" + "#" + login;
    } else {
        err_field.style.visibility = "visible";
    }
    return false;
}
