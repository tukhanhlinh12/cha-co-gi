//---Bai 1---

/*const firstNumber = prompt("Nhap so dau tien: ");
const secondNumber = prompt("Nhap so thu hai: ");
if (firstNumber > secondNumber) {
    console.log(firstNumber + " So lon hon " + secondNumber);
} else{
    console.log(firstNumber + " So nho hon" + secondNumber);
}*/


//--Bai 2---

/*let a = prompt("Day la mot so chia het cho 3: ");
if (a % 3 === 0) {
    console.log(a + " Chia het cho 3");
} else{
    console.log(a + " Khong chia het cho 3");
}*/


//---Bai 3---

/*let a = prompt("So thang bang tieng anh");
if (a <= 12 && a >= 1) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[a - 1]);
} else {
    console.log("So ban nhap da vuot qua so thang");
}*/



//---Bai 4---

//---Cach 1 "Dung if else"---

/*let number = prompt("Nhap phep tinh '+', '-', '*', '/' ");
let fnumber = parseFloat(prompt("Nhap so thu nhat"));
let sdnumber = parseFloat(prompt("Nhap so thu hai"));
let result;
if (number === "+") {
    result = fnumber + sdnumber;
} else if (number === "-") {
    result = fnumber - sdnumber;
} else if (number === "*") {
    result = fnumber * sdnumber;
} else if (number === "/") {
    result = fnumber / sdnumber;
} else{
    console.log("Nhap sai phep tinh");
}
console.log("Ket qua = " + result);*/

//---Cach 2 "Dung switch"----

/*let number = prompt("Nhap phep tinh '+', '-', '*', '/' ");
let fnumber = parseFloat(prompt("Nhap so thu nhat"));
let sdnumber = parseFloat(prompt("Nhap so thu hai"));
let result;
switch (number) {
    case "+":
        result = fnumber + sdnumber;
        break;
    case "-":
        result = fnumber - sdnumber;
        break;
    case '*':
        result = fnumber * sdnumber;
        break;
    case '/':
        result = fnumber / sdnumber;
        break;
}
console.log("Ket qua = " + result);*/



//----Bai 5---

/*let number = parseInt(prompt("Nhap mot so: "));
function isPrime(a) { // ham kiem tra so nguyen to
    if (a <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
for (let i = 1; i <= number; i++) { // in ra cac so nguyen to tu 1 den random
    if (isPrime(i)) {
        console.log(i);
    }
} */



//---Bai 6---

/*let a = parseFloat(prompt("Nhap a "));
let b = parseFloat(prompt("Nhap b "));
let c = parseFloat(prompt("Nhap c "));
let delta = Math.pow(b, 2) - 4 * a * c;
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / 2 * a;
    let x2 = (-b - Math.sqrt(delta)) / 2 * a; 
    console.log("Phuong trinh co 2 nghiem phan biet ");
    console.log("x1 = ", + x1); 
    console.log("x2 = ", + x2);
} else if (delta === 0) {
    let x = - b / (2 * a);
    console.log("Phuong trinh co nghiem kep ");
    console.log("x= ", + x);
} else{
    console.log("Phuong trinh vo nghiem");
}*/

//---Bai 7---

/*let months = parseFloat(prompt("Nhap 1 so thang nao do: "));
if(months >= 1 && months <= 3){
    console.log("Spring");
} else if(months >= 4 && months <= 6){
    console.log("Summer");
} else if(months >= 7 && months <= 9){
    console.log("Autumn");
} else if(months >= 10 && months <= 12){
    console.log("Winter");
} else{
    console.log("Yeu cau nhap lai");
}*/


