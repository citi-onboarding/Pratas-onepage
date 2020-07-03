const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner');

Banner.add({
  image: { 
    type: Types.CloudinaryImages,
    require: true,
    initial: true, 
  },
  text: {
    type: Types.Text,
    required: true, 
    initial: true, 
    index: true,
  }
});

Banner.register();