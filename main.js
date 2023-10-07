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


let shkof = {
    polka: 4,
    eshig: 2,
    ruchka: 4,
    tortma: 2,
    yangi: true,
    price: "120 $",
    delivery: false
}


// console.log(shkof);
// console.log(shkof.price);

// shkof.price = "150$"

// console.log(shkof);
// console.log(shkof.price);

// shkof.owner = 'Chikko'


let a = [[[], [[{ t: "Davlatshoh" }]], [], [[[{ n: { b: [{ s: "salom" }] } }]], [[{ d: "mening" }]],],], { h: 'ismim' }]

console.log(a[0][1][0][0].t);


