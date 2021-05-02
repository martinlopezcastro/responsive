
function login() {
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    if (name == "martin" && password == "123") {
        alert("hello, welcome")
    } else {
        alert("hello, bye")
    }
}