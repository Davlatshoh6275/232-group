// // && = va // || = yoki

// // let a = 10
// // let b = 16

// // if (a === 10 && b === 15) {
// //     // true
// //     console.log(true);
// // } else {
// //     //  false
// //     console.log(false);
// // }


// // if (a === 10 || b === 15) {
// //     console.log(true);
// // } else {
// //     console.log(false);
// // }


// let login = prompt("create new login")
// let password = prompt("create new password")

// if (login.trim() !== '' && password.trim() !== '') {
//     alert('true')

//     let l = prompt('write your login')
//     let p = prompt('write your password')

//     if (login === l.trim() && password === p.trim()) {
//         alert('welcome')
//     } else {
//         alert('user is not defined!!!')
//     }

// } else {
//     alert("false")
// }



// array / object


// let arr = [
//     "salom",
//     81,
//     true,
//     false,
//     "Xayr",
//     {},
//     {},
//     [],
//     [], [],
//     NaN,
//     null,
//     undefined
// ]

// console.log(arr);
// // console.log();

// console.log(
//     arr[3]
// );



// console.log(names);


// console.log(numbers);

// console.log(names[4]);


// let a = "Alex"

// a = "Aleksandr"

// console.log(a);

// names[5] = "Aleksandr"

// console.log(names[5]);
// console.log(names);





// // console.log(numbers);

// let a = numbers.sort((a, b) => a - b)
// let b = numbers.sort()

// console.log(
//     a
// );

// console.log(
//     names.sort()
// );

// element qushish

// let numbers = [1, 515, 5, 1, 5, 1, 51, 6, 51, 6, 51, 1, 651, 6, 51]

// names.unshift('Ahmed')
// names.unshift('Mehmed')

// names.push("Davlatshoh")
// names.push("Alisa")

// // elementni uchirish

// names.pop()
// names.shift()

// qidirish

// names.indexOf("Samir")
// // names.find("Samir")

// console.log(numbers);

// let filteredNumbers = numbers.filter(item => item < 50)

// console.log(filteredNumbers);

// names.splice(3, 1, "Qodir")

// console.log(names);


// let name = prompt('write name which you want delete...')

// let names = ["Ahmadbek", "Jasur", "Samir", "Javohir", "Ilhom", "Alex", "Alex"]

// console.log(names);

// names.filter(item => {
//     if (item === name) {
//         let i = names.indexOf(item)
//         names.splice(i, 1)
//     } else {
//         return names
//     }
// })

// console.log(names);

// let ind = prompt('write index if you want delete someone...')
// if (ind.trim() === '') {
//     ind = prompt('write index if you want delete someone...')
// } else {
//     names.splice(ind, 1)
// }
// console.log(names);




// if = agar

// if(shart) {
//     true
// } else {
//     false
// }

// if(shart) {
//     true 
// } else if(shart) {
//     true
// } else {
//     false
// }


// || = yoki / && = va

// if (shart && shart && shart) {
//     true = qachonki ikkala shartimham true qaytarsagina
// } else {
//     false
// }



// if (shart || shart || shart) {
//     true
// } else {
//     false
// }


// if (shart) {
//     true
// }


// let a = 5

// for (let i = 0; i < 10; i++) {
//    if (i === a) {
//     console.log("Salom");
//    }

// }

// let names = [
//     "Alex",
//     "Alisa",
//     "Alex",
//     "George"
// ]

// let alex = []


// let a = "10"

// if (a === 10) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// let name = "Alex"

// if (name === "alex" && a == "10") {
//     console.log(true);

// } else {
//     console.log(false);

// }




// Object = malumbir elementning tuliq malumotlari
// Object = { key / nomi : "qiymat" }


// let shkof = {
//     polka: 4,
//     eshig: 2,
//     ruchka: 4,
//     tortma: 2,
//     yangi: true,
//     price: "120 $",
//     delivery: false
// }


// console.log(shkof);
// console.log(shkof.price);

// shkof.price = "150$"

// console.log(shkof);
// console.log(shkof.price);

// shkof.owner = 'Chikko'


// let a = [[[], [[{ t: "Davlatshoh" }]], [], [[[{ n: { b: [{ s: "salom" }] } }]], [[{ d: "mening" }]],],], { h: 'ismim' }]

// console.log(a[0][1][0][0].t);



// loop = for // for of // for in // while // do while

// let a = 0


// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// let numbers = [61, 484, 84, 84, 9, 4, 1, 26, 8, 99, 4]
// let juft = []
// let toq = []

// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         juft.push(numbers[i])
//     } else {
//         toq.push(numbers[i])
//     }
// }

// console.log(juft);
// console.log(toq);


// let names = [
//     "Alex",
//     "Alisa",
//     "Akpar",
//     "Ahmed",
//     "Bahodir",
//     "Bahrom",
//     "Doniyor",
//     "Amir"
// ]

// let a = []
// console.log(names);


// for(let i = 0; i < names.length; i++) {
//     if(names[i].charAt() === "A") {
//         a.push(names[i])
//     }
// }

// console.log(a);


// let txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptas distinctio accusamus deleniti at corrupti, quia inventore vel saepe! Sint assumenda amet, laudantium hic inventore impedit exercitationem autem animi ooooooo o ooo o oo o oo o labore!"
// console.log(txt);

// let t = txt.toLowerCase().split('')

// let o = []

// for (let i = 0; i < t.length; i++) {
//     if (t[i] === 'o') {
//         o.push(t[i])
//     }
// }

// Math.min(o.length, s.length,)
// console.log('text ichida ' + o.length + ' ta o bor');


// let users = [
//     {
//         name: "Alex",
//         age: 18
//     },
//     {
//         name: "Alex",
//         age: 18
//     },
//     {
//         name: "Alex",
//         age: 18
//     },
//     {
//         name: "Alex",
//         age: 18
//     },
//     {
//         name: "Alex",
//         age: 25
//     },
//     {
//         name: "Alex",
//         age: 10
//     },
//     {
//         name: "Alex",
//         age: 60
//     },
//     {
//         name: "Alex",
//         age: 45
//     },
//     {
//         name: "Alex",
//         age: 17
//     },
//     {
//         name: "Alex",
//         age: 18
//     },
//     {
//         name: "Alex",
//         age: 18
//     },
// ]

// let katta = []
// let kichik = []



// let a = [4, 94, 94, 9, 9, 4, 9, 8, 48, 488]
// let b = [15, 84, 89, 94, 94, 98, 491, 9, 9, 9, 9, 984]

// let birXil = []

// for (let i = 0; i < a.length; i++) {
//     // console.log(a[i]);
//     for (let k = 0; k < b.length; k++) {
//         if (a[i] === b[k]) {
//             birXil.push(a[i])
//         }
//     }
// }

// // console.log(birXil);


// let names = ['Alisa', "Rano", "Anis", "Ilhom", "Jahongir", "Javohir", "Samir", "Jasur", "Kamola", "Dilnoz", "Dilafruz", "Dildora", "Lalitto", "Lola", "Dilbar", "Diyora", "Shaxrizoda",
//     "Sarvinoz", "Shaxina", "Sitora"]

// let users = [
//     {
//         name: 'Alisa',
//         money: 5000,
//         gender: 'female'
//     },
//     {
//         name: 'Rano',
//         money: 500,
//         gender: 'female'
//     },
//     {
//         name: 'Anis',
//         money: 3000,
//         gender: 'male'
//     },
//     {
//         name: 'Ilhom',
//         money: 2000,
//         gender: 'male'
//     },
//     {
//         name: 'Jahongir',
//         money: 900,
//         gender: 'male'
//     },
//     {
//         name: 'Samir',
//         money: 50,
//         gender: 'male'
//     },
//     {
//         name: 'Jasur',
//         money: 700,
//         gender: 'male'
//     },
//     {
//         name: 'Kamola',
//         money: 54800,
//         gender: 'female'
//     },
//     {
//         name: 'Dilnoz',
//         money: 540,
//         gender: 'female'
//     },
//     {
//         name: 'Dilafruz',
//         money: 560,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
//     {
//         name: 'Dildora',
//         money: 90,
//         gender: 'female'
//     },
// ]


// // let genders = {
// //     male: 0,
// //     female: 0
// // }

// let total = 0

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     if (users[i].gender === 'female') {
//         genders.female = ++genders.female
//     } else {
//         genders.male = ++genders.male
//     }

//     total += users[i].money
// }

// console.log(genders);
// console.log(total);

// let genders = []

// let names = ['Alisa', "Rano", "Anis", "Ilhom", "Jahongir", "Javohir", "Samir", "Jasur", "Kamola", "Dilnoz", "Dilafruz", "Dildora", "Lalitto", "Lola", "Dilbar", "Diyora", "Shaxrizoda",
//     "Sarvinoz", "Shaxina", "Sitora"]


// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// for(let item of names) {
//     console.log(item);
// }

// for(let item in names) {
//     console.log(item);
// }



// function

// let a = prompt("write name")

// function sayHi(a) {
//     // console.log(`hi ${name}`);
//     console.log(a);
//     // console.log(b);
//     // console.log(c);
// }

// // sayHi("salom", "hello", 15, 15, 48, false, true, "salom")
// sayHi("salom")
// sayHi(5)

// for(let i = 0; i < 10; i++){
// }

// let a = "salom"



// function Click(o) {
//     console.log(o);
// }


// let click = function() {
//     console.log("salom");
// }

// window.addEventListener('click', () => {
//     // Click(a)
//     click()
// })

// let btn = document.querySelector('button')

// btn.onclick = () => {
//     console.log("salom");
// }


// let numbers = [465, 640, 84, 8, 48, 989, 8489, 48, 4894, 9]
// console.log(numbers);

// let sorted = numbers.sort((a, b) => a - b)

// console.log(sorted);



// function name(params) {

// }

// let total = 0

// for(let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i]
// }


// let total = numbers.reduce((a, b) => {
//     return a + b
// }, 0)

// console.log(total);

// let a = []

// for(let i = 0; i < numbers.length; i++) {
//     // if(numbers[i] < 100) {
//     //     a.push(numbers[i])
//     //     break
//     // }

//     if (numbers[i] === 640) {
//         continue
//     }
//     console.log(numbers[i]);

// }
// // console.log(a);


// let discount = prompt('Какая скидка?')

// let totalSale = Number

// let total = Number

// let max = Object

// let min = Object

// let average = Number

// let arr = [

//     {

//         name: 'Milk',

//         price: 3.25

//     },

//     {

//         name: 'Coffee',

//         price: 1.5

//     },

//     {

//         name: 'Ice Cream',

//         price: 7.85

//     },

//     {

//         name: 'Tomatos',

//         price: 4.14

//     },

//     {

//         name: 'Onion',

//         price: 2.25

//     }

// ]

// let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

// const setup = () => {


//     console.log(arr_sale);
// }

// setup()


// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]
// let trueItem = {
//     count: 0,
//     arr: []
// }

// let falseItem = {
//     count: 0,
//     arr: []
// }

// let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// let emails = {
//     org: [],
//     net: [],
//     info: []
// }
// let other = []


// DOM Documnet Object Module

// let body = document.body
// let head = document.head
// let children = document.children
// let child = document.childNodes

// let a = body.childNodes


// console.log(body);
// console.log(head);
// console.log(children);
// console.log(child);
// console.log(a);


// let h1 = document.getElementsByTagName('h1')
// let h1class = document.getElementsByClassName('genrix')
// let h1Id = document.getElementById('salom')


// let a = document.querySelector('#salom')
// let b = document.querySelector('.genrix')
// let c = document.querySelector('h1')

// let f = document.querySelectorAll('h1')

// console.log(f);
// console.log(h1class);

// console.log(h1[0]);

// for(let i = 0; i < h1.length; i++) {
//     console.log(h1[i]);
// }

// console.log(h1Id);


// let a = document.querySelector('.text')
// let box = document.querySelector('.box')
// // a.innerText = 'Hello'

// a.innerHTML = '<span>hi</span>'

// box.style.width = '200px'
// box.style.height = '200px'
// box.style.backgroundColor = 'red'
// console.log(a);


// let text = document.querySelector('#text')
// let btn = document.querySelector('#btn')



// btn.onclick = () => {
//     console.log("salom");
// }


// btn.addEventListener('click', () => {
//     active = !active

//     if (active) {
//         text.innerText = 'hello'
//     } else {
//         text.innerText = 'salom'
//     }

// })




// let box = document.querySelector('.box')
// let active = false

// box.addEventListener('click', () => {
//     active = !active
//     if (active) {
//         box.style.backgroundColor = 'red'
//         box.style.borderRadius = '50%'
//     } else {
//         box.style.borderRadius = '0'
//         box.style.backgroundColor = 'blue'
//     }
// })

// box.onmouseenter = () => {
//     box.style.backgroundColor = 'red'
//     box.style.borderRadius = '50%'
// }

// box.onmouseleave = () => {
//     box.style.borderRadius = '0'
//     box.style.backgroundColor = 'blue'
// }


// box.addEventListener('mouseenter', () => {
//     box.style.backgroundColor = 'red'
//     box.style.borderRadius = '50%'
// })

// box.addEventListener('mouseleave', () => {
//     box.style.borderRadius = '0'
//     box.style.backgroundColor = 'blue'
// })

// box.addEventListener('dblclick', () => {
//     box.style.borderRadius = '0'
//     box.style.backgroundColor = 'blue'
// })

// box.ondblclick = () => {
//     box.style.backgroundColor = 'red'
//     box.style.borderRadius = '50%'
// }

// let inp = document.querySelector('input')

// inp.addEventListener('keyup', (event) => {
//     let value = event.target.value
//     console.log(value);
// })


// let width = document.querySelector('#width')
// let height = document.querySelector('#height')
// let bgColor = document.querySelector('#bgColor')
// let add = document.querySelector('#add')
// let item = document.querySelector('.item')

// let w = 0
// let h = 0
// let bg = ''

// width.addEventListener('keyup', (event) => {
//     w = event.target.value
// })
// height.addEventListener('keyup', (event) => {
//     h = event.target.value

// })
// bgColor.addEventListener('keyup', (event) => {
//     bg = event.target.value
// })

// add.addEventListener('click', () => {
//     item.style.width = `${w}px`
//     item.style.height = `${h}px`
//     item.style.backgroundColor = bg

//     width.value = ''
//     height.value = ''
//     bgColor.value = ''

// })



//   classList

// let active = false

// box.addEventListener("click", () => {
//     // active = !active
//     // if (active) {
//     //     box.classList.add('active')
//     // } else {
//     //     box.classList.remove('active')
//     // }
//     box.classList.toggle('active')

//     console.log(box.classList.contains('active'));
// })


// let boxes = document.querySelectorAll('.item')

// boxes.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.classList.add('active')
//     })
// })

// let box = document.querySelector('.box')
// let img = document.querySelector('img')

// let src = 'https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg'
// let src2 = 'https://img.freepik.com/premium-photo/insect-closeup-macro-photography-butterfly-wings-great-depth-field-lots-insect-details-isolated-background_76964-9026.jpg'
// let src3 = 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuZXR8ZW58MHx8MHx8fDA%3D'
// let src4 = 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

// box.addEventListener("click", () => {
//     let rnd = Math.round(Math.random() * 3)

//     if (rnd == 0) {
//         img.setAttribute('src', src)
//     } else if (rnd === 1) {
//         img.setAttribute('src', src2)
//     } else if (rnd === 2) {
//         img.setAttribute('src', src3)
//     } else if (rnd === 3) {
//         img.setAttribute('src', src4)
//     }
// })


// let imgOne = document.querySelector('.imgOne')
// let imgTwo = document.querySelector('.imgTwo')
// let imgThree = document.querySelector('.imgThree')
// let imgFour = document.querySelector('.imgFour')

// let activeImg = document.querySelector('.activeImg')


// imgOne.addEventListener('click', () => {
//     let src = activeImg.getAttribute("src")
//     let src2 = imgOne.getAttribute("src")
//     activeImg.setAttribute('src', src2)
//     imgOne.setAttribute('src', src)
// })

// imgTwo.addEventListener('click', () => {
//     let src = activeImg.getAttribute("src")
//     let src2 = imgTwo.getAttribute("src")
//     activeImg.setAttribute('src', src2)
//     imgTwo.setAttribute('src', src)
// })

// imgThree.addEventListener('click', () => {
//     let src = activeImg.getAttribute("src")
//     let src2 = imgThree.getAttribute("src")
//     activeImg.setAttribute('src', src2)
//     imgThree.setAttribute('src', src)
// })

// imgFour.addEventListener('click', () => {
//     let src = activeImg.getAttribute("src")
//     let src2 = imgFour.getAttribute("src")
//     activeImg.setAttribute('src', src2)
//     imgFour.setAttribute('src', src)
// })


'salom'
