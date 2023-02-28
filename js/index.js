function validation() {
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("confirm_password").value;
    if (password1!=password2) {
        document.getElementById("spanconfirmpassword").innerHTML = "No password matched";
    }
    else {
        document.getElementById("spanconfirmpassword").innerHTML = "Password matched";
        return false;
    }
}