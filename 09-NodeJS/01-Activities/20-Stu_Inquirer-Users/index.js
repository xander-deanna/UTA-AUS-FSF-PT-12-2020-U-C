const inquirer = require('inquirer')

inquirer.prompt
    ([
        {
            type: 'input',
            name: 'Name',
            message: 'What is your name?'
        },
        {
                type: "input",
                name: "Languages",
                message: "What languages do you speak?",
        },
        {
            type: "list",
            name: "Contact",
            message: "What is your preferred method of communication?",
            choices: ['email', 'phone', 'telepathy'],
        },
    ])

    .then(answers => {
        console.log(answers);
        fs.appendFile(log.txt);
    })