$(document).ready(function() {
    ///Создание кнопок
    initWheel();
    ///Прокрутка предсказания
    $('.btn-spin-wheel').on('click', function(){
        ///Анимация рычага
        $('.lever').css({
            'transform':'rotate(80deg)',
        });
        spinWheel();
        ///Скрывает прошлое предсказание
        $('.quote').css({
            'display': 'none',
        });
        ///Ограничение по кликам
        var counter = 0;
        $('.fortune-cookie').on('click', function(){
            counter++;
            if (counter > 1){
                return false;
            }else {
                $('span.quote').css({
                    'display': 'block',
                });
                newQuote();
            }
        });
    });
});
///Создание кнопок
function initWheel(){
    var $wheel = $('.prediction_roulette-wrapper .wheel'),
        row = "";

    row += "<div class='row'>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "  <button class='fortune-cookie'><\/button>";
    row += "<\/div>";

    for(var x = 0; x < 29; x++){
        $wheel.append(row);
    }
}
///Прокрутка предсказания
function spinWheel(){
    var $wheel = $('.prediction_roulette-wrapper .wheel'),
        order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4],
        random_num = Math.floor(Math.random() * order.length),
        position = order[random_num];

    //Определение позиции
    var rows = 12,
        card = 128 + 3 * 2, //Ширина + margin с двух сторон
        landingPosition = (rows * 15 * card) + (position * card);

    $wheel.css({
        'transition-duration':'10s',
        'transform':'translate3d(-'+landingPosition+'px, 0px, 0px)'
    });
    //Удерживает позицию на месте
    setTimeout(function(){
        $wheel.css({
            'transition-timing-function':'',
            'transition-duration':'',
        });
        ///Возвращает положение рычага
        $('.lever').css({
            'transform':'rotate(-30deg)'
        });
        $('.fortune-cookie').css({
            'cursor':'pointer',
            'opacity':'1',
        });
        var resetTo = -(position * card);
        $wheel.css('transform', 'translate3d('+resetTo+'px, 0px, 0px)');
    }, 10 * 1000);
}
///Текст предсказаний
var quotes = [
    "Сьогодні від вас залежить, як створити спокій, якого ви прагнете.",
    "Друг просить лише ваш час, а не гроші.",
    "Якщо ви відмовляєтеся приймати що-небудь, крім найкращого, ви дуже часто отримуєте це.",
    "Посмішка - це ваш паспорт у серця інших.",
    "Хороший спосіб зберегти здоров’я – їсти більше китайської їжі.",
    "Ваші високі принципи - це успіх.",
    "Наполеглива праця окупається в майбутньому, лінь окупається зараз.",
    "Зміни можуть зашкодити, але вони ведуть до чогось кращого.",
    "Насолоджуйтесь удачею, яку приносить вам супутник.",
    "Люди природно приваблюють вас.",
    "Захований в долині біля відкритого потоку - це буде тип місця, де ви знайдете свою мрію.",
    "Випадкова зустріч відкриває нові двері до успіху та дружби.",
    "Ти вчишся на своїх помилках... Сьогодні ти багато чого навчишся.",
    "Якщо у твоєму житті є щось хороше, не відпускай це!",
    "Якою б не була ваша мета в житті, візьміть її, візуалізуйте її, і вона стане вашим.",
    "Ваше взуття сьогодні порадує вас.",
    "Ви не можете любити життя, поки не проживете життя, яке любите.",
    "Слідкуйте за майбутніми подіями; Вони кидають тіні заздалегідь.",
    "Земля завжди в голові літаючого птаха.",
    "Чоловік чи жінка, яких ви бажаєте, відчуває до вас те саме.",
    "Вдало зустріти труднощі – це джерело вашої сили.",
    "Ваша мрія здійсниться.",
    "Наші вчинки визначають нас так само, як ми визначаємо свої вчинки.",
    "Ніколи не здавайся. Ви не невдаха, якщо не здаєтеся.",
    "Ви станете великим, якщо повірите в себе.",
    "Немає більшого задоволення, ніж бачити процвітання своїх близьких.",
    "Ви одружитесь зі своїм коханим.",
    "Дуже приваблива людина має для вас повідомлення.",
    "Ви вже знаєте відповіді на питання, які витають у вашій голові.",
    "Саме зараз і в цьому світі ми повинні жити.",
    "Ви повинні спробувати, або ненавидьте себе за те, що ви не спробували.",
    "Ви самі можете створити своє щастя."
]
///Выдает рандомное предсказание
function  newQuote(){
    var index = Math.floor(Math.random() * quotes.length);

    $('span.quote').html('"' + quotes[index] + '"');

    $('a.twitter-share-button').attr('href', twitURI(quotes[index]));
}






