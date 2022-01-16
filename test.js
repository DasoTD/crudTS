var readlineSync = require('readline-sync');

var user = readlineSync.question('may i know your name? ');

console.log(`Hi,  ${user} + '!'`);

const animals =[
    {aniamal: 'goat', name: 'tt', age: 12},
    {aniamal: 'cat', name: 'ct', age: 10},
    {aniamal: 'sheep', name: 'sp', age: 11}
];

console.table(animals);
