const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner', {
  map: { name: 'text' },
  nocreate: true,
  nodelete: true
});

Banner.add({
  background: { 
    type: Types.CloudinaryImages,
    require: true,
    initial: true, 
  },
  text: {
    type: Types.Text,
    required: true, 
    initial: true, 
    index: true,
  },
  key: { type: Types.Text, value: 'Banner', noedit: true },
});

Banner.register();