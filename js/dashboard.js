/* 
  VitalCare Medical Transport - Dashboard Functionality
*/

document.addEventListener('DOMContentLoaded', () => {
    /* 0. Mobile Hamburger Menu */
    const hamburgerBtn = document.getElementById('dash-hamburger');
    const hamburgerMenu = document.getElementById('dash-hamburger-menu');
    const hamburgerBackdrop = document.getElementById('dash-hamburger-backdrop');

    const closeHamburgerMenu = () => {
        if (!hamburgerBtn || !hamburgerMenu || !hamburgerBackdrop) return;
        hamburgerMenu.hidden = true;
        hamburgerBackdrop.hidden = true;
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    };

    const toggleHamburgerMenu = () => {
        if (!hamburgerBtn || !hamburgerMenu || !hamburgerBackdrop) return;
        const willOpen = hamburgerMenu.hidden;
        hamburgerMenu.hidden = !willOpen;
        hamburgerBackdrop.hidden = !willOpen;
        hamburgerBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    };

    if (hamburgerBtn && hamburgerMenu && hamburgerBackdrop) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleHamburgerMenu();
        });

        const closeBtn = document.getElementById('dash-menu-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeHamburgerMenu());
        }

        hamburgerBackdrop.addEventListener('click', () => closeHamburgerMenu());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeHamburgerMenu();
        });
    }

    /* 1. Dashboard Tab Navigation */
    const menuItems = document.querySelectorAll('.menu-item');
    const tabContents = document.querySelectorAll('.tab-content');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-tab');

            if (target === 'logout') {
                window.location.href = 'index.html';
                return;
            }

            // Remove active class from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));
            // Remove active class from all tab contents
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Add active class to current selection
            menuItems.forEach(mi => {
                if (mi.getAttribute('data-tab') === target) mi.classList.add('active');
            });
            const activeTab = document.getElementById(target);
            if (activeTab) {
                activeTab.classList.add('active');
            }

            closeHamburgerMenu();
        });
    });

    /* 2. New Ride Booking Form Logic */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your booking request has been submitted. You can track it in the "Ride History" tab.');
            bookingForm.reset();
            // Switch to history tab
            const historyItem = document.querySelector('[data-tab="ride-history"]');
            if (historyItem) historyItem.click();
        });
    }

    /* 3. Real-Time Tracking Animation Sim (Optional) */
    const updateETA = () => {
        const etaEl = document.getElementById('eta-time');
        if (etaEl) {
            let current = 12;
            setInterval(() => {
                if (current > 1) {
                    current--;
                    etaEl.textContent = `${current} mins`;
                }
            }, 60000);
        }
    };
    updateETA();
});
