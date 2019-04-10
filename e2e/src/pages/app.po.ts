import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  setRepository (repository){
    return element(by.id('repository')).sendKeys(repository);
  }
  setBranchType (branch_type){

    var SelectWrapper  = require('../select-wrapper');
    var mySelect = new SelectWrapper(by.id('select_branch'));

    return mySelect.selectByText(branch_type);
  }
}
