//------------------------------------------------------Задание 1------------------------------------------------------//
// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// - поле, которое хранит цвет маркера;
// - поле, которое хранит количество чернил в маркере (в процентах);
// - метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).

// - Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// - Продемонстрировать работу написанных методов.

class Marker{
    constructor(color,ink){
        this.color = color;
        this.ink = ink;
    }

    print(string){ //метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере)
        //создаём переменную, в которую записываемезультат и применяем свойство color
        let result = `<div style ="color: ${this.color};">`; 
        for(let item of string){
            //проверяем наличие чернил: если меньше 0,5, то прерываем процесс
            if(this.ink < 0.5){ 
                break;
            }
            if(item !=" "){ //добавляем счетчик расхода чернил с проверкой на пробелы
                this.ink-=0.5
            }
            result += item
        };

        document.write(result + `</div>`); //выводим результат в div добавляем вывод остатка чернил
        if(this.ink  === 0){  
        document.write("Чернила закончились"); 
        }
        else{
        document.write(`<p>Осталось чернил: ${this.ink}%</p>`) 
        }
    }
}

//Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
class RefuelMarker extends Marker{
    refuelMarker(ink){ //добавляем метод заправки маркера
        if(this.ink + ink > 100){ 
            this.ink = 100;
        }
        else this.ink += ink 
        document.write(`<p>Осталось чернил: ${this.ink}%</p>`) //и выводим остаток чернил
    }
}

let userMarker = new Marker('red',100) 
let userRefMarker = new RefuelMarker('green',50)

userMarker.print('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
userRefMarker.print('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
userRefMarker.refuelMarker(30)


//------------------------------------------------------Задание 2------------------------------------------------------//

// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// - метод для вывода даты (числа и месяца) текстом;
// - метод для проверки – это прошедшая дата или будущая (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// - метод для проверки – високосный год или нет;
// - метод, возвращающий следующую дату.

// - Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.



class ExtendedDate extends Date { // Реализуйте класс ExtendedDate
    constructor(date) {
        super();
        this.date = new Date(date);
    }
    

    // - метод для вывода даты (числа и месяца) текстом;
    textDate() { 
    let resultNumb,
    stringDate = this.date.getDate().toString();

    let month = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    let numb1 = ["первое","второе","третье","четвёртое","пятое","шестое","седьмое","восьмое","девятое","десятое"];
    let numb2 = ["один","две","три","четыр","пят","шест","сем","восем","девят"];
    let numb3 = ["двадцать", "тридцать"];
    let numb4 = ["двадцатое", "тридцатое"];


    if (this.date.getDate() < 11) resultNumb = numb1[this.date.getDate() - 1];
    else if (this.date.getDate() < 20)
        resultNumb = numb2[this.date.getDate() - 11] + "надцатое";
    else if (this.date.getDate() == 20 || this.date.getDate() == 30)
        resultNumb = numb4[stringDate[0] - 2];
    else if (this.date.getDate() <= 31)
        resultNumb = numb3[stringDate[0] - 2] + " " + numb1[stringDate[1] - 1];

    return ("дата: " + resultNumb.slice(0, 1).toUpperCase() + resultNumb.slice(1) + " " + month[this.date.getMonth()] + " " + this.date.getFullYear());
    }
    

    // - метод для проверки – это прошедшая дата или будущая
    checkDate() { 
        return this.date > this ? "Это будущая дата " : "Это прошедшая дата";
    }
    

    // - метод для проверки – високосный год или нет;
    checkLeapYear() { 
    let year = this.date.getFullYear();
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        return "Это високосный год";
    else return "Это не високосный год";
    }


    // - метод, возвращающий следующую дату.
    nextDay() {
    this.date.setDate(this.date.getDate() + 1);
    return "Завтрашняя " + this.textDate().replace("Дата:", "");
    }

    
}

let userDate = new ExtendedDate("1.19.2023"); //мм.дд.гггг
console.log(userDate.textDate());
console.log(userDate.checkDate());
console.log(userDate.checkLeapYear());
console.log(userDate.nextDay());