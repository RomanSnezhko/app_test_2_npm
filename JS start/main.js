// let sum = +prompt("cash", 700);
// const depositYear = +prompt("year", 10);
// const persent = 13;
// let count = 0;
//
// while (count < depositYear) {
//     sum = sum + sum * (persent / 100);
//     count = count + 1;
//     document.write(count + ": " + sum + "<br>");
// }
// alert(sum);
// console.log("sum", sum, "count", count);
//
// lesson 05 JS_0 If else...
//
// let nameUser = prompt("Будьте добры, введите имя", "");
// let fameleUser = prompt("Будьте добры, фамилию");
// let ageUser = +prompt("Будьте добры, введите дату рождения");
//
// if (nameUser === "Roman" && fameleUser === "Snezhko" && ageUser = 30) {
//   alert("Добро пожаловать господин!");
// } else {
//   alert("Вы не тот кто нам подходит...");
// }
//
// Tests 1
//
// let startPrice = +prompt("Вначальный взнос")
// let count = 0
// let numberYear = +prompt("Введите количество лет")
// let percent = 7 // в %
//
// while (numberYear <= count) {
//
// }
//
// Test 2


let myRoom = [
    {
        material: "fabric",
        color: "gray",
        size: "lage",
        weight:
            {
                scale: "kg",
                volume: 50
            },
        position: "right wall",
        coast:
            {
                currency: "BYN",
                volume: 1500
            }
    }, {
        material: "tree",
        color: "yellow",
        size: "medium",
        weight:
            {
                scale: "kg",
                volume: 10
            },
        position: "window",
        coast:
            {
                currency: "BYN",
                volume: 250
            },
    }, {
        material: "skin",
        color: "brown",
        size: "semi-medium",
        weight: {
            scale: "kg",
            volume: 15
        },
        position: "center",
        coast:
            {
                currency: "BYN",
                volume: 850
            }
    }, {
        material: "metal",
        color: "black",
        size: "small",
        weight: {
            scale: "kg",
            volume: 0.3
        },
        position: "on the table",
        coast: {
            currency: "BYN",
            volume: 25
        }
    }, {
        material: "skin",
        color: "purple",
        size: "semi medium",
        weight: {
            scale: "kg",
            volume: 5
        },
        position: "left angle",
        coast: {
            currency: "BYN",
            volume: 380
        }
    }, {
        material: "tree",
        color: "light brown",
        size: "medium",
        weight: {
            scale: "kg",
            volume: 30
        },
        position: "left wall",
        coast: {
            currency: "BYN",
            volume: 450
        }
    }, {
        material: "tree",
        color: "light brown",
        size: "small",
        weight: {
            scale: "kg",
            volume: 10
        },
        position: "left wall",
        coast: {
            currency: "BYN",
            volume: 200
        }
    }, {
        material: "fabric",
        color: "wight",
        size: "large",
        weight: {
            scale: "kg",
            volume: 35
        },
        position: "left wall",
        coast: {
            currency: "BYN",
            volume: 1650
        }
    }
];

myRoom[7].coast.volume = 10
console.log(myRoom[7].coast.volume);
console.log(myRoom);

