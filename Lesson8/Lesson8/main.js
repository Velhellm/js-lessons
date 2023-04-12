//-----------------------------------------------Задача 1-----------------------------------------------// 

//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты: 
// - поле, хранящее радиус окружности; 
// -  get-свойство, возвращающее радиус окружности; 
// - set-свойство, устанавливающее радиус окружности; 
// - get-свойство, возвращающее диаметр окружности; 
// - метод, вычисляющий площадь окружности; 
// - метод, вычисляющий длину окружности. 
//Продемонстрировать работу свойств и методов 

// class Circle { 
//     constructor(rad){ //поле, хранящее радиус окружности; 
//         this.rad = rad; 
//     } 

//     get radius(){ //get-свойство, возвращающее радиус окружности; 
//         return this.rad; 
//     } 

//     set radius(rad){ //set-свойство, устанавливающее радиус окружности; 
//         this.rad = rad; 
//     } 

//     get diameter(){ //get-свойство, возвращающее диаметр окружности; 
//         return this.rad*2; 
//     } 
//     circleArea(){ 
//         return Math.PI * this.rad * this.rad; //метод, вычисляющий площадь окружности (воспользуемся свойством math.PI) 
//     } 

//     circumFerence(){ //метод, вычисляющий длину окружности(так же через свойство math.PI) 
//         return 2 * Math.PI * this.rad; 
//     } 
// } 

//   let circle = new Circle(5);   
//   console.log(circle.radius); 
//   console.log(circle.diameter); 
//   console.log(circle.circleArea().toFixed(2)); 
//   console.log(circle.circumFerence().toFixed(2));


//-----------------------------------------------Задача 2-----------------------------------------------// 


//Реализовать класс, описывающий html элемент. Класс HtmlElement должен содержать внутри себя: 
// - название тега; 
// - самозакрывающийся тег или нет; 
// - текстовое содержимое; 
// - массив атрибутов; 
// - массив стилей; 
// - массив вложенных таких же тегов; 

// - метод для установки атрибута; 
// - метод для установки стиля; 
// - метод для добавления вложенного элемента в конец текущего элемента; 
// - метод для добавления вложенного элемента в начало текущего элемента; 
// - метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов. 

//С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write(). 

class HtmlElement{ 
    constructor(tagName, closeTag ,innerText, attribute = [], style = [], nestedTag = []){ 
        this.tagName = tagName; 
        this.closeTag = closeTag; 
        this.innerText = innerText; 
        this.attribute = attribute; 
        this.style = style; 
        this.nestedTag = nestedTag; 
    } 
    
    get openTag(){ 
        let result = `<${this.tagName}`;
        result += this.setAtribute() + this.setStyle() + `>` ;
        return result 
    }; 

    setAtribute(){ 
        let result = '' 
        for( let item of this.attribute){ 
            result += item 
        } 
        return result 
    }; 
    
    setStyle(){ 
        let result = ' style="' 
        for(let item of this.style){ 
            result += item   
        } 
        return result +'"' 
    }; 

    nestedTags(){  
        let result = '' 
        for(let item of this.nestedTag){ 
            result += item.getHtml() 
        } 
        return result 
    }; 

    get closedTag(){ 
        if (this.closeTag){ 
            return '' 
        } 
        else{ 
        return `</${this.tagName}>`
        } 
    }; 

    getHtml(){ 
        return this.openTag + this.innerText + this.nestedTags() + this.closedTag 
    }; 
} 

let a = new HtmlElement('a',false,'More...',['href = "https://www.lipsum.com/"','target = "_blank"'],[],[]); 
let p = new HtmlElement('p', false, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore aut veritatis ipsum. Perspiciatis consequatur qui, corporis sint blanditiis corrupti nobis laboriosam voluptas, expedita animi dolore, eaque sed libero laudantium!',[],['text-align:justify;'],[a]); 
let img = new HtmlElement('img',true,'', ['src ="./Lprem Ipsum.jpg"', 'alt = "Lorem Ipsum"'],[],[]); 
let h3 = new HtmlElement('h3',false,'What is Lorem Ipsum?','',[],[],[]); 
let div2 = new HtmlElement('div',false, '', [], ['width:300px;','margin:10px;'], [h3, img, p] ); 
let div = new HtmlElement('div', false, '', ['id = "wrapper"'], ['display:flex;','text-align:center;'], [div2,div2]); 


//-----------------------------------------------Задача 3-----------------------------------------------// 


//Реализовать класс, который описывает css класс. Класс CssClass должен содержать внутри себя: 
// - название css класса; 
// - массив стилей; 
// - метод для установки стиля; 
// - метод для удаления стиля; 
// - метод getCss(), который возвращает css код в виде строки. 


class CssClass{ 
    constructor(className, stylesCss = []){ 
        this.className = className; 
        this.stylesCss = stylesCss; 
    } 

    styleIn(style){ // - метод для установки стиля; 
        return this.stylesCss.push(style) 
    }; 

    styleOut(){ // - метод для удаления стиля; 
        return this.stylesCss.pop() 
    } 

    getCss(){ // - метод getCss(), который возвращает css код в виде строки. 
        let result = '' 
        for(let item of this.stylesCss) { 
            result += item 
        }return this.className + '{' + result + '}' +'<br>' 
    } 
} 

const wrap = new CssClass('.wrap', ['display:flex;'] ); 
const block = new CssClass('.block',['width:300px,margin:10px;']); 
const image = new CssClass('.img', ['width: 100%;']); 
const text = new CssClass('.text',['text-align: justify;']); 
document.write(wrap.getCss()) 
document.write(block.getCss()) 
document.write(image.getCss()) 
document.write(text.getCss())

//-----------------------------------------------Задача 4-----------------------------------------------// 


//Реализовать класс, описывающий блок html документ. Класс HtmlBlock должен содержать внутри себя: 
// - коллекцию стилей, описанных с помощью класса CssClass; 
// - корневой элемент, описанный с помощью класса HtmlElement; 
// - метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом все html содержимое из корневого тега и его вложенных элементов). 

class HtmlBlock{ 
    constructor(CssClass,HtmlElement){ 
        this.CssClass = CssClass; 
        this.HtmlElement = HtmlElement; 
    } 

    getCode(){ 
        let result = '<style>' 
        this.CssClass.forEach((item) => { 
            result += item.getCss 
        }); 
        return result + '</style>' + div.getHtml() 
    } 
} 

const wrapper = new HtmlBlock([wrap,block,img,text],div) 
document.write(wrapper.getCode())