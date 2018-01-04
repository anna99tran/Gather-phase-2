const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#items-container'), '');
    });
    });
  describe('can navigate', () => {
    it('to /create',() => {
      browser.url('/');
      browser.click('a[href="/items/create.html"]');
      assert.include(browser.getText('body'), 'Create');
    });
  });
});
