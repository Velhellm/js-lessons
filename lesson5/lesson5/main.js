// 1.создайте пустой объект, добавить имя возвраст, удалить возвраст, измениь имя
//написать 2 функции, функция 1 на 1 уровне ,функция 2 на 2 уровне

var user = {};
user.name = 'Eugene';
user.age = 32;

delete user.age;
user.name = 'Velhellm'

user.addProp = function (prop, value) {
    this[prop] = value;
};

user.adress = {street: "Karla Libknehta"}
user.adress.showAdress = function(){
    document.write(user.adress.street)
}

/*-------------------------------------------*/

// 2. Создать объект  для авто (производитель, модель, год выпуска, сред скорость) и функции:
//1 - Для вызова на экран информации об авто.
//2 - Подсчет времени для преодаления расстояния со средней cкоростью (Водитель должен  каждые 4 часа делать перерыв на 1 час ).

var auto = {};
auto.manufact = 'Mitsubishi',
auto.model = 'Lancer',
auto.prodYear = 2010,
auto.midSpeed = 140;

auto.info = function(){ //выводит информация об авто
    document.write(`Производитель: ${auto.manufact}`);
    document.write(`Модель: ${auto.model}`);
    document.write(`Год выпуска: ${auto.prodYear}`);
    document.write(`Средняя скорость: ${auto.midSpeed} км/ч`);
} 

auto.info.neededTime = function(distance){
    const distPerFourHours = auto.midSpeed * 4; //сколько автомобиль проедет за 4 часа
    const fourHours = 300 //минут в часах с учётом отдыха в 1 час
    let remain = distance;
    let result = 0;
    while (true) {
        if(remain > distPerFourHours){ //в случае, если путь не пройден за 4 часа, продолжаем цикл
            result += fourHours;
            remain -= distPerFourHours;
            continue; 
        }
        else{
            result += remain * 60 / auto.midSpeed; //высчитываем, сколько минут ещё осталось
            break;
        }
    }
    document.write(`Требуется времени: ${Math.trunc(result / 60)} часов, ${Math.trunc(result % 60)} минут.`);    //выводим результат
};

/*-------------------------------------------*/

//Создать объект, хранящий в себе отдельно числитель и знаменатель дроби и след. функции:
//1. сложение 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
//2. вычитание 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
//3. умножение 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
//4. Деление 2х объектов-дробей (пример d1: 12.1, d2: 21.1)

let fractObj = {  // Создаём объект с числителем и знаменателем
    fstNum : {
        x : 4,
        y : 3, 
    },
    secNum : {
        x : 4,
        y : 5,
    },  
    multi: function(){   //создаём функцию для умножения
        let resultFract1 = (this.fstNum.x / this.fstNum.y);
        let resultFract2 = (this.secNum.x / this.secNum.y);
        return (resultFract1 * resultFract2).toFixed(2)
    },

    division: function(){    //создаём функцию для деления
        let resultFract1 = (this.fstNum.x / this.fstNum.y);
        let resultFract2 = (this.secNum.x / this.secNum.y);
        return (resultFract1 / resultFract2).toFixed(2)
    },

    addition: function(){    //создаём функцию для сложения
        let resultFract1 = (this.fstNum.x / this.fstNum.y);
        let resultFract2 = (this.secNum.x / this.secNum.y);
        return (resultFract1 + resultFract2).toFixed(2)
    },

    substraction: function(){    //создаём функцию для вычитания
        let resultFract1 = (this.fstNum.x / this.fstNum.y);
        let resultFract2 = (this.secNum.x / this.secNum.y);
        return (resultFract1 - resultFract2).toFixed(2)
    }
}