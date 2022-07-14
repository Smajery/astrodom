// Вибираємо елемент, на який ми хочемо націлити
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// Далі ми хочемо створити функцію, яка буде викликатися, коли цей елемент буде перетинатися
function callback(entries, observer) {
    // Зворотний виклик поверне масив записів, навіть якщо ви спостерігаєте лише один елемент
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Показати кнопку
            scrollToTopBtn.classList.add("showBtn");
        } else {
            // Кнопка приховати
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Далі ми створюємо екземпляр спостерігача за допомогою функції, яку ми створили вище. Для цього потрібна додаткова конфігурація
// об'єкт, який ми будемо використовувати в інших прикладах.
let observer = new IntersectionObserver(callback);
// Нарешті почніть спостерігати за цільовим елементом
observer.observe(target);
