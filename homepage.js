// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

// Handle LogOut redirection
const logOutButton = document.querySelector('.logOut-btn');
if (logOutButton) {
    logOutButton.addEventListener('click', () => {
        // Redirect to sign in up page when clicking LogOut
        window.location.href = 'sign in up.html';
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        // Menambahkan garis bawah saat tautan diklik
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});
