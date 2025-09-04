// const slides = document.querySelectorAll('.slide'); // Получаем все слайды
// let currentSlide = 0; // Начинаем с первого слайда

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active'); // Убираем активный класс у всех слайдов
//     });
//     slides[index].classList.add('active'); // Добавляем активный класс к текущему слайду
// }

// document.querySelector('.next-btn').addEventListener('click', () => {
//     currentSlide = (currentSlide + 1) % slides.length; // Следующий слайд
//     showSlide(currentSlide);
// });

// document.querySelector('.prev-btn').addEventListener('click', () => {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Предыдущий слайд
//     showSlide(currentSlide);
// });

// // Инициализация отображения первого слайда
// showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'); // Получаем все слайды
    let currentSlide = 0; // Начинаем с первого слайда

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Убираем активный класс у всех слайдов
        });
        slides[index].classList.add('active'); // Добавляем активный класс к текущему слайду
    }

    document.querySelectorAll('.next-btn').forEach((button) => {
        button.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length; // Следующий слайд
            showSlide(currentSlide);
        });
    });

    document.querySelectorAll('.prev-btn').forEach((button) => {
        button.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Предыдущий слайд
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide); // Инициализация отображения первого слайда
});
