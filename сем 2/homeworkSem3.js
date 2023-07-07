let age = prompt("Введите ваш возраст:", "Возраст")

let count = 0;
function ChangedColor() {
    let body1 = document.getElementById("body1");
    console.log(body1);

    if (count % 2 == 0) {
        body1.classList.add("ice");
    } else {
        body1.classList.remove("ice");
    }
    count++;
}

switch (age) {
    case '18':
        alert("Вы совершеннолетний, все можно ")
        break;
    case '10':
        alert("Вам надо учить уроки ")
        break;
    case '30':
        alert("Ложись спать, завтра на работу ")
        break;
    default:
        alert("Мы не знаем, что вам делать ")
        break;
}

let btn1 = document.getElementById("buttonSection1");
console.log(btn1);

btn1.addEventListener("click", ChangedColor)

