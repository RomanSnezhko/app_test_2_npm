
    // const posicion = Math.floor(Math.random() * 5);                    // рандомная позиция
    //
    // const p2 = posicion + 1;
    // const p3 = p2 + 1;
    //
    // let numberShots = 0;
    // let kill = 0;
    // let playerShot;

    // while (kill < 3)
    // {
    //     playerShot = +prompt("Your shot 1-7", '');
    //     if (playerShot <= 0 || playerShot > 7)
    //     {
    //         alert("Chose shot 1-7");
    //     } else
    //         {
    //         if (playerShot === posicion || playerShot === p2 || playerShot === p3)
    //             {
    //                 alert('OOO, my blood')
    //                 kill = kill + 1
    //             }   else {
    //             alert("Your are looser!")
    //         }
    //             numberShots = numberShots + 1;
    //     }
    //
    // }
    // alert('Your are Kill me, little bitch!')
    // alert ('Your needed ' + numberShots + ' shots' )

    // Bank operation
    const depositAount = 1000
    const earlyRate = 15
    const depositTermInYears = 2

    let count = 0

    function getDepositIncome(amount, rate, term) {
        let depositIncome = 0
        while (count < term) {
            depositIncome = depositIncome + amount * (rate / 100)
            count = count +1
        }
        return depositIncome
    }
const  income = getDepositIncome(depositAount, earlyRate, depositTermInYears)
    console.log('count =', count)
    console.log(income)