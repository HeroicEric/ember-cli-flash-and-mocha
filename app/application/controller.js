import Ember from 'ember';

const {
  Controller,
  RSVP,
  get
} = Ember;

const { Promise } = RSVP;

export default Controller.extend({
  actions: {
    doSomething() {
      const flashMessages = get(this, 'flashMessages');
      const promise = new Promise((resolve/*, reject */) => {
        resolve("HELLO");
      });

      promise.then((value) => {
        flashMessages.success(value);
      });
    }
  }
});
