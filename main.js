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

let numbers = [15, 51, 5, 15, 8, 847, 79, 6]

let total = 0

for (let i = 0; i < numbers.length; i++) {
    // total = total + numbers[i]
    total +=  numbers[i]
    console.log(total);
}
