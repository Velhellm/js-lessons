class Palette {
    constructor(colorName, type, colorCode) {
     this.colorName = colorName;
     this.type = type;
     this.colorCode = colorCode;
    }
   }
   
   const palet = [
    new Palette("RotGreen", "RGB", "RGB(125, 129, 19)"),
    new Palette("BoneWhite", "RGBA", "RGBA(195, 168, 150, 0.7)"),
    new Palette("Violet", "HEX", "#C825DF")
   ]
   
   const form = document.forms.form;
   // задаём элементы формы
   const name = form.colorName;
   const type = form.type;
   const code = form.colorCode;
   const button = form.button;
   // поля для вывода сообщений
   const messageName = document.querySelector('.messName')
   const messageCode = document.querySelector('.messCode')
   
   // Проверка полученного значения
   const validValue = (e) => {
    // если введенное значение в поле name не состоит только из букв
    if (!(/^[A-Z]+$/i).test(name.value)) {
     e.preventDefault()
     //выводим подсказку
     messageName.textContent = "Задайте название используя только буквы"
     // если выбран тип RGB
    } else if (type.value === 'RGB') {
     // если проверяемый код не соответствует маске [0-255],[0-255],[0-255]
     if (!(/\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])[(\s)|(,)]+([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])[(\s)|(,)]+([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/.test(
      code.value))) {
      e.preventDefault()
      //выводим подсказку
      messageCode.textContent = `Задайте цвет по шаблону :0-255, 0-255, 0-255`
      // если соответствует, сохраняем значение в cookies
     } else {
      saveCookie()
     }
     // если выбран тип RGBA
    } else if (type.value === 'RGBA') {
     if (!(/\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])[(\s)|(,)]+[\s+]?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])[(\s)|(,)]+[\s+]?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])[(\s)|(,)]+[\s+]?([0-1]?(?:\.\d+)?)\b/.test(
      code.value))) {
      e.preventDefault()
      //выводим подсказку
      messageCode.textContent = `Задайте цвет по шаблону: 0-255, 0-255, 0-255, 0-1`
     } else {
      saveCookie()
     }
     // если выбран тип HEX
    } else if (type.value === 'HEX') {
     if (!(/^#[0-9a-fA-F]{6}$/.test(code.value))) {
      e.preventDefault()
      messageCode.textContent = `задайте цвет по шаблону #123abc 6 hex цифр`
      // если соответствует, сохраняем значение в cookies
     } else {
      saveCookie()
     }
    }
   }
   
   const saveCookie = () => {
    document.cookie = `${name.value} = ${type.value}_${code.value}; max-age=10800;`
   }
   
   
   // Получаем сохраненные cookie и сохраняем в массив с цветами
   const cookieParse = () => {
    if (document.cookie === '') {
     console.log('no cookie')
    } else {
     const arrayCookie = document.cookie.split(/; /)
     arrayCookie.forEach(cookie => {
      const newColor = cookie.split(/[=_]/)
      // RGB и RGBA преобразовываем к в стандарт CSS
      const rgbSplit = newColor[2].split(/[(\s),]+/)
      newColor[2] = rgbSplit.join(', ')
      if (newColor[1] === 'RGB') newColor[2] = 'RGB(' + newColor[2] + ')';
      if (newColor[1] === 'RGBA') newColor[2] = 'RGBA(' + newColor[2] + ')';
      palet.push(new Palette(newColor[0], newColor[1], newColor[2]))
     })
    }
   }
   
   // выводим на экран палитру
   const showPallet = () => {
   const palette = document.querySelector('.palette')
    palet.forEach(color => {
     // блок с цветом
     const colorBox = document.createElement('div')
     colorBox.classList.add('colorBox')
     colorBox.style.backgroundColor = `${color.colorCode}`
     // блок с информацией
     const infoBox = document.createElement('div')
     infoBox.classList.add('infoBox')
     infoBox.innerHTML = `
      <p>${color.colorName}
      <p>${color.type}
      <p>${color.colorCode}`;
     colorBox.append(infoBox)
     palette.append(colorBox)
    });
   }
   cookieParse()
   showPallet()
   button.addEventListener('click', validValue)