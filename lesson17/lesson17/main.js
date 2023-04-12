/*------------------------------- task 1 -----------------------------------*/ 
// Создать html-страницу со списком сообщений на форуме и формой для добавления нового сообщения. После заполнения формы добавить сообщение к списку на экране. 


//получаем доступ к элементам html 
const button = document.querySelector(".btn"); 
const inpName = document.querySelector(".user-Name"); 
const inpMessage = document.querySelector(".message"); 
const container = document.querySelector(".container"); 
const alert = document.querySelector(".alert") 

//навешиваем событие на кнопку 
button.addEventListener("click", () => { 
    if (inpName.value&&inpMessage.value) { //если заполнены оба поля 
        //добавляем иначения полей в div 
        container.insertAdjacentHTML("beforeend", `<p>${inpName.value}<br>${inpMessage.value}</p>`);  
        //очищаем поля 
        inpName.value = ""; 
        inpMessage.value = ""; 
        clearAlert() 
    }else{//иначе выводим сообщение об ошибке 
        // container.insertAdjacentHTML("beforeend", `Введите имя и сообщение`); 
        alert.innerHTML += `Введите имя и сообщение`; 
    } 
    clearAlert = ()=> { //очищаем сообщения об ошибке 
        alert.innerHTML = " " 
    } 
}); 



/*------------------------------- task 2 -----------------------------------*/ 
//Создать html-страницу для прохождения теста. Вопросы теста имеют два варианта ответа (только 1 правильный). После прохождения теста, вывести количество правильных ответов. 

//создаём класс для вопросов 
class Queries { 
    constructor(question, ans1, ans2, correctAnswer) { 
        this.question = question; 
        this.ans1 = ans1; 
        this.ans2 = ans2; 
        this.correctAnswer = correctAnswer; 
    } 
} 

//добавляем массив с вопросами 
const quests = [ 
    new Queries("Что с сосисками, Чарли?", "Уже давно готовы", "5 минут, Турецкий", 2), 
    new Queries("Пьосыки! Любишь пьосыков?", "Аааа, собаааки", "Я тебя не понимаю", 1), 
    new Queries("Почему его зовут Френки 'четыре пальца'?", "Потому, что у него, б#$%ь, четыре пальца!", "Его никто так не зовёт!", 1), 
    new Queries("Почему его зовут 'Хрен попадёшь'?", "Его зовут Борис 'Бритва'", "Потому, что в него хрен попадёшь!", 2), 
    new Queries("В Лондоне?", "Нет, в Париже", "В Лондоне!", 2), 
    new Queries("Они что, цыгане?", "Хорошие они ребята!", "Ненавижу, б#$%ь, цыган!", 2), 
] 


const html = { 
 correctCount: 0, //счётчик правильных ответов 
 count: 0, //счётчик вопросов 

    showQuestion() {//функция для выведения вопроса 
        if(this.count === quests.length){ //если вопросы закончились - выводим результат 
            this.result() 
        }else{ //иначе выводим вопрос, варианты ответов и кнопку 
        const form = document.forms.form1 
        form.innerHTML = ` 
            <p>${this.count + 1}) ${quests[this.count].question}</p> 
                <div> 
                <input type="radio" name="answer" data-answer="1"><span>${quests[this.count].ans1}</span> 
                </div> 
                <div> 
                <input type="radio" name="answer" data-answer="2"><span>${quests[this.count].ans2}</span> 
                </div> 
                <button name="button" class="btn">${(this.count < quests.length - 1) ? 'Следующий' : 'Результат'}</button>` 
        }    
    }, 

 clickBtn(e) { //навешиваем событие 
        const form = document.forms.form1 
  let check = 0 //счётчик проверки ответов 
        if (e.target.name === 'button') { 
            e.preventDefault() 
            const radio = document.forms.form1.answer 
   radio.forEach(rad => { //считываем выбранный ответ   
    if (rad.checked) { 
                    check++ 
     if (+rad.dataset.answer === +quests[html.count].correctAnswer) { //сравниваем с правильным 
      html.correctCount++ //плюсуем счётчик, если ответ правильный 
        } 
        html.count++ 
        html.showQuestion() 
                }   
            }) 
            if(check === 0){ //выводим сообщение, если ответ не выбран 
                form.innerHTML+= `<span>Выберите вариант ответа</span>`
            } 
        } 
    }, 
    result(){//вывод результата 
        const form = document.forms.form1 
        form.innerHTML += `<span>${html.correctCount} правильных ответов</span>` 
    }
} 

html.showQuestion() 
document.addEventListener('click', html.clickBtn) 


/*------------------------------- task 3 -----------------------------------*/ 
//Создать html-страницу с формой для ввода стилизованного текста. После заполнения формы, вывести текст на экран в соответствии с указанными стилями. 


const userText = document.querySelector('#textArea'); 
const showBtn = document.querySelector('.showBtn'); 
const textForm = document.forms.textStyles.elements.fontStyle; 
const textResult = document.querySelector('.textResult') 

showBtn.addEventListener('click',()=>{ 
    textForm.forEach(check => { 
        if(check.checked){ 
            textResult.classList.add(check.dataset.set) 
        } 
    }) 
    textResult.textContent = userText.value 
})