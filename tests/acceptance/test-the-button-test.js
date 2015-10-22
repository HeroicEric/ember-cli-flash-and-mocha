import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-cli-flash-and-mocha/tests/helpers/start-app';

module('Acceptance | test the button', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('it works with qunit', function(assert) {
  assert.expect(1);

  visit('/');

  click('.button-with-flash-message');

  andThen(() => {
    const flashMessage = find('#flash-message').text().trim();

    assert.equal(flashMessage, 'HELLO', 'it works with qunit');
  });
});
