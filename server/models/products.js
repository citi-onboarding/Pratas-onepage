const keystone = require('keystone');
const { Select } = require('keystone/lib/fieldTypes');

const { Types } = keystone.Field;

const products = new keystone.List('Produtos', {map: {name: 'type'}});

products.add({

    imagem: { type: Types.CloudinaryImages, required: true, initial: true },
    type: { type: Select, options: 'colar, anel, pulseira, brinco, argola', required: true, initial: true }
});

products.register();