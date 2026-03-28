/* 
  VitalCare Medical Transport - Dashboard Functionality
*/

document.addEventListener('DOMContentLoaded', () => {
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
            item.classList.add('active');
            const activeTab = document.getElementById(target);
            if (activeTab) {
                activeTab.classList.add('active');
            }
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
