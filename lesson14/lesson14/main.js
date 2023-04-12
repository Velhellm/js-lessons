//Оставь надежду всяк сюда входящий... 

/*1. Создать html-страницу с трекбаром. 
Предоставить пользователю возможность изменять положение 
синего указателя.*/ 

const square = document.querySelector('#stripSquare'); 
const strip = document.querySelector('#sliderStrip'); 

const position = { 
    fstX: 0, //начальная позиция по оси X 
    nextX: 0,  //следующая позиция по оси X 
    newPos: 0, 
    get deltaX(){return this.nextX - this.fstX}, //смещение по оси X 
    stopper: 260, 
} 

square.style.left = 0; 

square.addEventListener('mousedown', (e) =>{ 
    position.fstX = position.nextX = e.pageX; 
    if(e.target.className = 'strip-square'){ 
        document.addEventListener('mousemove', move) 
    } 
}) 

document.addEventListener('mouseup', (e) =>{ 
    document.removeEventListener('mousemove', move) 
}) 

const move = (e) =>{ 
    position.fstX = position.nextX //предыдущая точка 
    position.nextX = e.pageX; //слдующая точка 
    position.newPos +=position.deltaX 
    square.style.left = position.newPos + 'px'  
    if(position.newPos < 1){ 
        square.style.left = 0 
    } 
    if(position.newPos >= position.stopper){ 
        square.style.left = position.stopper + 'px' 
    }    
} 

/*-----------------------------------------------------------------------------*/ 

/*2. В один момент времени на экране отображается одно изо- 
бражение и две кнопки: Назад и Вперед. При нажатии на кнопки 
изображения должны переключатся в указанном порядке. Когда 
следующего/предыдущего изображения нет, то соответствующую 
кнопку необходимо блокировать. Изображения хранить в заранее 
подготовленном массиве.*/ 

const gallery = { 
src: 0, imgArray: ['./img/kote.jpg', './img/matrix.jpg','./img/nightCity.jpg'], 

 // устанавливает изображение 
set img(path) { 
const img = document.querySelector('#img'); 
img.setAttribute('src', path); 
}, 

 /** проверяем, если текущее положение крайнее, делаем стрелку не активной */ 
checkArrow() { 
const back = document.querySelector('.gallery__back'); 
const ff = document.querySelector('.gallery__forward'); 
if (gallery.src < 1) { 
back.classList.add('disable'); 
} else { 
back.classList.remove('disable'); 
} 

if (gallery.src >= gallery.imgArray.length - 1) { 
ff.classList.add('disable'); 
} else { 
ff.classList.remove('disable'); 
} 
}, 

arrowClick: (e) => { 
  // если нажата кнопка назад 
if (e.target.dataset.arrow === 'back') { 
    if (gallery.src > 0) { 
    gallery.src--; 
    gallery.img = gallery.imgArray[gallery.src]; 
    gallery.checkArrow(); 
} 
   // если нажата кнопка вперед 
} else if (e.target.dataset.arrow === 'ff') { 
if (gallery.src < gallery.imgArray.length - 1) { 
    gallery.src++; 
    gallery.img = gallery.imgArray[gallery.src]; 
    gallery.checkArrow(); 
} 
} 
} 
} 

gallery.img = gallery.imgArray[gallery.src]; 
gallery.checkArrow(); 

const arrow = document.querySelectorAll('.arrow'); 

arrow.forEach(btn => { 
btn.addEventListener('click', gallery.arrowClick); 
})

/*-----------------------------------------------------------------------------*/ 

/*3. Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может быть развернут только один блок информации. */ 

document.addEventListener('click', (e) => { 
    if (e.target.classList.contains('info__title')) { 
     // если целевой объект имеет класс hidden 
    if (e.target.classList.contains('hidden')) { 
      // перебираем все объекты с классом info__title 
    const titles = document.querySelectorAll('.info__title'); 
    titles.forEach(element => { 
       element.classList.add('hidden'); // и добавляем класс hidden всем 
    }) 
      e.target.classList.remove('hidden'); // потом убираем у нужного класса 
    } else { 
    e.target.classList.add('hidden'); 
    } 
    } 
}); 
    
    
/*-----------------------------------------------------------------------------*/ 
    
/*4. Создать html-страницу с новостями. Необходимо отлавливать, когда скролл доходит до конца страницы, и догружать еще новости в список. Новости для подгрузки хранить в заранее подготовленном массиве. 
Облегченный вариант: вместо отлова, когда скролл дойдет до конца страницы, используйте кнопку в конце списка новостей. */ 
    
const news = { 
    newsArray: [ //создаём массив с новостями
    
    { 
    title: 'What is Lorem Ipsum?', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' + 
    ' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' + 
    ' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.', 
    }, 
    { 
    title: 'Why do we use it?', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' + 
    ' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' + 
    ' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.', 
    }, 
    { 
    title: 'Where does it come from?', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' + 
    ' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' + 
    ' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.', 
    }, 
    { 
    title: 'Where can I get some?', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' + 
    ' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' + 
    ' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cumeius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.', 
    }, 
    
    ], 
    currentNews: 0, 
    

    //создание макета отображения новостей 
    addNews() { 
    const section = document.createElement('section') 
    section.classList.add('news') 
    const title = document.createElement('h2') 
    title.classList.add('news__title') 
    const text = document.createElement('p') 
    text.classList.add('news__text') 
    section.append(title) 
    section.append(text) 
    

    //алгоритм отображения новостей по номеру из массива
    if (news.currentNews < this.newsArray.length) { 
    title.textContent = this.newsArray[news.currentNews].title 
    text.textContent = this.newsArray[news.currentNews].text 
    this.currentNews++
    } else { 
    title.textContent = "Новостей больше нет" 
    this.currentNews = 0
    } 
    const task4 = document.querySelector('.task4')
    task4.append(section) 

    const button = document.createElement('button')
    button.classList.add('nextNews')
    button.textContent = 'Следующая новость'
    task4.append(button)
    }, 
    
    //добавление следующей новости 
    nextNews(e) { 
        if(e.target.classList.contains('nextNews')){
            news.addNews()
        }
    }
}


document.addEventListener('click',news.nextNews)
news.addNews()

//Задача № 5 будет во второй половине ДЗ (времени оч.мало, не успеваю)