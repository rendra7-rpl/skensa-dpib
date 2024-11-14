const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.querySelector('.btn-signup').addEventListener('click', () => {
    window.location.href = 'sign in up.html'; // Ganti dengan URL beranda Anda
});
document.querySelector('.btn-signin').addEventListener('click', () => {
    window.location.href = 'homepage.html'; // Ganti dengan URL beranda Anda
});