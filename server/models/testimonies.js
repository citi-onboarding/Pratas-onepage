const keystone = require('keystone');

const { Types } = keystone.Field;

const Testimonies = new keystone.List('Depoimentos',{map: { name: 'nome' }});

Testimonies.add({
  image: { 
    type: Types.CloudinaryImages,
    require: true,
    initial: true, 
  },
  nome: {
    type: Types.Text,
    required: true, 
    initial: true, 
    index: true,
  },
  lugar: {
    type: Types.Text,
    required: true, 
    initial: true, 
    index: true,
  },
  depoimento: {
    type: Types.Textarea,
    required: true, 
    initial: true, 
    index: true,
  }
});

Testimonies.register();