
    const p1 = 2; // позиционирование корабля
    const p2 = 3;
    const p3 = 4;

    kill = 0;     // счетчик попаданий

    let playerShot    //  выстрел игрока

    while (kill < 3) {

        playerShot = +prompt("Your shot", '')
        if (playerShot === p1 || playerShot === p2 || playerShot === p3) {
            alert('OOO, my blood')
            kill = kill + 1}
        else {
            alert("Your are looser!")
        }
    }
    alert('Your are Kill me, little bich!')