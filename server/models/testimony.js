const keystone = require('keystone');

const { Types } = keystone.Field;

const testimony = new keystone.List('Depoimentos', {
  map: { name: 'name' },
});

testimony.add({
  name: {
    type: Types.Text, value: 'Depoimentos', required: true, initial: true,
  },
  about: {
    type: Types.Text, value: 'Sobre', require: true, initial: true,
  },
  text: {
    type: Types.Textarea, require: true, initial: true,
  },
  image: {
    type: Types.CloudinaryImages, require: true, initial: true,
  },
});

testimony.register();