/*1. Создать html-страницу с несколькими кнопками. 
При наведении на кнопку, должна появляться подсказка с текстом. По умолчанию – подсказка появляется сверху от кнопки. Но 
если она не помещается сверху от кнопки, тогда отображается снизу*/

let notation;

document.onmouseover = function(event) {
let target = event.target;

// создайм условие для отображения подсказки
let tooltipHtml = target.dataset.tooltip;
if (!tooltipHtml) return;

// Создаём div, в котором будет отображаться подсказка
notation = document.createElement('div');
notation.className = 'tooltip';
notation.innerHTML = tooltipHtml;
document.body.append(notation);

// задаём позиционирование сверху по умолчанию
let coords = target.getBoundingClientRect();


//чтобы не заходило за левый край экрана зададим условие:
let left = coords.left + (target.offsetWidth - notation.offsetWidth) / 2;
if (left < 0) left = 0; 


// задаём условие, если подсказка не помещается сверху, то отображать её снизу
let top = coords.top - notation.offsetHeight - 5;
if (top < 0) { 
    top = coords.top + target.offsetHeight + 5;
}

notation.style.left = left + 'px';
notation.style.top = top + 'px';
};

document.onmouseout = function(e) {

if (notation) {
    notation.remove();
    notation = null;
}

};


/*2. Создать html-страницу с деревом вложенных директорий. 
При клике на элемент списка, он должен сворачиваться или 
разворачиваться. При наведении на элемент, шрифт должен становится жирным (с помощью CSS). */

document.addEventListener('click', (e) => {
    // если нажатый элемент является классом local
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('hidden')
    }
})

document.addEventListener('mouseover',  (e) => {
    if(e.target.className === 'textTarget'){
        e.target.classList.add('bold')
    }
})

document.addEventListener('mouseout', (e) =>{
    e.target.classList.remove('bold')
})

