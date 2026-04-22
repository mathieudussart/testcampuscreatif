document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const workshopGrid = document.querySelector('.workshop-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.workshop-item');

    // 1. Effet Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // 2. Swiper Slider
    const swiper = new Swiper('.event-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });

    // 3. Filtrage & Changement de Colonnes
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Si c'est la danse, on active les 3 colonnes, sinon 2
            if (filter === 'danse') {
                workshopGrid.classList.add('grid-danse');
            } else {
                workshopGrid.classList.remove('grid-danse');
            }

            items.forEach(item => {
                item.style.opacity = '0';
                setTimeout(() => {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 200);
            });
        });
    });
});
