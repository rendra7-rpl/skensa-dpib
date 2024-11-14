navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        // Menambahkan garis bawah saat tautan diklik
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

