// task 1

console.log('\t Задание 1. Создать переменные, получить данные через prompt, вывести на экран фразу');

let firstName = prompt('Ваше имя?'),
    age = prompt('Ваш вораст?'), 
    city = prompt('Ваш город проживания?'), 
    phone = prompt('Ваш телефон?'), 
    email = prompt('Ваша электронная почта?'), 
    company = prompt('Ваше место работы?'); 

console.log('Меня зовут ' + firstName + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');


// task 2

console.log('\t Задание 2. Определить по введенному возрасту год рождения');

let year = 2021 - age;

console.log(firstName + ' родился в ' + year + ' году.');


// task 3

console.log('\t Задание 3. Сумма первых трех цифр равна сумму последних трех цифр шестизначного числа?');

let numTask = prompt('Введите шестизначное число?'),
    number1 = parseInt(numTask / 100000);
    number2 = parseInt((numTask - number1 * 100000) / 10000);
    number3 = parseInt((numTask - number1 * 100000 - number2 * 10000) / 1000);
    number4 = parseInt((numTask - number1 * 100000 - number2 * 10000 - number3 * 1000) / 100);
    number5 = parseInt((numTask - number1 * 100000 - number2 * 10000 - number3 * 1000 - number4 * 100) / 10);
    number6 = parseInt(numTask - number1 * 100000 - number2 * 10000 - number3 * 1000 - number4 * 100 - number5 * 10);
    firstSum = number1 + number2 + number3;
    lastSum = number4 + number5 + number6;

console.log('Полученные числа: "' + number1 + '" "' + number2 + '" "' + number3 + '" "' + number4 + '" "' + number5 + '" "' + number6 + '"');

(firstSum == lastSum) ? console.log('Да') : console.log('Нет');


// task 4

console.log('\t Задание 4. Сравнить, если переменная a = 1 больше нуля');

let a = 1; //Проверить работу скрипта при a, равном 0, -3

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task 5

console.log ('\t Задания 5. Вывести сумму, разность, произведение, частное чисел c = 10 и d = 2, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат');

let c = 10,
    d = 2;
    sum = c + d;
    diff = c - d;
    multiple = c * d;
    div = 10 / 2;

console.log('Сумма - ' + sum + ', разность - ' + diff + ', произведение - ' + multiple + ', частное - ' + div);

if (sum > 1) {
    sum2 = sum * sum;
    console.log('Квадрат суммы: ' + sum2);
}

// task 6

console.log();