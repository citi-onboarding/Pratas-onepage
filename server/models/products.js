const keystone = require('keystone');

const { Types } = keystone.Field;

const products = new keystone.List('Produtos', {map: {name: 'nome'}});

products.add({

    imagem: { type: Types.CloudinaryImages, required: true, initial: true },
    nome: { type: Types.Text, required: true, initial: true }

});

products.register();