let start = 0
let stop = 1000

var stdin = process.openStdin();


while (true) {
    var flag = false;
    let middle = Math.floor((start + stop) / 2);
    console.log(middle);
    console.log("Is your number less/greater/equal than/to my guess?(g/l/e) ");
    stdin.addListener('data', function (data) {
        if (data == 'l') {
            stop = middle - 1;
        } else if (data == 'g') {
            start = middle + 1;
        } else if (data == 'e') {
            flag = true;
        }
    });
    if (flag = true) {
        break;
    }
}

// // While the middle is not what we're looking for and the list does not have a single item
// while (middle !== value && start < stop) {
// if (value < list[middle]) {
// stop = middle - 1
// } else {
// start = middle + 1
// }

// // recalculate middle on every iteration
// middle = Math.floor((start + stop) / 2)
// }

// // if the current middle item is what we're looking for return it's index, else return -1
// return (list[middle] !== value) ? -1 : middle

