// Data Base
let coffe = [
    {
        name: "Espresso",
        whithMilk: {
            small: null,
            medium: null,
            large: null,
        },
        noMilk: {
            small: 1.1,
            medium: 2.2,
            large: 3.3
        }
    }
    , {
        name: "Americano",
        whithMilk: {
            small: 1.2,
            medium: 2.2,
            large: 3.3,
        },
        noMilk: {
            small: 1.1,
            medium: 2.2,
            large: 3.3
        }
    }, {
        name: "Latte",
        whithMilk: {
            small: 3.3,
            medium: 4.4,
            large: 5.5,
        },
        noMilk: {
            small: 3,
            medium: 4,
            large: 5
        }
    }, {
        name: "Capuchino",
        whithMilk: {
            small: 3.1,
            medium: 4.2,
            large: 5.3,
        },
        noMilk: {
            small: 3,
            medium: 4,
            large: 5
        }
    }]
let tea = [
    {
        name: "Black",
        whithMilk: {
            small: 0.8,
            medium: 0.6,
            large: 0.4,
        },
        noMilk: {
            small: 0.6,
            medium: 0.4,
            large: 0.2,
        }
    }, {
        name: "White",
        whithMilk: {
            small: 0.8,
            medium: 0.6,
            large: 0.4,
        },
        noMilk: {
            small: 0.6,
            medium: 0.4,
            large: 0.2,
        }
    }, {
        name: "Fruit",
        whithJuice: {
            small: 1.1,
            medium: 2.2,
            large: 3.3,
        },
        noJuice: {
            small: 1,
            medium: 2,
            large: 3,
        }
    }]
let desert = [
    {
        name: "Pancake",
        small: 3,
        medium: 5,
        large: 7,
    }, {
        name: "Button",
        small: 1,
        medium: 1.5,
        large: 2.2
    }, {
        name: "Tortik",
        small: 3,
        medium: 5,
        large: 7,
    }]
let alcogol = [
    {
        name: "Brandy",
        old: {
            year6: {
                short: 4,
                buttle: 20
            },
            year8: {
                short: 6,
                buttle: 30
            },
            year12: {
                short: 8,
                buttle: 40
            }
        }

    }, {
        name: "Beer",
        white: {
            pint: 2,
            buttle: 4
        },
        black: {
            pint: 2.5,
            buttle:
                5
        }
    }, {
        name: "Champagne",
        france: {
            short: 4,
            buttle: 20
        },
        italia: {
            short: 6,
            buttle: 30
        }

    }]

let products = [coffe, tea, desert, alcogol]
console.log(alcogol[2].italia)

// let userPocket = +prompt("Please enter your amount (USD):")
let userChose = prompt("Please chose our good: coffe, tea, desert, alcogol")


// if (products.includes(userChose)) {
//     console.log('Переменная найдена в массиве!');
// } else {
//     console.log('Переменная не найдена в массиве.');
// }
//  function rr ( products, userChoice ) {
//     if products[i].name === userChose{
//         alert(products[i].name products[i])
//     }
//  }

for ( let i = 0; i < products.length; i++ ) {
    for ( let j = 0; j < products[j].length; j++ ) {

        if (products[i][j].name === userChose){

            console.log("вы выбрали" + products[i][j].name)
    }

}}
