// Import Swiper bundle (includes CSS)
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
document.addEventListener('DOMContentLoaded', function () {
    var customersSlider = new Swiper('.customer-slider', {
        slidesPerView: 3, // Jumlah slide default yang tampil
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragable: true,
            dragClass: 'swiper-scrollbar-drag-custom', // Kelas custom untuk drag handle
            dragSize: 50,
          },
        breakpoints: {
            // Ukuran layar >= 300px
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // Ukuran layar >= 640px
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // ukuran layar >=1024
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });
});

