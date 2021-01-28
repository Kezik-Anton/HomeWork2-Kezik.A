// task 1
console.log('Задание 1. Создать переменные, получить данные через prompt, вывести на экран фразу');

let firstName = prompt('Ваше имя?'),
    age = prompt('Ваш вораст?'), 
    city = prompt('Ваш город проживания?'), 
    phone = prompt('Ваш телефон?'), 
    email = prompt('Ваша электронная почта?'), 
    company = prompt('Ваше место работы?'); 

console.log('Меня зовут ' + firstName + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');

// task 2
console.log('Задание 2. Определить по введенному возрасту год рождения');

let year = 2021 - age;

console.log(firstName + ' родился в ' + year + ' году.');