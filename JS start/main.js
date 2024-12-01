let sum = +prompt('cash', 1000);
const depositYear = +prompt('year', 10);
const persent = 13;
let count = 0;

while (count < depositYear) {
    sum = sum + sum * (persent/100)
    count = count + 1
    document.write(count + ": " + sum + "<br>")
}
alert (sum)
console.log ('sum', sum, 'count',count);