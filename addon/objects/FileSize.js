import Ember from 'ember';

export default Ember.Object.extend({
  bytes: 0,

  kb: Ember.computed('bytes', function () {
    return this.get('bytes') / 1000;
  }),
  mb: Ember.computed('bytes', function () {
    return this.get('bytes') / Math.pow(1000, 2);
  }),
  gb: Ember.computed('bytes', function () {
    return this.get('bytes') / Math.pow(1000, 3);
  }),
  tb: Ember.computed('bytes', function () {
    return this.get('bytes') / Math.pow(1000, 4);
  }),
  pb: Ember.computed('bytes', function () {
    return this.get('bytes') / Math.pow(1000, 5);
  }),

  kbWithUnits: Ember.computed('bytes', function () {
    return this.get('kb') + ' KB';
  }),
  mbWithUnits: Ember.computed('bytes', function () {
    return this.get('mb') + ' MB';
  }),
  gbWithUnits: Ember.computed('bytes', function () {
    return this.get('gb') + ' GB';
  }),
  tbWithUnits: Ember.computed('bytes', function () {
    return this.get('tb') + ' TB';
  }),
  pbWithUnits: Ember.computed('bytes', function () {
    return this.get('pb') + ' PB';
  })

});
