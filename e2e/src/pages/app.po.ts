import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  setRepository(repository) {
    return element(by.id('repository')).sendKeys(repository);
  }

  setBranch(branch) {
    console.log('En setBranch branch es: ' + branch);
    return element(by.id('branch')).sendKeys(branch);
  }

  setBranchType(branchType) {
    const SelectWrapper  = require('../select-wrapper');
    const mySelect = new SelectWrapper(by.id('select_branch'));

    return mySelect.selectByText(branchType);
  }

  setStatus(status) {
    const SelectWrapper  = require('../select-wrapper');
    const mySelect = new SelectWrapper(by.id('select_status'));

    return mySelect.selectByText(status);
  }

  getURLParameters() {
    return element(by.id('params_joined')).getText();
  }

  touchField() {
    return browser.touchActions().
    tap(element(by.id('repository'))).
    perform();
  }
}
