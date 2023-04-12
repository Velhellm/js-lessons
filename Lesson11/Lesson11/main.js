// ---------- Задачи с 1 по 3 работают совместно ----------// 

// 1. Создать html-страницу для ввода имени пользователя. Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input. 

const userInput  = document.querySelector('.input'); 
const userName = document.querySelector('.userName'); 

userInput.addEventListener('input', () => { 
    let output = userInput.value; 
    userName.innerHTML = output.match(/\D/gi).join(''); 
}); 



// 2. Создать html-страницу с кнопкой Открыть и модальным окном. На модальном окне должен быть текст и кнопка Закрыть. Изначально модальное окно не отображается. При клике на кнопку Открыть появляется модальное окно, на кнопку Закрыть – исчезает. 

const modal = document.querySelector('.modal_inv'); 
const open = document.querySelector('.open'); 
const close = document.querySelector('.close'); 

open.onclick = function() { 
    modal.style.display = "flex"; 
    userInput.focus(); 
} 

close.onclick = function(){ 
    modal.style.display = "none"; 
    userInput.value = ''; 
    userName.innerHTML = ''; 
}

//3. Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100 пикселей. Сделать так, чтобы при клике мышкой по полю, мяч плавно перемещался на место клика. Учтите: необходимо, чтобы центр мяча останавливался именно там где был совершен клик мышкой. Также предусмотрите, чтобы мяч не выходил за границы поля. 


const openField = document.querySelector('.get_play'); 
const closeField = document.querySelector('.closeField'); 
const field = document.querySelector('.footballField'); 
const ball = document.querySelector('.ball'); 

openField.onclick = function(){   //Отображение окна  
    field.style.display = "flex"; 
} 

closeField.onclick = function(){  //Закрытие окна 
    field.style.display = "none"; 
    alert(`Спасибо за игру!`) 
} 

let oldPosX = 0;  
let oldPosY = 0; 
let newPosX = 0; 
let newPosY = 0; 

field.onclick = function(e){    
oldPosX = newPosX;          //Координаты начального("старого") места мяча 
oldPosY = newPosY; 
newPosX = e.pageX -50;      //Координаты следующего ("нового") места мяча 
newPosY = e.pageY -50; 



const transition = setInterval(function(){ 

    let transitX = 0; 
    let transitY = 0; 

    //условие остановки функции, если старая посиция будет равна новой 
    if(oldPosX == newPosX || oldPosY == newPosY){  
        clearInterval(transition) 
    } 


    //вычисление плавности движения по оси X от старой метки к новой 
    if(Math.abs(newPosX-oldPosX) > Math.abs(newPosY-oldPosY)){   
        transitX = Math.abs(newPosX-oldPosX) / (Math.abs(newPosY-oldPosY) + 1);  
        transitY = 1; 
    } 


    //вычисление плавности движения по оси Y от старой метки к новой 
    if(Math.abs(newPosY-oldPosY) > Math.abs(newPosX-oldPosX)){   
        transitY = Math.abs(newPosY-oldPosY) / (Math.abs(newPosX-oldPosX) + 1); 
        transitX = 1; 
    } 


    //Движение по оси X 
    if((newPosX-oldPosX) > 0){    
    oldPosX += transitX; 
    }else{ 
        oldPosX -= transitX; 
    } 
    

    //Движение по оси Y 
    if((newPosY-oldPosY) > 0){    
        oldPosY += transitY; 
        }else{ 
            oldPosY -= transitY; 
    }     
    

    //условие, чтобы не выходил за пределы экрана по ширине 
    if(e.pageX + 100 > window.innerWidth){   
        newPosX = window.innerWidth - 100 
    }else if (e.pageX - 100 < 0) { 
    newPosX = 0 
    } else newPosX = e.pageX - 50 


    //условие, чтобы не выходил за пределы экрана по высоте 
    if(e.pageY + 100 > window.innerHeight){ 
        newPosY = window.innerHeight - 100 
    }else if (e.pageY - 100 < 0) { 
    newPosY = 0 
    } else newPosY = e.pageY - 50 


    ball.style.left = oldPosX + 'px'; 
    ball.style.top = oldPosY + 'px'; 
},1) 
};


//4. Создать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

const btn = document.querySelector('.lightBtn');
let i = -1;

btn.addEventListener('click',trafficLight = () =>{
    i++;
    let arr = ['red','orange','green'],
        round = document.querySelectorAll('.light');
    if(round[i-1]) round[i-1].style.backgroundColor = '';
    if(i == arr.length) i = 0;
    round[i].style.backgroundColor = arr[i];
})

//5. Создать html-страницу со списком книг. При щелчке на книгу, цвет фона должен меняться на оранжевый. Учтите, что при повторном щелчке на другую книгу, предыдущей – необходимо возвращать прежний цвет.

const list = document.querySelectorAll('.bookList ol'); 

function setSelected() {
// сначала удалим класс selected у всех элементов
document.querySelectorAll('.bookList ol.selected').forEach(function (el) {
el.classList.remove('selected');
});
this.classList.add('selected'); // и добавляем класс элементу на который кликнули
}

list.forEach(function(ol) {
ol.onclick = setSelected;
});