const nav = document.getElementById('menu');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
            nav.classList.add('navColor');
        } else {
            nav.classList.remove('navColor');
        }
    })