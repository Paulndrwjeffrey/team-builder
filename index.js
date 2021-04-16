const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let employees = []

const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'Employee\'s name?'
    },
    {
        name: 'role',
        type: 'list',
        message: 'Role?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        name: 'id',
        type: 'number',
        message: 'ID number?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Email?'
    },
    {
        name: 'officeNum',
        type: 'input',
        message: 'Office Number?',
        when: (answers) => answers.role === 'Manager'
    },
    {
        name: 'github',
        type: 'input',
        message: 'Github Username?',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        name: 'school',
        type: 'input',
        message: 'School?',
        when: (answers) => answers.role === 'Intern'
    }
]

function addEmployee(answers) {
    switch(answers.role) {
        case 'Manager':
            employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum))
            console.log(employees)
            return addAnother()
        case 'Engineer':
            employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
            console.log(employees)
            return addAnother()
        case 'Intern':
            employees.push(new Intern(answers.name, answers.id, answers.email, answers.school))
            console.log(employees)
            return addAnother()    
    }
}

function addAnother() {
    inquirer.prompt({
        name: 'another',
        type: 'confirm',
        message: 'Add another?'
    }).then(answer => {
        if (answer.another) {
            newEmployee()
        } else {
            generateHTML(employees)
        }
    })
}

function newEmployee() {
    inquirer.prompt(questions)
    .then(answers =>  addEmployee(answers))
}

function generateHTML(employees) {
    const HTML = []

    const start = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
    <title>TEAM</title>
</head>
<body>
    <header>
        <h1>My Fucking Team</h1>
    </header>
    <main>`

    HTML.push(start)

    for (let i = 0; i < employees.length; i++) {
        let entry = 
        `<div class="outercard">
            <h2>${ employees[i].name }</h2>
            <h3>${ employees[i].getRole() }</h3>
            <div class="innercard">
                <ul class="info">
                    <li>ID: ${ employees[i].id }</li>
                    <li>Email: <a href="mailto:${ employees[i].email }">${ employees[i].email }</a></li>
        `

        if (employees[i].officeNumber) {
            entry += `<li>Office Number: ${ employees[i].officeNumber }</li>`
        }

        if (employees[i].github) {
            entry += `<li>Github: <a href="https://www.github.com/${ employees[i].github }">X</a> </li>`
        }

        if (employees[i].school) {
            entry += `<li>College: ${ employees[i].school }</li>`
        }
        
        entry += `
                </ul>
            </div>
        </div>`

        HTML.push(entry)
    }

    const finish = `
    </main>
    </body>
    </html>`

    HTML.push(finish)
    
    fs.writeFile('./dist/' + 'team.html', HTML.join(""), error => {
        if (error) {
            console.log(error)
        }
    })
}

newEmployee() 
