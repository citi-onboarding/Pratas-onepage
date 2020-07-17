const keystone = require('keystone');

const { Types } = keystone.Field;

// First we create the WhoWeAre list.
const aboutUs = new keystone.List('Quem Somos', {map: { name: 'Titulo' }}, {nocreate: true}, {nodelete: true});

// Then we are going to add the fields to our list.
aboutUs.add({
  Visao: { type: Types.Textarea, required: true, initial: true },
  Missao: { type: Types.Textarea, require: true, initial: true },
  Valor: { type: Types.Textarea, require: true, initial: true },
  Titulo: { type: Types.Textarea, require: true, initial: true },
  TextoInspirador: { type: Types.Textarea, require: true, initial: true },
  Imagem: { type: Types.CloudnaryImage, require:true, initial:true }
});

aboutUs.register();

