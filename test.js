let a='1';
let b='d'
let s='100'
let l='iere2'


let n=5;
let u=84334.234;

let c= Number(a)/0
 // Number(a) превращает строку в число
console.log(c)
//вывод в консоль

//складывание строк
let d= a+b
console.log(d)
console.log(typeof d)
//typeof выводит тип переменной

let f= s-a
console.log(d)

//тип object(массив)
let arr = [1,4]
console.log(typeof arr)
console.log(arr)

//добавление объектов в массив
arr.push(5)
console.log(arr)

//можно добавлять и строки
arr.push('fg')
console.log(arr)

//добавление элементов в начало массива
arr.unshift(2)
console.log(arr)

//переменная забирает первый элемент массива
//const - тип переменной которую нельзя будет поменять( res=1 нельзя будет написать)
const res=arr.shift()
console.log(res)
console.log(arr)

//замена первого элемента массива(по индексу он равен 0) на другое число
arr[0]=9
console.log(arr)

//вывод количества элементов массива
console.log(arr.length)

let mas = [1,2]
console.log(mas.length)
console.log(mas)

//цикл в

for(let j=0; j<100; j++){
    let num=[]
    for(let i=0; i<100; i++){
        num.push(i)
    }
}
//это выдаст ошибку тк эту переменную мы создали в цикле.
// Переменные которые создаются в цикле не сохраняются
//console.log(num)

const arr3 = [1,2,3]
//объект v это ссылка на arr3
const v = arr3
console.log('arr3',arr3)
console.log('v',v)

//добавление числа в массив arr3
arr3.push(6)
console.log('arr3',arr3)
//объект v так же изменится тк объект v это ссылка на объект
console.log('v',v)

const testarr =[1,2,3]
let testarr2 = [1,2,3]
//так нельзя
//testarr = []
//так можно
testarr2=[]


// объекты

const person2 = {
    name: 'Sara',
    age: 18,
}

const person1 = {
    name: 'Anton',
    age: 18,
    group: '607',
    //создание массива
    children: [
        {
        name: "denisik",
        age: 15
        },
        {
        name: "dimasik",
        age: 2
        }
    ],
    //ссылка на объект
    wife: person2
}
console.log(person1)

// объекты в строку (теперь он json и его можно перенести(НПРИМЕР В ДРУГОЙ ЯЗЫК ПРОГРАММИРОВАНИЯ))
const data = JSON.stringify(person1)
console.log(data)
//сделаем из строки обратно объект
const newdata = JSON.parse(data)




const text = 'awawefwe "wefwewfe" '
const text1 = "weoojwei 'ergerge' ergerg"
//вывод переменных прямо в тексте
const text2 = ` первый пример: ${a+b} ? ${a-b}`
console.log(text2)

// сложение строк, \n - переход к новой строкеы
let deff = ''
deff+= 'seergerg' +' ' + text +'\n'
console.log(deff)



//функция с названием getsecret берет на вход значение и дает ему имя age
function getSecret(age){
    //если  age меньше 18
    if (age<18){
        console.log('Доступ запрещен')
    }
    //в любом другом случае
    else{
        console.log("Доступ есть")
    }
}
//вызов функции (можно вызывать сколько угодно раз)
getSecret(10)
getSecret(19)

//новая функция
function GetNewSecret(age){
    if (age<18){
        //функция возвращает false
        return false
    }
    else{
        //функция возвращает true
        return true
    }
}
const znachenie = GetNewSecret(20)
console.log(znachenie)

const testfunc = function(age){
    if (age<18){
        return false
    }
    else{
        return true
    }   
}
console.log(testfunc(10))

//const btn = getBTN()

let counter = 0


console.log(window)
console.log(document)
//поиск дива по айди
const div = document.getElementById("dev-el")
//поиск кнопки по классу
const btnarr = document.getElementsByClassName("btn-el")

//вывод что содержит див
console.log(div);

//замена текущего значения в диве
div.innerText = `Clicked ${counter} times`    
//обработка нажатия по кнопке
btnarr[0].addEventListener('click', ()=> {
    //изменение текста с увеличением переменной
    div.innerText=`Clicked ${++counter} times`
})