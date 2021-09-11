
function func1() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    localStorage.setItem("name1",name)
    localStorage.setItem("email1",email)
    localStorage.setItem("pass1",pass)
}
