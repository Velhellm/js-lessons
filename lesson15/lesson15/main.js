/* -------------------------------------------------------------------------*/

/*5. Создать html-страницу, на которой пользователь может ввести номер месяца, год, и получить календарь на указанный месяц.
Календарь можно генерировать с помощью таблицы. Начальный день недели всегда должен быть понедельник. */

const form = document.querySelector('#form');
const button = form.querySelector('#button');
const monthIn = form.querySelector('#month');
const yearIn = form.querySelector('#year');

//нужно для начала узнать, с какого дня начинается месяц
const date = {
	year: 0,
	month: 0,
	get firstMonthDay() {
		const day = new Date(date.year, date.month - 1, 1).getDay();
		if (day === 0) {
			return 7;
		} else return day;
	},
	
	get lastMonthDay() {
		const day = new Date(date.year, date.month - 1, date.lastDayMonth).getDay();
		if (day === 0) {
			return 7;
		} else return day;
	},
	
	lastDayMonth: 0,
	months: ['', 'Январь', 'Февраль', 'Март', 'Апрель' , 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	week: ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'],
}

// Получаем данные из формы
const getDataForm = () => {
	
	if (document.querySelector('.table')) {
		document.querySelector('.table').remove();
		document.querySelector('h2').remove();
	}
	
	date.year = +yearIn.value;
	date.month = +monthIn.value;
	date.lastDayMonth = new Date(date.year, date.month, 0).getDate();
	getHtml();
}

const getHtml = () => {
	const h2 = document.createElement('h2');
	h2.textContent = `${date.year}, ${date.months[date.month]}`;
	form.append(h2);
	const content = document.querySelector('.content');
	const table = document.createElement('div');
	
	// добавляем заголовок таблицы
	table.classList.add('table');
	content.append(table);
	date.week.forEach(weekDay => {
		const div = document.createElement('div');
		div.classList.add('table__title');
		div.textContent = weekDay;
		table.append(div);
	});
	
	// пустые дни в начале месяца заменяем на "-"
	for (let i = 1; i < date.firstMonthDay; i++) {
		const div = document.createElement('div');
		div.classList.add('table__empty-day');
		div.textContent = '-';
		table.append(div);
	}
	
	// вставляем количество дней
	for (let i = 1; i <= date.lastDayMonth; i++) {
		const div = document.createElement('div');
		div.classList.add('table__day');
		div.textContent = `${i}`;
		table.append(div);
	}
	console.log(date.lastWeakDay)
	// по аналогии, заменяем пустые дни в конце месяца на "-"
	for (let i = 1; i <= 7 - date.lastMonthDay; i++) {
		const div = document.createElement('div');
		div.classList.add('table__empty-day');
		div.textContent = '-';
		table.append(div);
	}
}

button.addEventListener('click', getDataForm);


/* -------------------------------------------------------------------------*/


/* 6. Cоздать html-страницу со списком ссылок. Ссылки на внешние источники (которые начинаются с http://) необходимо подчеркнуть пунктиром. */

const reference = document.querySelectorAll('.task6__ref')
const regexp = /https?:\/\//;
reference.forEach(ref => {
	if (regexp.test(ref.textContent)) {
		ref.style.borderBottom = "2px dashed blue"
	}
})


/* -------------------------------------------------------------------------*/


/** Задание 7
создать html-страницу со списком книг. При щелчке на элемент, цвет текста должен меняться на оранжевый. При повторном щелчке на другую книгу, предыдущей необходимо возвращать прежний цвет. Если при клике мышкой была зажата клавиша Ctrl, то элемент добавляется/удаляется из выделенных. Если при клике мышкой
была зажата клавиша Shift, то к выделению добавляются все элементы в промежутке от предыдущего кликнутого до текущего.*/

const li = document.querySelectorAll('.books')
// используем атрибут data для нумерации списка
for (let i = 0; i < li.length; i++) {
	li[i].setAttribute('data-li', i + 1)
}
let previousClick = 0;
let currentClick = 0;

document.addEventListener('click', (e) => {
	previousClick = +currentClick;
	currentClick = +e.target.dataset.li
	
	let minClick;
	let maxClick;
	
	if (previousClick >= currentClick) {
		maxClick = previousClick;
		minClick = currentClick;
	} else {
		maxClick = currentClick;
		minClick = previousClick;
	}
	// подключаем свойство active с нажатым Ctrl
	if (e.target.classList.contains('books') && e.ctrlKey) {
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active')
		} else {
			e.target.classList.add('active')
		}
		// добавляем shift
	} else if (e.target.classList.contains('books') && e.shiftKey) {
		document.getSelection().removeAllRanges(); // отключаем выделение текста с помощью shift
		li.forEach(item => {
			if (item.dataset.li >= minClick && item.dataset.li <= maxClick) {
				item.classList.add('active')
			}
		})
	} else if (e.target.classList.contains('books')) {
		li.forEach(item => {
			item.classList.remove('active')
		})
		e.target.classList.add('active')
	}
})


/* -------------------------------------------------------------------------*/


/*8. Cоздать html-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl+E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При
нажатии Ctrl+S, вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш. */

const txt = {
	// создаём переменную, в которой хранится наш текст
	value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus amet, doloremque doloribus ea eius' +
		' excepturi facilis fugit impedit inventore iste iusto laboriosam magnam necessitatibus neque nostrum,' +
		' obcaecati odit optio qui quis quos repellendus rerum sed similique tempore temporibus vel veniam! Architecto' +
		' cumque earum expedita, fugit libero qui tempore voluptatum.',
	
	// добавляем метод для вывода на экран элемента
	show(elem) {
		// сохраняем значение и удаляем старый элемент
		if (!!document.querySelector('.task8__text')) { // проверяем, существует ли элемент
			const oldElem = document.querySelector('.task8__text')
			if (oldElem.tagName === "TEXTAREA") { // если элемент равен значению textarea
				txt.value = oldElem.value     //то сохраняем значнние
			}
			oldElem.remove()     // удаляем элемент
		}
		const newElement = document.createElement(elem)
		newElement.classList.add('task8__text')
		newElement.textContent = txt.value
		root.append(newElement)
	},
	// обработчик нажатия клавиш
	processAClick(e) {
		if (e.code === 'KeyE' && e.ctrlKey) {
			e.preventDefault()
			txt.show('textarea')
		} else if (e.code === 'KeyS' && e.ctrlKey) {
			e.preventDefault()
			txt.show('div')
		}
	}
	
	
};
const root = document.querySelector('#root')
txt.show('div')
document.addEventListener('keydown', txt.processAClick)


/* -------------------------------------------------------------------------*/


/*9. Создать html-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Например: на скриншоте люди отсортированы по возрасту. Учтите, что числовые значения должны сортироваться как числа, а не как строки. */
class Person {
	constructor(firstName, lastName, age, books) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.books = books;
	}
}
const personList = [
	new Person('Дэн', 'Абнетт', 57,'"Ересь Хоруса", Цикл'),
	new Person('Уильям', 'Кинг', 63,'"Космический Волк Рагнар", Антология'),
	new Person('Грэм', 'МакНилл', 52,'"Железные Воины", Цикл'),
	new Person('Сенди', 'Митчелл', 64,'"Комиссар Каин", Цикл'),
	new Person('Крис', 'Райт', 58,'"Повелители тишины"'),
	new Person('Дариус', 'Хинкс', 52,'"Мефистон", Цикл'),
	new Person('Ли', 'Лайтнер', 48,'"Сыны Фенриса"'),
	new Person('Бэн', 'Каунтер', 44,'"Испивающие души", Цикл'),
];
// добавляем данные для заголовка
const title = [
	{id: 'firstName', name: 'Имя', type: 'string'},
	{id: 'lastName', name: 'Фамилия', type: 'string'},
	{id: 'age', name: 'Возраст', type: 'number'},
	{id: 'books', name: 'Книги', type: 'string'},
]
class PersonTable {
	constructor(personList) {
		this.personList = personList;
	}
	// формируем html код таблицы
	getHtml() {
		const root = document.querySelector('#task9-root');
		const table = document.createElement('div');
		table.classList.add('task9__table');
		
		// заголовок таблицы
		title.forEach(object => {
			const div = document.createElement('div');
			div.id = object.id;
			div.textContent = object.name;
			div.setAttribute("data-type", object.type)
			div.className = 'task9__title task9__grid';
			table.append(div);
		})
		// строки таблицы
		for (let i in personList) {
			for (let j in personList[i]) {
				const div = document.createElement('div');
				div.textContent = personList[i][j];
				div.classList.add('task9__grid')
				table.append(div)
			}
		}
		root.append(table)
	}
	// сортировка таблицы
	sortTable(e) {
		if (e.target.classList.contains('task9__title')) {
			// для сортировки по алфавиту
			if (e.target.dataset.type === "string") {
				personList.sort((a, b) => (a[e.target.id]).localeCompare(b[e.target.id]));
				// для сортировки чисел
			} else if (e.target.dataset.type === "number") {
				personList.sort((a, b) => a[e.target.id] - b[e.target.id]);
			}
			const oldTable = document.querySelector('.task9__table')
			oldTable.remove();
			table1.getHtml();
		}
	}
}

const table1 = new PersonTable(personList);
table1.getHtml()

const clickTitle = document.querySelectorAll('.task9__title')
clickTitle.forEach(item => {
	addEventListener('click', table1.sortTable)
})
