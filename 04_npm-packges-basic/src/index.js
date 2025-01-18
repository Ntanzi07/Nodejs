import chalk from "chalk";
import logSymbols from 'log-symbols';

console.log(chalk.white.bgBlack.bold("World Hello!!!\n"));

const character = chalk.green.bold("#");
const count = 8;
const tree = [];

for(let i = 1; i <= count; i++){
    tree.push(" ".repeat(count - i) + character.repeat((i * 2) - 1)+ " ".repeat(count - i));
}

for(const line of tree){
    console.log(line);
}

console.log(logSymbols.success, 'Finished successfully!!!')