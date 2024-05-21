
import inquirer from "inquirer"; 

const Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

let user_answer = await inquirer.prompt({
    name: 'from',
    message: "Enter From Currency",
    type: "list",
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']

})





