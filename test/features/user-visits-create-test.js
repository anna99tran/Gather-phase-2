const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

// Add your tests below:
describe('user visits the create page', () => {
  describe('posts a new item', () => {
    it('renders the new item', () => {
      const itemToCreate = buildItemObject();
      browser.url('/items/create.html');
      
      
      browser.setValue("#title-input", itemToCreate.title);
      browser.setValue("#description-input", itemToCreate.description);
      browser.setValue("#imageUrl-input", itemToCreate.imgUrl);
      browser.click("#submit-button");

      assert.include(browser.getText('body'),itemToCreate.title);
      assert.include(browser.getText('body'),itemToCreate.description);
      assert.inlcude(browser.getAttribute('body img','src'),itemToCreate.imgUrl);
    });
    });
    });
