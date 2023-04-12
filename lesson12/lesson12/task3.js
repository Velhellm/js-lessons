/*Создать html-страницу с блоком текста в рамочке. 
Реализовать возможность изменять размер блока, если зажать 
мышку в правом нижнем углу и тянуть ее дальше.*/

const position = {
    fstX: 0, //начальная позиция по оси X
    fstY: 0,  //начальная позиция по оси Y
    nextX: 0,  //следующая позиция по оси X
    nextY: 0,  //следующая позиция по оси Y
    width:400,
    height: 200,
    get deltaX(){return this.nextX - this.fstX}, //смещение по оси X
    get deltaY(){return this.nextY - this.fstY}, //смещение по оси Y
}
//Задаём начальные размеры элемента
const text = document.querySelector('.text')
text.style.width = `${position.width}px`
text.style.height = `${position.height}px`

//обработчик нажатия на кнопку
document.addEventListener('mousedown', (e) =>{
    position.fstX = position.nextX = e.pageX;
    position.fstY = position.nextY = e.pageY;
    //если курсор на треугольнике, то при смещении мыши запускается  событие mousemove
    if(e.target.className = 'triangle'){
        document.addEventListener('mousemove', move)
    }
})

//если кнопка отпущена, прекращаем событие mousemove
document.addEventListener('mouseup', (e) =>{
    document.removeEventListener('mousemove', move)
})

const move = (e) =>{
    position.fstX = position.nextX //предыдущая точка
    position.nextX = e.pageX; //слдующая точка
    position.width += position.deltaX; //смещение курсора
    text.style.width = `${position.width}px`//изменяем ширину объекта согласно полученным данным разницы предыдущего и следующего значений смещения курсора

    position.fstY = position.nextY
    position.nextY = e.pageY;
    position.height += position.deltaY;
    text.style.height = `${position.height}px`;
}