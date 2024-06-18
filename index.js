import inquirer from 'inquirer';

// Define questions for the users
const questions = [
    {
        type: 'input',
        name: 'firstNum',
        message: 'Enter the first number Buddy:',
        validate: value => !isNaN(value) || 'Please enter a valid number Buddy',
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Choose an operation:',
        choices: ['+', '-', '*', '/'],
    },
    {
        type: 'input',
        name: 'secondNum',
        message: 'Enter the second number Buddy:',
        validate: value => !isNaN(value) || 'Please enter a valid number Buddy',
    },
];

// Function to perform the chosen arithmetic operations
const calculate = (firstNum, operation, secondNum) => {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operation buddy please do valid operations.......';
    }
};

// Perform the calculation and prompt the users
inquirer.prompt(questions).then(answers => {
    const { firstNum, operation, secondNum } = answers;
    const result = calculate(firstNum, operation, secondNum);
    console.log(`Result: ${result}`);
}).catch(error => {
    console.error("An error occurred:", error);
});
