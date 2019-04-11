import { Before, Given, Then, When} from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import {by, element} from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Automatic Branch Generator');
});

When('I write a repository', async () => {
  await page.setRepository('prueba.git');
});

When('I choose branch type feature', async ()  => {
  await page.setBranchType('feature');
});

When('I choose status start', async ()  =>  {
  await page.setStatus('Start');
});

When('I set feature name', async ()  => {
  await page.setBranch('guay');
  // Write code here that turns the phrase above into concrete actions
});

When('I touch another field', async () => {
  await page.touchField();
});

Then('I get parameters repository feature start',   async () => {
//  page.getURLParameters().then(text => {console.log('Ha llegado' + text);
//  });
  expect(await page.getURLParameters()).to.
                     equal('REPO_URL=prueba.git&BRANCH_NAME=develop&FEATURE_STATUS=start&FEATURE_NAME=guay');
});
