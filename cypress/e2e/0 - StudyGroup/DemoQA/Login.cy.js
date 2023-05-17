/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

import { LogInComponent } from "../DemoQA/Component-objects/Login"
import { BooksComponent } from "./Component-objects/Books";


describe('Test for Study group on DemoQA', () => {
    const logpg = new LogInComponent();
    const book = new BooksComponent();

    beforeEach(() => {
        cy.visit('https://demoqa.com/login')
    });

    Cypress.on('uncaught:exception', () => false)

    it('Create new user - fields not completed', () => {
        logpg.userEmptyFields();
    })

    it('Create new user - not checking captcha', () => {
        logpg.completeFields();
        logpg.registerNoCaptcha();
    })

    //---------- will not complete the reg due to captcha -------------
    it('Create new user via UI', () => {
        logpg.completeFields();
        logpg.registerCaptcha();
    })

    it('Login empty credentials', () => {
        logpg.loginempty();
    })

    it('Login invalid credentials', () => {
        logpg.logininvalid();
    })
    //---------- Run only if no user is created -------------
    /*it('Create new user via API', () => {
        cy.authenticate()
    })*/

    it('Login valid credentials', () => {
        logpg.loginvalid();
    })

    it('Delete user account', () => {
        logpg.loginvalid();
        logpg.deleteAccount();
        cy.authenticate();
    })

    it('User can log out', () => {
        logpg.loginvalid();
        logpg.logOut();
    })

    it('Search a book in Bookstore', () => {
        book.searchBook();
    })

    it('Add book to profile', () => {
        logpg.loginvalid();
        book.addBookToProfile();
    })

    it('Deletes a single book from profile', () => {
        logpg.loginvalid();
        book.removeBookFromProfile();
    })

    it('Deletes all books from profile', () => {
        logpg.loginvalid();
        book.addBookToProfile();
        book.removeAllBooksFromProfile();
    })
})