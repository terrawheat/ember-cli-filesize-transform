import Ember from 'ember';

export default Ember.Object.extend({
  bytes: 0,


  kb: Ember.computed('bytes', function () {
    return (this.get('bytes') / 1000).toFixed(2);
  }),
  mb: Ember.computed('bytes', function () {
    return (this.get('bytes') / Math.pow(1000, 2)).toFixed(2);
  }),
  gb: Ember.computed('bytes', function () {
    return (this.get('bytes') / Math.pow(1000, 3)).toFixed(2);
  }),
  tb: Ember.computed('bytes', function () {
    return (this.get('bytes') / Math.pow(1000, 4)).toFixed(2);
  }),
  pb: Ember.computed('bytes', function () {
    return (this.get('bytes') / Math.pow(1000, 5)).toFixed(2);
  }),

  bytesWithUnits: Ember.computed('bytes', function () {
    return this.get('kb') + ' B';
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
  }),

  humanReadable: Ember.computed('bytes', function () {
    var sizes = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb'];
    var that = this;
    var result;

    sizes.some(function (size) {
      if (that.get(size) < 1000) {
        result = size;
        return true;
      }

      return false;
    });

    return this.get(result + 'WithUnits');
  })

});
