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

// let start = document.querySelector('.start')
// let stopBtn = document.querySelector('.stop')
// let restart = document.querySelector('.restart')
// let minute = document.querySelector('.minute')
// let second = document.querySelector('.second')

// let interval;
// let s = 0
// let m = 0
// start.addEventListener('click', () => {
//     interval = setInterval(() => {
//         s++
//         if (s <= 9) {
//             second.innerHTML = `0${s}`
//         } else {
//             second.innerHTML = s

//         }

//         if (s == 60) {
//             m++
//             minute.innerHTML = m
//             s = 0
//             second.innerHTML = s
//         }
//     }, 100)
// })

// stopBtn.addEventListener('click', () => {
//     clearInterval(interval)
// })

// restart.addEventListener('click', () => {
//     clearInterval(interval)
//     m = 0
//     s = 0
//     minute.innerHTML = '00'
//     second.innerHTML = '00'
// })


// const content = document.querySelector('.content')
// const addBtn = document.querySelector('#add')

// let counter = 1

// let colors = [
//     "red",
//     'green',
//     'blue',
//     'balck',
//     "yellow",
//     'tomato',
//     'chocolate',
//     'darkblue'
// ]

// let chars = '0123456789abcdef'

// let a = chars.split('')
// console.log(a);

// addBtn.addEventListener('click', () => {
//     let rnd = Math.floor(Math.random() * a.length)
//     let rnd2 = Math.floor(Math.random() * a.length)
//     let rnd3 = Math.floor(Math.random() * a.length)
//     let rnd4 = Math.floor(Math.random() * a.length)
//     let rnd5 = Math.floor(Math.random() * a.length)
//     let rnd6 = Math.floor(Math.random() * a.length)

//     let box = document.createElement('div')
//     box.classList.add('box')
//     // box.style.backgroundColor = colors[rnd]
//     box.style.backgroundColor = `#${a[rnd]}${a[rnd2]}${a[rnd3]}${a[rnd4]}${a[rnd5]}${a[rnd6]}`
//     box.innerHTML = counter
//     // h1.innerText = `salom ${counter}`
//     content.appendChild(box)
//     counter++
// })




// let arr = [
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     },
//     {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//             "rate": 4.1,
//             "count": 259
//         }
//     },
//     {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 500
//         }
//     },
//     {
//         "id": 4,
//         "title": "Mens Casual Slim Fit",
//         "price": 15.99,
//         "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 2.1,
//             "count": 430
//         }
//     },
//     {
//         "id": 5,
//         "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//         "price": 695,
//         "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 4.6,
//             "count": 400
//         }
//     },
//     {
//         "id": 6,
//         "title": "Solid Gold Petite Micropave ",
//         "price": 168,
//         "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 70
//         }
//     },
//     {
//         "id": 7,
//         "title": "White Gold Plated Princess",
//         "price": 9.99,
//         "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 3,
//             "count": 400
//         }
//     },
//     {
//         "id": 8,
//         "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//         "price": 10.99,
//         "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 1.9,
//             "count": 100
//         }
//     },
//     {
//         "id": 9,
//         "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//         "price": 64,
//         "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//         "rating": {
//             "rate": 3.3,
//             "count": 203
//         }
//     },
//     {
//         "id": 10,
//         "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//         "price": 109,
//         "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 470
//         }
//     },
//     {
//         "id": 11,
//         "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//         "price": 109,
//         "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//         "rating": {
//             "rate": 4.8,
//             "count": 319
//         }
//     },
//     {
//         "id": 12,
//         "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//         "price": 114,
//         "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 4.8,
//             "count": 400
//         }
//     },
//     {
//         "id": 13,
//         "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//         "price": 599,
//         "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 250
//         }
//     },
//     {
//         "id": 14,
//         "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//         "price": 999.99,
//         "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 2.2,
//             "count": 140
//         }
//     },
//     {
//         "id": 15,
//         "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//         "price": 56.99,
//         "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 2.6,
//             "count": 235
//         }
//     },
//     {
//         "id": 16,
//         "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//         "price": 29.95,
//         "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 340
//         }
//     },
//     {
//         "id": 17,
//         "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//         "price": 39.99,
//         "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//         "rating": {
//             "rate": 3.8,
//             "count": 679
//         }
//     },
//     {
//         "id": 18,
//         "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//         "price": 9.85,
//         "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 130
//         }
//     },
//     {
//         "id": 19,
//         "title": "Opna Women's Short Sleeve Moisture",
//         "price": 7.95,
//         "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 4.5,
//             "count": 146
//         }
//     },
//     {
//         "id": 20,
//         "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//         "price": 12.99,
//         "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//         "rating": {
//             "rate": 3.6,
//             "count": 145
//         }
//     }
// ]

// const content = document.querySelector('.content')

// function chizish() {
//     for (let i = 0; i < arr.length; i++) {
//         let itemHtml = `
//         <div class="box">
//             <div class="img">
//                 <img src="${arr[i].image}" alt="" />
//             </div>
//             <div class="text">
//                 <h1 class="title">${arr[i].title}</h1>
//                 <p class="des">${arr[i].description}</p>
//                 <div class="rates">
//                 <h3><i class="bx bx-dollar"></i> <span class="price">${arr[i].price}</span></h3>
//                 <h3><i class="bx bx-star"></i> <span class="star">${arr[i].rating.rate}</span></h3>
//                 <h3><i class="bx bx-package"></i> <span class="count">${arr[i].rating.count}</span></h3>
//                 </div>

//                 <button class="addItem">В избранное</button>
//             </div>
//         </div>
//        `

//         console.log(itemHtml);
//         content.insertAdjacentHTML("beforeend", itemHtml)

//     }

// }

// chizish()


// const inpTodo = document.querySelector('#todo')
// const addTodo = document.querySelector('#addTodo')
// const todoItems = document.querySelector('.todoItems')

// let state = {
//     todos: [],
// }




// let title = ''

// inpTodo.addEventListener('keyup', (e) => {
//     title = e.target.value
// })

// let counter = 0

// addTodo.addEventListener('click', (e) => {
//     e.preventDefault()
//     let newTodo = {
//         id: counter,
//         title,
//     }
//     let todoHTml = `
//             <div class="item">
//                 <h1 class="itemCount" >${newTodo.id}</h1>
//                 <p class="itemText">${newTodo.title}</p>
//             </div>
//         `

//     todoItems.insertAdjacentHTML('beforeend', todoHTml)

//     state.todos.push(newTodo)


//     counter++
//     newTodo.id = counter
//     localStorage.setItem('todos', JSON.stringify(state.todos))
//     inpTodo.value = ''

//     console.log(state);

// })



// function local() {

//     state.todos = JSON.parse(localStorage.getItem('todos') || '[]' )

//     for (let i = 0; i < state.todos.length; i++) {
//         let todoHTml = `
//             <div class="item">
//                 <h1 class="itemCount" >${state.todos[i].id}</h1>
//                 <p class="itemText">${state.todos[i].title}</p>
//             </div>
//         `

//         todoItems.insertAdjacentHTML('beforeend', todoHTml)

//     }
// }

// local()





// let btnPlus = document.querySelector('.btnPlus')
// let count = document.querySelector('.count')
// let btnMinus = document.querySelector('.btnMinus')

// let a = 0


// function getItem() {
//     a = JSON.parse(localStorage.getItem('counter'))
//     count.innerHTML = a
// }

// getItem()



// btnPlus.addEventListener('click', () => {
//     a++
//     count.innerHTML = a

//     localStorage.setItem('counter', JSON.stringify(a))
// })

// btnMinus.addEventListener('click', () => {
//     a--

//     if (a < 1) {
//         a = 0
//         count.innerHTML = '0'
//     } else {

//         count.innerHTML = a
//     }

//     localStorage.setItem('counter', JSON.stringify(a))
// })

// const btn = document.querySelector('.btn')


// console.log('sana:', date.getDate());
// console.log('hours:', date.getHours(), "minutes:", date.getMinutes());



// btn.addEventListener('click', () => {
//     let date = new Date()
//     let hour = date.getHours()
//     let minute = date.getMinutes()
//     let seconds = date.getSeconds()

//     console.log(
//         `${hour}:${minute}:${seconds}`
//     );
// })


// const content = document.querySelector('.content')


// let arr =
//     [
//         {
//             "id": 1,
//             "name": "Leanne Graham",
//             "username": "Bret",
//             "email": "Sincere@april.biz",
//             "address": {
//                 "street": "Kulas Light",
//                 "suite": "Apt. 556",
//                 "city": "Gwenborough",
//                 "zipcode": "92998-3874",
//                 "geo": {
//                     "lat": "-37.3159",
//                     "lng": "81.1496"
//                 }
//             },
//             "phone": "1-770-736-8031 x56442",
//             "website": "hildegard.org",
//             "company": {
//                 "name": "Romaguera-Crona",
//                 "catchPhrase": "Multi-layered client-server neural-net",
//                 "bs": "harness real-time e-markets"
//             }
//         },
//         {
//             "id": 2,
//             "name": "Ervin Howell",
//             "username": "Antonette",
//             "email": "Shanna@melissa.tv",
//             "address": {
//                 "street": "Victor Plains",
//                 "suite": "Suite 879",
//                 "city": "Wisokyburgh",
//                 "zipcode": "90566-7771",
//                 "geo": {
//                     "lat": "-43.9509",
//                     "lng": "-34.4618"
//                 }
//             },
//             "phone": "010-692-6593 x09125",
//             "website": "anastasia.net",
//             "company": {
//                 "name": "Deckow-Crist",
//                 "catchPhrase": "Proactive didactic contingency",
//                 "bs": "synergize scalable supply-chains"
//             }
//         },
//         {
//             "id": 3,
//             "name": "Clementine Bauch",
//             "username": "Samantha",
//             "email": "Nathan@yesenia.net",
//             "address": {
//                 "street": "Douglas Extension",
//                 "suite": "Suite 847",
//                 "city": "McKenziehaven",
//                 "zipcode": "59590-4157",
//                 "geo": {
//                     "lat": "-68.6102",
//                     "lng": "-47.0653"
//                 }
//             },
//             "phone": "1-463-123-4447",
//             "website": "ramiro.info",
//             "company": {
//                 "name": "Romaguera-Jacobson",
//                 "catchPhrase": "Face to face bifurcated interface",
//                 "bs": "e-enable strategic applications"
//             }
//         },
//         {
//             "id": 4,
//             "name": "Patricia Lebsack",
//             "username": "Karianne",
//             "email": "Julianne.OConner@kory.org",
//             "address": {
//                 "street": "Hoeger Mall",
//                 "suite": "Apt. 692",
//                 "city": "South Elvis",
//                 "zipcode": "53919-4257",
//                 "geo": {
//                     "lat": "29.4572",
//                     "lng": "-164.2990"
//                 }
//             },
//             "phone": "493-170-9623 x156",
//             "website": "kale.biz",
//             "company": {
//                 "name": "Robel-Corkery",
//                 "catchPhrase": "Multi-tiered zero tolerance productivity",
//                 "bs": "transition cutting-edge web services"
//             }
//         },
//         {
//             "id": 5,
//             "name": "Chelsey Dietrich",
//             "username": "Kamren",
//             "email": "Lucio_Hettinger@annie.ca",
//             "address": {
//                 "street": "Skiles Walks",
//                 "suite": "Suite 351",
//                 "city": "Roscoeview",
//                 "zipcode": "33263",
//                 "geo": {
//                     "lat": "-31.8129",
//                     "lng": "62.5342"
//                 }
//             },
//             "phone": "(254)954-1289",
//             "website": "demarco.info",
//             "company": {
//                 "name": "Keebler LLC",
//                 "catchPhrase": "User-centric fault-tolerant solution",
//                 "bs": "revolutionize end-to-end systems"
//             }
//         },
//         {
//             "id": 6,
//             "name": "Mrs. Dennis Schulist",
//             "username": "Leopoldo_Corkery",
//             "email": "Karley_Dach@jasper.info",
//             "address": {
//                 "street": "Norberto Crossing",
//                 "suite": "Apt. 950",
//                 "city": "South Christy",
//                 "zipcode": "23505-1337",
//                 "geo": {
//                     "lat": "-71.4197",
//                     "lng": "71.7478"
//                 }
//             },
//             "phone": "1-477-935-8478 x6430",
//             "website": "ola.org",
//             "company": {
//                 "name": "Considine-Lockman",
//                 "catchPhrase": "Synchronised bottom-line interface",
//                 "bs": "e-enable innovative applications"
//             }
//         },
//         {
//             "id": 7,
//             "name": "Kurtis Weissnat",
//             "username": "Elwyn.Skiles",
//             "email": "Telly.Hoeger@billy.biz",
//             "address": {
//                 "street": "Rex Trail",
//                 "suite": "Suite 280",
//                 "city": "Howemouth",
//                 "zipcode": "58804-1099",
//                 "geo": {
//                     "lat": "24.8918",
//                     "lng": "21.8984"
//                 }
//             },
//             "phone": "210.067.6132",
//             "website": "elvis.io",
//             "company": {
//                 "name": "Johns Group",
//                 "catchPhrase": "Configurable multimedia task-force",
//                 "bs": "generate enterprise e-tailers"
//             }
//         },
//         {
//             "id": 8,
//             "name": "Nicholas Runolfsdottir V",
//             "username": "Maxime_Nienow",
//             "email": "Sherwood@rosamond.me",
//             "address": {
//                 "street": "Ellsworth Summit",
//                 "suite": "Suite 729",
//                 "city": "Aliyaview",
//                 "zipcode": "45169",
//                 "geo": {
//                     "lat": "-14.3990",
//                     "lng": "-120.7677"
//                 }
//             },
//             "phone": "586.493.6943 x140",
//             "website": "jacynthe.com",
//             "company": {
//                 "name": "Abernathy Group",
//                 "catchPhrase": "Implemented secondary concept",
//                 "bs": "e-enable extensible e-tailers"
//             }
//         },
//         {
//             "id": 9,
//             "name": "Glenna Reichert",
//             "username": "Delphine",
//             "email": "Chaim_McDermott@dana.io",
//             "address": {
//                 "street": "Dayna Park",
//                 "suite": "Suite 449",
//                 "city": "Bartholomebury",
//                 "zipcode": "76495-3109",
//                 "geo": {
//                     "lat": "24.6463",
//                     "lng": "-168.8889"
//                 }
//             },
//             "phone": "(775)976-6794 x41206",
//             "website": "conrad.com",
//             "company": {
//                 "name": "Yost and Sons",
//                 "catchPhrase": "Switchable contextually-based project",
//                 "bs": "aggregate real-time technologies"
//             }
//         },
//         {
//             "id": 10,
//             "name": "Clementina DuBuque",
//             "username": "Moriah.Stanton",
//             "email": "Rey.Padberg@karina.biz",
//             "address": {
//                 "street": "Kattie Turnpike",
//                 "suite": "Suite 198",
//                 "city": "Lebsackbury",
//                 "zipcode": "31428-2261",
//                 "geo": {
//                     "lat": "-38.2386",
//                     "lng": "57.2232"
//                 }
//             },
//             "phone": "024-648-3804",
//             "website": "ambrose.net",
//             "company": {
//                 "name": "Hoeger LLC",
//                 "catchPhrase": "Centralized empowering task-force",
//                 "bs": "target end-to-end models"
//             }
//         }
//     ]






// function createItems() {
//     for (let i = 0; i < arr.length; i++) {
//         let itemHtml = `
//         <div class="item" id="${arr[i].id}" >
//         <h1>${arr[i].id}</h1>
//         <h1 class="title">${arr[i].name}</h1>
//         <p class="txt1">Company: <span>${arr[i].company.name}</span></p>
//         <p class="txt1">Website: <span>${arr[i].website}</span></p>
//         <p class="txt1">Phone: <span>${arr[i].phone}</span></p>
//         <button data-action id="${arr[i].id}" >Подробнее</button>
//       </div>
//         `
//         content.insertAdjacentHTML("beforeend", itemHtml)
//     }


// }

// createItems()


// window.addEventListener("click", (e) => {
//     if(e.target.hasAttribute("data-action")) {
//         console.log("click");
//         let id = e.target.id

//         let a = arr.filter(item => item.id == id)

//         localStorage.setItem('item', JSON.stringify(a))

//     }   
// })

// const cliked = (e) => {
//         console.log(e);

// }

// function cliked(e) {

// }

const conteiner = document.querySelector('.conteiner')


let state = {
    todos: []
}

function getTodos() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((rasponse) => state.todos = state.todos.concat(rasponse))
        .then((res) => {
            if (res.length > 0) {
                cereateTodo()
            } 
            console.log(res);
        })
}




function cereateTodo() {
    if (state.todos.length > 0) {

        for (let i = 0; i < state.todos[0].products.length; i++) {
            let h1 = document.createElement('h1')
            h1.innerText = state.todos[0].products[i].title
            conteiner.appendChild(h1)
        }
    }
    console.log(state.todos[0].products);
}

getTodos()

console.log(
    state
);

// console.log(

// );

