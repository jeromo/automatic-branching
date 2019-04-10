import { Before, Given, Then, When} from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

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
  // Write code here that turns the phrase above into concrete actions
  await page.setRepository('"prueba.git');
});

When('I choose branch type feature', async ()  => {
  // Write code here that turns the phrase above into concrete actions
  await page.setBranchType('feature');

});
