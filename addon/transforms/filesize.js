import DS from 'ember-data';
import FileSize from '../objects/FileSize';

export default DS.Transform.extend({
  deserialize: function (serialized) {
    return FileSize.create({
      bytes: serialized
    });
  },

  serialize: function (deserialized) {
    if (deserialized) {
      return deserialized.get('bytes');
    }

    return 0;
  }
});
