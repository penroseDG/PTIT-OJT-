document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('register-name').value;
    let phone = document.getElementById('register-phone').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let date = document.getElementById('appointment-date').value;
    let time = document.getElementById('appointment-time').value;
    
    // Your registration logic here
   
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    
    
    console.log('Đăng nhập thành công!');
});
