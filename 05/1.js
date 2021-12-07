const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split(' -> ').map(x => x.match(/\d+/g).map(Number)));

let matrix = [];
for ([[x1, y1], [x2, y2]] of input) {
    if (x1 !== x2 && y1 !== y2) {
        continue;
    }

    let xa = x1, xb = x2;
    do {

        if (!matrix[xa]) {
            matrix[xa] = [];
        }

        let ya = y1, yb = y2;
        do {

            if (!matrix[xa][ya]) {
                matrix[xa][ya] = 0;
            }
            matrix[xa][ya]++;

            if (ya > yb) {
                ya--;
            } else if (ya < yb) {
                ya++;
            } else {
                break;
            }
        } while (true);


        if (xa > xb) {
            xa--;
        } else if (xa < xb) {
            xa++;
        } else {
            break;
        }
    } while (true);

}

let counter = 0;
matrix.forEach(x => {
    counter += x.filter(x => x > 1).length;
})


console.log(matrix);
console.log(counter);
