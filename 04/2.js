const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n\n");

const draws = input.shift().split(',');
let boards = input.map(x => ',' + x.replace(/\n */g, ',/,').trim().replace(/ +/g, ',') + ',');
let boardsT = input.map(x => x.split("\n").map(x => x.trim().match(/\d+/g))).map(z => z[0].map((x, i) => z.map(x => x[i]))).map(x => x.map(x => ',' + x.join() + ',').join('/'));

for (draw of draws) {
    boards = boards.map(x => x.replace(new RegExp(`,${draw},`, "g"), ',-,'));
    boardsT = boardsT.map(x => x.replace(new RegExp(`,${draw},`, "g"), ',-,'));

    let bingo = boards.filter((x, i) => {
        if (x.includes(',-,-,-,-,-,')) {
            boards.splice(i, 1);
            boardsT.splice(i, 1);
            return true;
        }
        return false;
    });

    if (!bingo.length) {
        index = -1;
        bingo = boardsT.filter((x, i) => {
            if (x.includes(',-,-,-,-,-,')) {
                boards.splice(i, 1);
                boardsT.splice(i, 1);
                return true;
            }
            return false;
        });
    }

    if (bingo.length) {
        if (boards.length === 0) {
            console.log(draw);
            console.log(bingo);
            console.log(Number(draw) * bingo.pop().match(/\d+/g).map(Number).reduce((a, b) => a + b));
            break;
        }
    }
}


