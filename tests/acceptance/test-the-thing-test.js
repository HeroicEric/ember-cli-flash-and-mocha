/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

const { run } = Ember;

describe('Acceptance: TestTheThing', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    run(application, 'destroy');
  });

  it('can click the button', function(done) {
    visit('/');

    click('.button-with-flash-message');

    andThen(() => {
      const flashMessage = find('#flash-message').text().trim();

      expect(flashMessage).to.equal('HELLO');

      done();
    });
  });
});
