document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registration-login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let phonenumber = document.getElementById("phonenumber").value;
        let time = document.getElementById("time").value;

        console.log("Tên Khách Hàng:", username);
        console.log("Email:", email);
        console.log("Số Điện Thoại:", phonenumber);
        console.log("Thời Gian:", time);
    });
});
let users = JSON.parse(localStorage.getItem("users")) || [];
function signIn(e) {
    e.preventDefault();
    let inpEmail = document.getElementById("email").value;
    let inpPassword = document.getElementById("password").value;
    let check = false;
    let account = {};
    if (inpEmail == "") {
        alert("chưa điền email");
    } else if (inpPassword == "") {
        alert("chưa điền mật khẩu");
    } else {
        for (let i = 0; i < users.length; i++) {
            if (inpEmail == users[i].emailAddress) {
                account = users[i];
                check = true;
                break;
            }
        }
        if (check) {
            if (inpPassword == account.password) {
                localStorage.setItem("checkLogin",account.id);
                window.location.href = "../index.html";
                // đăng nhập thành công
                // lưu checkLogin để xác định user đã đăng nhập
                // localStorage.setItem("users", JSON.stringify(users));
            } else {
                alert("sai mật khẩu");
            }
        } else {
            alert("email chưa được đăng kí");
        }
    }
}