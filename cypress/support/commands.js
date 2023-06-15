// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Modals } from "./DemoQACommands/modals"
import { Rows } from "./LambdaCommands/5rows"
import { NextPage } from "./LambdaCommands/nextpage"
import { PrevPage } from "./LambdaCommands/prevpage"
import { Task } from "./LambdaCommands/tasks"
import { ListedUsers } from "./LambdaCommands/listedUsers"
import { AddUser } from "./DemoQACommands/registerUser"
const modal = new Modals();
const rows = new Rows();
const nxpg = new NextPage();
const prvpg = new PrevPage();
const tsk = new Task();
const lstuser = new ListedUsers();
const add = new AddUser();


//---------------------------------- Lambda COMMANDS -------------------------------
Cypress.Commands.add('_5rows', () => {
      rows.fiveRows();
})

Cypress.Commands.add('nextPage', () => {
      nxpg.nxtPage();
})

Cypress.Commands.add('prevPage', () => {
      prvpg.prevPage();
})

Cypress.Commands.add('_tasks', () => {
    tsk.tasks();
})

Cypress.Commands.add('_listedUsers', () => {
     lstuser.lstUsers();
})

//---------------------------------- DEMO QA COMMANDS -------------------------------

Cypress.Commands.add('_authenticate', () => {
      add.addUser();
});

Cypress.Commands.add('_smallmodals', () => {
      modal.smallModal();
})

Cypress.Commands.add('_largemodals', () => {
      modal.largeModal();
})

