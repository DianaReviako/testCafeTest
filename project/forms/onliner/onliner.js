const Label = require('../../../framework/label');
const BaseForm = require('../../../framework/baseForm');
const locators = require('../../locators/onliner/onlinerMain.json');
const Icon = require('../../../framework/Icon');
const Checkbox = require('../../../framework/checkbox');
const StringUtils = require('../../../framework/utils/stringUtils');

class Onliner extends BaseForm{

    onlinerLogo = new Icon('onlinerLogo', locators.onlinerLogo);
    category = new Label('category', locators.category);
    filterChechbox = (name) => new Checkbox('filterChechbox', StringUtils.format(locators.checkbox, name));

    constructor(){
        super()
        this.name = 'Onliner'
        this.element = this.onlinerLogo
    }

    async clickCategory(name){
        this.category.click(name);
    }

    async clickFilterChechbox(name){
        const checkboxName = name.toLowerCase()
        this.filterChechbox(checkboxName).click();
    }

    async isCheckboxSelected(name){
        const checkboxName = name.toLowerCase()
        return this.filterChechbox(checkboxName).isChecked();
    }
 
}

module.exports = new Onliner();