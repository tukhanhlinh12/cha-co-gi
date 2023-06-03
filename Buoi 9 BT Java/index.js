//----Bai 1: In ra cac thang trong nam--------

/*let months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];
for(let i = 0; i < months.length; i++) {
    console.log(months[i]);
}*/



//----Bai 2: Yeu cau nguoi dung nhap 1 so n----

//---Cau a: In ra so chan, le < n---

/*let evenNumber = parseFloat(prompt("Nhap mot so chan < n"));
let oddNumber = parseFloat(prompt("Nhap mot so le < n"));
for(let i = 0; i < evenNumber; i++) {
    if(i % 2 === 0){
        console.log(i);
    }
}
for(let i = 0; i < oddNumber; i++) {
    if (i % 2 !== 0){
        console.log(i);
    }
}*/


//---Câu b: Chuyển 1 cơ số n sang hệ cơ số 2--- 

/*let demicalNumber = parseInt(prompt("Nhap so n: "));
let binazyNumber = demicalNumber.toString(2) // Chuyển thập phân sang nhị phân
console.log("So " + demicalNumber + "trong he nhi phan la: " + binazyNumber);*/


//---Câu c: Tính toán và đưa ra giai thừa của số đó n!---

/*function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let giaiThua = 1;
    for (let i = 2; i <= n; i++) {
      giaiThua *= i;
    }
    return giaiThua;
}
const n = prompt("Nhập số nguyên n:");
const giaiThua = tinhGiaiThua(parseInt(n));
console.log(`Giai thừa của ${n} là: ${giaiThua}`);*/


//---Câu d: Tính tổng các số từ 1 đến n: 1 + 2 + 3 +... + n----

/*let number = prompt("Nhap so n: ");
let sum = 0;
for (let i = 0; i <= number; i++) {
    sum += i;
}
console.log("Tong cac so tu 1 den " + number + " la: " + sum);*/

//--Câu e: Tìm ra các ước của n---

/*let n = parseInt(prompt("Nhap so n: "));
console.log("Cac uoc cua " + n + " la: ");
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);;
    }
}*/


//--Câu i: Tìm UCLN và BCNN của 2 số a và b----

/*let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));

// Hàm tính UCLN sử dụng thuật toán Euclid
function timUCLN(x, y) {
  while (y !== 0) {
    // Gán giá trị của y vào biến tạm thời
    let temp = y;
    y = x % y;
    // Gán giá trị tạm thời vào x
    x = temp;
  }
  // Khi y bằng 0, x sẽ chứa UCLN của x và y
  return x;
}

// Hàm tính BCNN sử dụng công thức BCNN = (a * b) / UCLN(a, b)
function timBCNN(x, y) {
  return (x * y) / timUCLN(x, y);
}
let ucln = timUCLN(a, b);
let bcnn = timBCNN(a, b);
console.log("Ước chung lớn nhất (UCLN) của", a, "và", b, "là:", ucln);
console.log("Bội chung nhỏ nhất (BCNN) của", a, "và", b, "là:", bcnn);*/




  




