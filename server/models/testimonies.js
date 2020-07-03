const keystone = require('keystone');

const { Types } = keystone.Field;

const Testimonies = new keystone.List('Testimonies');

Testimonies.add({
  image: { 
    type: Types.CloudinaryImages,
    require: true,
    initial: true, 
  },
  depoimento: {
    type: Types.depoimento,
    required: true, 
    initial: true, 
    index: true,
  }
});

Testimonies.register();