//---Bai 1----

/*let person = {
    id : 1,
    name : "Nguyen Van A",
    age : 15, 
};
console.log("STT: ",person.id, "- Ho ten: ", person.name, " - ", person.age, " tuoi");
let fname = {
    id : 2,
    name : "Nguyen Van B",
    age : 16,
};
console.log("STT: ",fname.id, "- Ho ten: ", fname.name, " - ", fname.age, " tuoi");
let string = {
    id : 3,
    name : "Nguyen Van C",
    age : 17,
};
console.log("STT: ",string.id, "- Ho ten: ", string.name, " - ", string.age, " tuoi");
let mname = {
    id : 4,
    name : "Nguyen Van D",
    age : 18,
};
console.log("STT: ",mname.id, "- Ho ten: ", mname.name, " - ", mname.age, " tuoi"); */


//---Bai 2----

/*function myUpperCase(myString) {
    return 0;
}
console.log("nguyen van a".toUpperCase());
console.log("nguyen van c".toUpperCase()); */


//----Bai 3---

/*let car = {
    fcar : "Honda",
    sdcar : "Mazda",
    tdcar : "Mercedes",
};
console.log(car.fcar, "-", car.sdcar, "-", car.tdcar); */


//---Bai 4---

/*console.log("Elephant");
let animals = {
    m : "Monkey",
    t : "Tiger",
    e : "Elephant",
};
console.log(Object.values(animals)); */


//--Bai 5--

/*function getFirstElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result);
console.log(animals); */



//---Bai 6----

/*let sports = {
    name: 'Bóng rổ',
    like: 6,
    sdname: 'Bơi lội',
    sdlike: 5,
    tdname: 'Bóng đá',
    tdlike: 10,
};
console.log("[{ name: ' ", sports.name, " ,like: ", sports.like, "}", ", { name: '", sports.tdname, " ,like: ", sports.tdlike, " }]"); */

//----Bai 7----

/*let sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(sports) {
    let totalGold = 0;
    for (let i = 0; i < sports.length; i++) {
        totalGold += sports[i].gold;
    }
    return totalGold;
};
console.log(getTotalGold(sports));*/


//---Bai 8---

/*var listStudent = [
    { id: 1, name: "Nguyen Van A", age: 15 },
    { id: 2, name: "Nguyen Van B", age: 13 },
    { id: 3, name: "Nguyen Van C", age: 18 },
    { id: 4, name: "Nguyen Van D", age: 14 },
];
function sortArray(arr) { // sort "chinh thu tu tu be den lon" 
    return arr.sort((a, b) => a.age - b.age);
}
console.log(sortArray(listStudent));*/
