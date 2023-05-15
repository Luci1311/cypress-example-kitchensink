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
        cy.viewport(1440, 1080)
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

    /*it('Create new user via API', () => {
        cy.authenticate()
    })*/

    it('Login valid credentials', () => {
        logpg.loginvalid();
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

    it('Delete book from profile', () => {
        logpg.loginvalid();
        book.addBookToProfile();
        book.removeBookFromProfile();
    })
})