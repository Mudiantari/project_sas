document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const overlay = document.getElementById('overlay');
    const successPopup = document.getElementById('successPopup');
    const doneButton = document.getElementById('doneButton');
    const mainContent = document.querySelector('.main-content'); // Get the main content div

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form melakukan submit default (reload halaman)

            // Tampilkan overlay dan pop-up
            overlay.style.display = 'block';
            successPopup.style.display = 'block';

            // Gelapkan seluruh halaman utama
            mainContent.style.opacity = '0.3'; // Anda bisa menyesuaikan nilai opasitas
        });
    }

    if (doneButton) {
        doneButton.addEventListener('click', function() {
            // Sembunyikan overlay dan pop-up
            overlay.style.display = 'none';
            successPopup.style.display = 'none';

            // Kembalikan opasitas halaman utama
            mainContent.style.opacity = '1';
        });
    }

    // Optional: Tutup pop-up jika mengklik di luar pop-up (di overlay)
    if (overlay) {
        overlay.addEventListener('click', function() {
            overlay.style.display = 'none';
            successPopup.style.display = 'none';
            mainContent.style.opacity = '1';
        });
    }
});