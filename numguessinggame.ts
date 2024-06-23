import inquirer from "inquirer"
import chalk from "chalk"

//to generate a secret number
const secretnumber:number = Math.floor(Math.random()*2)+1
console.log(secretnumber)
console.log(chalk.bold.underline("i have picked a number"))

//user input
let userinput = await inquirer.prompt({
    type:"list",
    name: "num",
    message:"please select a number:",
    choices: ["1","2"]
})

//converting user input into a number
let num1:number =parseInt(userinput.num) 

//switch case
switch(true){
    case num1===secretnumber:
    console.log(chalk.bold.bgGreenBright("you won"))
    break;
    default :
    console.log(chalk.bold.bgCyanBright("better luck next time"))
}
