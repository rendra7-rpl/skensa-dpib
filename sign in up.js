const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const emailInput = document.querySelector('.sign-in input[type="email"]');
const signInButton = document.querySelector('.btn-signin');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelector('.btn-signup').addEventListener('click', () => {
    window.location.href = 'sign in up.html'; // Ganti dengan URL beranda Anda
});

signInButton.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah form submit otomatis

    const email = emailInput.value;
    if (!email.endsWith('@gmail.com')) {
        alert("Hanya bisa login dengan akun Gmail.");
    } else {
        window.location.href = 'homepage.html'; // Ganti dengan URL beranda Anda
    }
});
