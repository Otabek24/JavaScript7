let name = +prompt("Ismingizni kiriting")

console.log('Sizning ismingiz'  + name + about())

let year = +prompt("Tug'ilgan yilingizni kiriting")

while (isNaN(year) || year==0){
    year = +prompt("Xatolik. Son kiriting")
}

function about() {
    return ". Sizning yoshingiz " + (2024 - year) + "da"
}
