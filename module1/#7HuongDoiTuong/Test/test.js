// 1. Hướng đối tượng là gì?
// Liên hệ về các đối tượng bao gồm các thuộc tính (biến), phương thức (hành động, hàm) áp dụng vào lập trình

// 2. Class là gì? Cách tạo.
// Class là khuôn mẫu (frame, sample) mà bao gồm thuộc tính và phương thức.

// 3. Object là gì? Cách tạo
// Object là thể hiện của 1 class.

// 4. Các tính chất của OOP.
// a. Inheritance: thể hiện từ khóa extends, lớp Con kế thừa (thường hưởng) những thuộc tính, phương thức từ class Cha.
// class Father {
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         if (value === "cha duong") {
//             alert("Khong duoc set cha duong");
//         } else {
//             this._name = value;
//         }
//     }
//
//     get age() {
//         return this._age;
//     }
//
//     set age(value) {
//         this._age = value;
//     }
//
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//
//     listenMusic() {
//         document.writeln("Nghe nhac xua");
//     }
// }
//
// class Sub extends Father {
//     constructor(name, age, phone) {
//         super(name, age);
//         this.phone = phone;
//     }
//
//     listenMusic() {
//         document.writeln("Nghe nhac hien dai");
//     }
// }

// let sub = new Sub("Con", 10, "1234234234");
// document.writeln(sub.name + " " + sub.age + " " + sub.phone);

// b. Abstraction: trừu tượng
// thể hiện qua việc sử dụng class abstract, interface

// c. Polymorphism: đa hình, một đối tượng màn nhiều hình thái khác nhau,
// có thể vừa nghe nhạc xưa, vừa nghe nhạc hiện đại

// d. Encapsulation: đóng gói, tất cả thuộc tính sẽ không tương tác trực tiếp,
// mà phải tương tác qua hàm getter/setter
// let father = new Father("cha", 40);
// father.name = "cha nuoi";
// document.writeln(father.name);

// 5. Demo
// Java
// class MyDate {
//     get day() {
//         return this._day;
//     }
//
//     set day(value) {
//         this._day = value;
//     }
//
//     get month() {
//         return this._month;
//     }
//
//     set month(value) {
//         this._month = value;
//     }
//
//     get year() {
//         return this._year;
//     }
//
//     set year(value) {
//         this._year = value;
//     }
//     constructor (day, month, year) {
//         this._day = day;
//         this._month = month;
//         this._year = year;
//     }
// }
//
// let date = new MyDate(2, 2, 2007);
//
// // Getter
// let day = date.day; // 2
// let month = date.month; // 2
// let year = date.year; // 2007
//
// alert(day + "/" + month + "/" + year);
//
// // Setter
// date.day = 10;
// date.month = 10;
// date.year = 2019;
//
// alert(date.day + "/" + date.month + "/" + date.year);

// JavaScript

let MyDate = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }

    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }
};

let date = new MyDate(2, 2, 2007);

// Getter
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007
alert(day + "/" + month + "/" + year);

// Setter
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
alert(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());