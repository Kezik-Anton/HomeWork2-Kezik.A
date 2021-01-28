// task 1 

console.log('// Задание 1. Создать переменные, получить данные через prompt, вывести на экран фразу');

let firstName = prompt('task 1. Ваше имя?'),
    age = prompt('Ваш вораст?'), 
    city = prompt('Ваш город проживания?'), 
    phone = prompt('Ваш телефон?'), 
    email = prompt('Ваша электронная почта?'), 
    company = prompt('Ваше место работы?'); 

console.log('Меня зовут ' + firstName + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');


// task 2

console.log('// Задание 2. Определить по введенному возрасту год рождения');

let year = 2021 - age;

console.log(firstName + ' родился в ' + year + ' году.');


// task 3

console.log('// Задание 3. Сумма первых трех цифр равна сумму последних трех цифр шестизначного числа?');

let numTask = prompt('task 3. Введите целое шестизначное число?');

if (numTask > 99999 && numTask <= 999999) {

let number1 = parseInt(numTask / 100000);
    number2 = parseInt((numTask - number1 * 100000) / 10000);
    number3 = parseInt((numTask - number1 * 100000 - number2 * 10000) / 1000);
    number4 = parseInt((numTask - number1 * 100000 - number2 * 10000 - number3 * 1000) / 100);
    number5 = parseInt((numTask - number1 * 100000 - number2 * 10000 - number3 * 1000 - number4 * 100) / 10);
    number6 = parseInt(numTask - number1 * 100000 - number2 * 10000 - number3 * 1000 - number4 * 100 - number5 * 10);
    firstSum = number1 + number2 + number3;
    lastSum = number4 + number5 + number6;

console.log('Введенное число ' + numTask);
console.log('Полученные числа: "' + number1 + '", "' + number2 + '", "' + number3 + '", "' + number4 + '", "' + number5 + '", "' + number6 + '"');

(firstSum == lastSum) ? console.log('Да') : console.log('Нет');

} else {
    alert('Вы ввели неправильное число. Попробуйте в следующий раз ;)');  
    console.log('error');  
}

// task 4

console.log('// Задание 4. Сравнить, если переменная a = 1 больше нуля');

let a = 1; //Проверить работу скрипта при a, равном 0, -3

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// task 5

console.log ('// Задание 5. Вывести сумму, разность, произведение, частное чисел a = 10 и b = 2, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат');

a = 10;

let b = 2;
    sum = a + b;
    diff = a - b;
    multiple = a * b;
    div = a / b;

console.log('Сумма - ' + sum + ', разность - ' + diff + ', произведение - ' + multiple + ', частное - ' + div);

if (sum > 1) {
    sum2 = sum * sum;
    console.log('Квадрат суммы: ' + sum2);
}


// task 6

console.log('// Задание 6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, вывевести "Верно", в противном случае вывести "Неверно"');

((a > 2 && a < 11) || (b >= 6 && b < 14)) ? console.log('Верно') : console.log('Неверно');


// task 7

console.log('// Задание 7. Определить в какую четверть часа попадает число от 0 до 59 (в первую, вторую, третью или четвертую).')

let n = prompt('task 7. Введите число от 0 до 59'),
    nStatus;

if (n > 0 && n <= 59) {

    if (n > 0 && n < 15) {
        nStatus = 'в первую';
    } else if (n >= 15 && n < 30) {
        nStatus = 'во вторую';
    } else if (n >= 30 && n < 45) {
        nStatus = 'в третью';
    } else  {
        nStatus = 'в четвертую';   
    }

    console.log('Число "n" = ' + n + ' попадает ' + nStatus + ' четверть часа');

} else {
    alert('Вы ввели неправильное число. Попробуйте в следующий раз ;)');
    console.log('error');
}


// task 8

console.log('// Задание 8. В переменной day лежит число из интервала от 1 до 31. Определить в какую декаду месяца попадает это число (в первую, вторую или третью).')

let inDay = prompt('task 8. Введите целое число от 1 до 31'),
    day = parseInt(inDay),
    dayStatus;

if (day >=1 && day <=31) {

    if (day < 11) {
        dayStatus = 'в первую'; 
    } else if (day >= 11 && day < 21) {
        dayStatus = 'во вторую';
    } else {
        dayStatus = 'в третью';
    }

    console.log('День ' + day + ' попадает ' + dayStatus + ' декаду месяца');

} else {
    alert('Вы ввели неправильное число. Попробуйте в следующий раз ;)');
    console.log('error');
}


// task 9

console.log('// Задание 9. Написать скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно.')

let enterDays = prompt('task 9. Введите количество дней'),
    qYears = enterDays / 365,
    qMonths = enterDays / 31,
    qWeeks = enterDays / 7,
    qHours = enterDays * 24,
    qMinutes = enterDays * 1440,
    qSeconds = enterDays * 86400;

if (enterDays > 0) {

    if (qYears < 1) qYears = 'меньше года';
    if (qMonths < 1) qMonths = 'меньше месяца';
    if (qWeeks < 1) qWeeks = 'меньше недели';

    console.log(enterDays + ' дней это лет: ' + qYears + ', месяцев: ' + qMonths + ', недель: ' + qWeeks + ', часов: ' + qHours + ', минут: ' + qMinutes + ', секунд: ' + qSeconds);
} else {
    alert('Вы ввели неправильное число. Попробуйте в следующий раз ;)');
    console.log('error');
}


//task 10

console.log('// Задание 10. Написать скрипт, который по введенному дню в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch.');

let calcDay = prompt('task 10. Введите номер дня от 1 до 365'),
    calcStatus,
    timeYear; 
    
calcDay = parseInt(calcDay);

if (calcDay >=1 && calcDay <=365) {

    if (calcDay >= 1 && calcDay <= 31) {
        calcStatus = 1; 
    } else if (calcDay >= 32 && calcDay <= 59) {
        calcStatus = 2; 
    } else if (calcDay >= 60 && calcDay <= 90) {
        calcStatus = 3; 
    } else if (calcDay >= 91 && calcDay <= 120) {
        calcStatus = 4; 
    } else if (calcDay >= 121 && calcDay <= 151) {
        calcStatus = 5; 
    } else if (calcDay >= 152 && calcDay <= 181) {
        calcStatus = 6; 
    } else if (calcDay >= 182 && calcDay <= 212) {
        calcStatus = 7; 
    } else if (calcDay >= 213 && calcDay <= 243) {
        calcStatus = 8; 
    } else if (calcDay >= 244 && calcDay <= 273) {
        calcStatus = 9; 
    } else if (calcDay >= 274 && calcDay <= 304) {
        calcStatus = 10; 
    } else if (calcDay >= 305 && calcDay <= 334) {
        calcStatus = 11; 
    } else {
        calcStatus = 12;
    }
    
    switch (calcStatus) {
        case 1:
        case 2:
        case 12:
            timeYear = 'зима';
        break;
        case 3:
        case 4:
        case 5:
            timeYear = 'весна';
        break;
        case 6:
        case 7:
        case 8:
            timeYear = 'лето';
        case 9:
        case 10:
        case 11:
            timeYear = 'осень';
        break;
    }
    
    console.log('День № ' + calcDay + ' - это ' + calcStatus + ' месяц, пора года - ' + timeYear);
  
} else {
    alert('Вы ввели неправильное число. Попробуйте в следующий раз ;)');
    console.log('error');
}