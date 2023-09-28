// && = va // || = yoki

// let a = 10
// let b = 16

// if (a === 10 && b === 15) {
//     // true
//     console.log(true);
// } else {
//     //  false
//     console.log(false);
// }


// if (a === 10 || b === 15) {
//     console.log(true);
// } else {
//     console.log(false);
// }


let login = prompt("create new login")
let password = prompt("create new password")

if (login.trim() !== '' && password.trim() !== '') {
    alert('true')

    let l = prompt('write your login')
    let p = prompt('write your password')

    if (login === l.trim() && password === p.trim()) {
        alert('welcome')
    } else {
        alert('user is not defined!!!')
    }

} else {
    alert("false")
}

console.log(
    login, password
);



