const  mysql = require("mysql");
const  inquirer = require("inquirer");

// function to start the inquirer questions
function start() {
    inquirer.prompt([
        {
            type: `list`,
            message: `Would you like to bid or post`,
            name: `bidOrPost`,
            choices: [`Bid`, `Post`]
        },
    ])
    .then(res => {
        switch(res.postOrBid) {
            case `Bid`:
                startBid();
                break;
            case `Post`:
                startPost();
                break;
            default:
                startBid();
                break;
        };
    });
}
start()

// function for bidding
function startBid() {
    inquirer.prompt([
        {

        },
    ])
    .then(answers => {
    });
}

// function for posting a new item
function startPost() {
    inquirer.prompt([
        {

        },
    ])
    .then(response => {
        connection.query('INSERT INTO items', {
            item_name: response.item,
            category: response.category,
            price: response.price,
        }
        
        )
    });
}
