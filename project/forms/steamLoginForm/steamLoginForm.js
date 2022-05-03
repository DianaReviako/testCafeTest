const Icon = require('../../../framework/Icon');
const Input = require('../../../framework/input');
const Label = require('../../../framework/label');
const BaseForm = require('../../../framework/baseForm');
const Dropdown = require('../../../framework/dropdown');
const Button = require('../../../framework/button');
const StringUtils = require('../../../framework/utils/stringUtils');
const locators = require('../../locators/steam/loginForm.json');

class SteamLoginForm extends BaseForm{

    title = new Label('title', locators.title);
    usernameInput = new Input('usernameInput', locators.usernameInput);
    passwordInput = new Input('passwordInput', locators.passwordInput);

    constructor(){
        super()
        this.name = 'SteamLoginForm'
        this.element = this.title
    }

    async typeUsername(username){
        await this.usernameInput.typeText(username)
    }

    async typePassword(password){
        await this.passwordInput.typeText(password)
    }
 
}

module.exports = new SteamLoginForm();