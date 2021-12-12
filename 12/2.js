const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split('-'));

const connections = [];
for (const [x, y] of input) {
    if (x !== 'end' && y !== 'start') {
        if (!connections[x]) {
            connections[x] = [];
        }
        connections[x].push(y);
    }

    if (x !== 'start' && y !== 'end') {
        if (!connections[y]) {
            connections[y] = [];
        }
        connections[y].push(x);
    }
}

console.log(connections);

const paths = [];
const queue = connections['start'].map(x => ['start', x]);

while (queue.length) {
    const path = queue.shift();
    const [last] = path.slice(-1);

    if (last === 'end') {
        paths.push(path);
        continue;
    }

    for (const x of connections[last]) {

        if (x === x.toLowerCase() && path.includes(x)) {
            const smallCaves = path.slice(1).filter(x => x === x.toLowerCase());
            const occurrences = smallCaves.reduce(function (acc, curr) {
                return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
            }, {});

            if (Object.values(occurrences).includes(2)) {
                continue;
            }
        }

        queue.push([...path, x]);
    }
}

console.log(paths.length);
