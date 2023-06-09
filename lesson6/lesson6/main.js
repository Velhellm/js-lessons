//===============================================Задача 1=================================================//

//Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
//1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные. 
//2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
//3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный. 

// const shopList = [  //создаём массив с имеющимся списком покупок 
//     { 
//         name: "Кефир", 
//         required: 1, 
//         bought: "нет" 
//     }, 
//     { 
//         name: "Сыр", 
//         required: 2, 
//         bought: "да" 
//     }, 
//     { 
//         name: "Ветчина", 
//         required: 1, 
//         bought: "нет" 
//     }, 
//     { 
//         name: "Коньяк", 
//         required: 5, 
//         bought: "да" 
//     } 
// ]; 

// function listSort(){  //создаём функцию, которая сравнивает объекты по признаку bought и сортирует их по признаку: 
// shopList.sort((a, b) => a.bought > b.bought ? -1 : 1);  //сначала не купленные, затем не купленные  
// let div = document.querySelector(".shop-list");   //выводим список на экран с помощью 2х циклов, которые проходятся по объектам и выводят все элементы объекта на экран 
// for( let i in shopList){  
//     for(let k in shopList[i]){ 
//         div.innerHTML += `<div>${shopList[i][k]}</div>`; 
//     } 
// } 
// }; 



//2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// function newProduct(newName, newReq, arr = shopList){ //сщздаём функцию, которая принимает 2 значения: продукт и требуемое количество
//     let prop = false; //добавляем флажок
//     for(let n in shopList){ //если имя нового продукта совпадает с именем продукта в массиве
//         if(arr[n]["name"] === newName){ 
//             arr[n]["required"] = arr[n]["required"] + newReq; //прибавляем количество нового продукта к количеству продукта в массиве
//             prop = true 
//         } 
//     } 
//     if(prop == false){ //если продукта в массиве нет
//     arr.push({  //добавляем новый объект в массив
//         name:newName,
//         required: newReq,
//         bought: "нет" //по умолчанию товар не куплен
//     })
//     } 
// } 

//3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный. 
// function buyProduct(productName, arr = shopList){ //Создаём функцию, которая проходит по массиву
//     for( let buy of arr){
//         if(buy.name === productName){ //и сравнивает полученное значение с имеющимся значением объектов в массиве
//             if(buy.bought == "нет"){  // далее меняет дначение на "да" 
//                 buy.bought = "да"
//             } else alert(`Товар уже куплен`)//если значение bought = "Да", оповещает, что товар куплен
//         }
//     }
// }


// newProduct() 
// buyProduct()
// listSort() 




//===============================================Задача 2=================================================//




//Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
//1. Распечатка чека на экран.
//2. Подсчет общей суммы покупки.
//3. Получение самой дорогой покупки в чеке.
//4. Подсчет средней стоимости одного товара в чеке.

// const recList = [
//     {
//         name: "молоко",
//         quantity: 1,
//         cost: 50,
//     },
//     {
//         name: "кефир",
//         quantity: 2,
//         cost: 70,
//     },
//     {
//         name: "сыр",
//         quantity: 1,
//         cost: 120,
//     },
//     {
//         name: "колбаса",
//         quantity: 1,
//         cost: 280,
//     },
// ];


// 1. Распечатка чека на экран.
// let div = document.querySelector(".shop-list");   
// function showList(){  // создаём функцию вывода списка покупок на экран, по аналогии с задачей 1
//     for( let n in recList){  
//         for(let m in recList[n]){ 
//             div.innerHTML += `<div>${recList[n][m]}</div>`; 
//         } 
//     } 
//     }; 
//     showList()

// 2. Подсчет общей суммы покупки.
// создаём функцию суммы покупок и с помощью метода reduce суммируем стоимости покупок, уситывая количество
// function listSumm(arr = recList){
//     const summ = recList.reduce((total, arr = recList) => total + (arr.cost * arr.quantity), 0);
//     return summ
// }
// let summDiv = document.querySelector(".summ-list");
// summDiv.innerHTML += `<div> Сумма покупок равна: ${listSumm()}</div><br>`

// 3. Получение самой дорогой покупки в чеке.
// function maxCost(arr = recList, max = 0){ //создаём функцию со счётчиком max = 0
//     for( let item of arr){
//         if (item.cost > max ){ //которая сравнивает стоимость объекта с max в каждой итерации
//             max = item.cost //если стоимость больше max, то max = стоимость
//         } 
//     } 
//     return max //возвращает max
// }
// let maxDiv = document.querySelector(".max-cost")
// maxDiv.innerHTML += `<div>Стоимость самой дорогой покупки равна: ${maxCost()}</div>`

// 4. Подсчет средней стоимости одного товара в чеке.

// function averageCost(arr = recList){ //создаём функцию и с помощью метода reduce высчитываем среднюю стоимость товара в чеке
//     const totalQty = arr.reduce((total, arr) => total + arr.quantity,0); //высчитываем количество товара в чеке
//     return listSumm() / totalQty  //делим известную нам сумму товаров на количество товаров
// }

// let totalDiv = document.querySelector(".total-quantity");
// totalDiv.innerHTML += `<div>Средняя стоимость одного товара равна: ${averageCost()}</div>`






//===============================================Задача 3=================================================//

//Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение cтиля.
//Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

//создадим класс StyleCss через конструктор
// class StyleCss {
//     constructor(pt,vl){ //передаём ему 2 значения
//         this.property = pt;
//         this.value = vl;
//     }
// }

// const styles = []; //создали пустой массив
//заполняем массив объектами с помощью метода .push
// styles.push(new StyleCss('color','red'));
// styles.push(new StyleCss('font-size','16px'));
// styles.push(new StyleCss('text-align','center'));
// styles.push(new StyleCss('text-decoration','transform'));

// function textShow(text,arr = styles){  //создаём функцию, которая принимает текст   
//     document.write(`<p style="`); //открываем тег <p> и применяем стили
//     for( let item of arr){
//         document.write(`${item.property}: ${item.value};`) //создаём цикл, который применяет указанные в массиве стили
//     }
//     document.write(`"> ${text}</p>`); //выводим готовый текст и закрываем тег </p>
// }
// textShow('вапрфвыа')







//===============================================Задача 4=================================================//

//Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
//Написать несколько функций для работы с ним.
//1. Вывод на экран всех аудиторий.
//2. Вывод на экран аудиторий для указанного факультета.
//3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.
//4. Функция сортировки аудиторий по количеству мест.
//5. Функция сортировки аудиторий по названию (по алфавиту).

//создадим класс через конструктор, по аналогии с задачей 3
class Auditorium {
    constructor(nm,st,fc){ //передаём ему значения названия аудитории, кол-ва мест и факультета
        this.audName = nm;
        this.seating = st;
        this.faculty = fc;
    }
}

const audit = []; //создаём объект по аудиториям audit
//добавляем аудитории
audit.push(new Auditorium('Угловая', 15, 'Философии'));
audit.push(new Auditorium('Обсерватория', 12, 'Астрономии'));
audit.push(new Auditorium('Большая', 20, 'Истории'));
audit.push(new Auditorium('Малая', 10, 'Информатики'));

class Group {//создаём класс для групп студентов
    constructor(tl,qt,fc){
        this.title = tl;
        this.quantity = qt;
        this.facult = fc;
    }
}

const student = [];//создаём объект по сеудентам 
//Добавляем группы
student.push(new Group('1й курс', 13, 'Философии'));
student.push(new Group('2й курс', 8, 'Астрономии'));
student.push(new Group('3й курс', 18, 'Истории'));
student.push(new Group('4й курс', 4, 'Информатики'));



//1. Вывод на экран всех аудиторий
let audShow = function(facty = "all",seats = 0 ,arr = audit){ //создаём функцию, передаём ей (опционально: название факультета и количество мест), массив аудиторий
    const audList = document.querySelector('.audit-list')
    audList.innerHTML = ""
    arr.forEach(item => {
        if (facty === item.faculty && seats <= item.seating || facty === "all"){
        audList.innerHTML +=`<div>${item.audName}</div>`
        audList.innerHTML +=`<div>${item.seating}</div>`
        audList.innerHTML +=`<div>${item.faculty}</div>`
        }
    })

}

audShow()


//2. Вывод на экран аудиторий для указанного факультета.
const findFaculty = (fac) => audShow(fac)  //передаём в фуцкцию audShow название факультета
// findFaculty('Астрономии') 

//3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.

const findSeats = (group) =>{ //передаём группу и количество мест в функцию audShow
    for(let item of student){
        if(group === item.title){
            audShow(item.facult, item.quantity);
        }
    }
} 

// findSeats('3й курс')

//4. Функция сортировки аудиторий по количеству мест.

const audSort = () => {//создаём функцию, которая сравнивает объекты по признаку seating 
    audit.sort((a, b) => a.seating > b.seating ? 1 : -1); // и сортирует их по признаку: от большего к меньшему
    // audShow() //вызываем функцию audShow
}
// audSort()


//5. Функция сортировки аудиторий по названию (по алфавиту).

const abcSort = () =>{ //создаём функцию, которая сравнивает объекты по признаку faculty
    audit.sort((a, b) => a.faculty > b.faculty ? 1: -1);// и сортирует их по алфавиту
    audShow() //вызываем функцию audShow
}
abcSort()