const keystone = require('keystone');

const { Types } = keystone.Field;

const footer = new keystone.List('Social');

footer.add({

    Instragram: {type: Types.Url, initial: true},
    Facebook: {type: Types.Url, initial: true},
    Email: {type: Types.Email, initial: true},
    Telefone: {type: Types.Text, initial: true},
    Whatsapp: {type: Types.Url, initial: true},
    AdminURL: {type: Types.Url, initial: true}

});

footer.register();