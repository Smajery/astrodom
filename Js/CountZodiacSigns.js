document.getElementById("btn-count-zz").addEventListener("click", Start);
var month, month1, day, year, year1, CZ, myAnswer1 = 0, OldZ = 0, NewZ = 0;
function Start() {
    Assign();
    Month();
    Year();
    NewZodiac();
    OldZodiac();
    Output();
}
function Assign() {
    day = document.getElementById("day").value;
    month1 = document.getElementById("month").value;
    year = document.getElementById("year").value;
    day = Number(day);
    year = Number(year);
}
function Year() {
    year1 = year % 12;
    if (year1 === 0) {
        CZ = "Мавпа";
    } else if (year1 === 1) {
        CZ = "Півень";
    } else if (year1 === 2) {
        CZ = "Собака";
    } else if (year1 === 3) {
        CZ = "Свиня";
    } else if (year1 === 4) {
        CZ = "Щур";
    } else if (year1 === 5) {
        CZ = "Бик";
    } else if (year1 === 6) {
        CZ = "Тигр";
    } else if (year1 === 7) {
        CZ = "Кролик";
    } else if (year1 === 8) {
        CZ = "Дракон";
    } else if (year1 === 9) {
        CZ = "Змія";
    } else if (year1 === 10) {
        CZ = "Кінь";
    } else if (year1 === 11) {
        CZ = "Вівця";
    } else {
        document.getElementById("year").value =
            "Зробіть рік 4-значним і позитивним!";
    }
}
function Month() {
    if (month1 === "1") {
        month = 0;
    } else if (month1 === "2") {
        month = 31;
        month1.value
    } else if (month1 === "3") {
        month = 60;
    } else if (month1 === "4") {
        month = 91;
    } else if (month1 === "5") {
        month = 121;
    } else if (month1 === "6") {
        month = 152;
    } else if (month1 === "7") {
        month = 182;
    } else if (month1 === "8") {
        month = 213;
    } else if (month1 === "9") {
        month = 244;
    } else if (month1 === "10") {
        month = 274;
    } else if (month1 === "11") {
        month = 305;
    } else if (month1 === "12") {
        month = 335;
    } else {
        OldZ = "Виправити місяць і або день";
        NewZ = "Виправити місяць і або день";
    }
    myAnswer1 = month + day;
}
function NewZodiac() {
    if ((myAnswer1 > 108) & (myAnswer1 < 135)) {
        NewZ = "Овен";
    } else if ((myAnswer1 > 133) & (myAnswer1 < 174)) {
        NewZ = "Телець";
    } else if ((myAnswer1 > 172) & (myAnswer1 < 203)) {
        NewZ = "Близнюки";
    } else if ((myAnswer1 > 201) & (myAnswer1 < 224)) {
        NewZ = "Рак";
    } else if ((myAnswer1 > 222) & (myAnswer1 < 261)) {
        NewZ = "Лев";
    } else if ((myAnswer1 > 259) & (myAnswer1 < 305)) {
        NewZ = "Діва";
    } else if ((myAnswer1 > 303) & (myAnswer1 < 329)) {
        NewZ = "Терези";
    } else if ((myAnswer1 > 327) & (myAnswer1 < 335)) {
        NewZ = "Скорпіон";
    } else if ((myAnswer1 > 333) & (myAnswer1 < 353)) {
        NewZ = "Змієносець,";
    } else if ((myAnswer1 > 351) & (myAnswer1 < 367)) {
        NewZ = "Стрілець";
    } else if ((myAnswer1 < 21) & (myAnswer1 > 0)) {
        NewZ = "Стрілець";
    } else if ((myAnswer1 > 19) & (myAnswer1 < 48)) {
        NewZ = "Козоріг";
    } else if ((myAnswer1 > 46) & (myAnswer1 < 72)) {
        NewZ = "Водолій";
    } else if ((myAnswer1 > 70) & (myAnswer1 < 110)) {
        NewZ = "Риби";
    } else {
        document.getElementById("day").value = "Подивіться, чи реальні місяць і день";
    }
}
function OldZodiac() {
    if ((myAnswer1 > 80) & (myAnswer1 < 112)) {
        OldZ = "Овен";
    } else if ((myAnswer1 > 111) & (myAnswer1 < 143)) {
        OldZ = "Телець";
    } else if ((myAnswer1 > 142) & (myAnswer1 < 174)) {
        OldZ = "Близнюки";
    } else if ((myAnswer1 > 173) & (myAnswer1 < 205)) {
        OldZ = "Рак";
    } else if ((myAnswer1 > 204) & (myAnswer1 < 236)) {
        OldZ = "Лев";
    } else if ((myAnswer1 > 235) & (myAnswer1 < 267)) {
        OldZ = "Діва";
    } else if ((myAnswer1 > 266) & (myAnswer1 < 297)) {
        OldZ = "Терези";
    } else if ((myAnswer1 > 296) & (myAnswer1 < 328)) {
        OldZ = "Скорпіон";
    } else if ((myAnswer1 > 327) & (myAnswer1 < 357)) {
        OldZ = "Стрілець";
    } else if ((myAnswer1 > 356) & (myAnswer1 < 367)) {
        OldZ = "Козоріг";
    } else if ((myAnswer1 > 0) & (myAnswer1 < 20)) {
        OldZ = "Козоріг";
    } else if ((myAnswer1 > 19) & (myAnswer1 < 51)) {
        OldZ = "Водолій";
    } else if ((myAnswer1 > 50) & (myAnswer1 < 81)) {
        OldZ = "Риби";
    } else {
        document.getElementById("day").value = "Подивіться, чи реальні місяць і день";
    }
}
function Output() {
    if (
        document.getElementById("year").value ===
        "Зробіть рік 4-значним і позитивним!"
    ) {
        CZ = "Fix Year";
    }
    document.getElementById("result").innerHTML = OldZ;
    document.getElementById("result2").innerHTML = NewZ;
    document.getElementById("result3").innerHTML = CZ;
}