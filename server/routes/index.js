const nodemailer = require('nodemailer');
const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const aboutUs = keystone.list('Quem Somos');
const banner = keystone.list('Banner');
const footer = keystone.list('Contato');
const products = keystone.list('Produtos');
const testimonies = keystone.list('Depoimentos');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/aboutUs', (req, res) => {
    aboutUs.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/banner', (req, res) => {
    banner.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/footer', (req, res) => {
    footer.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/products', (req, res) => {
    products.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/testimonies', (req, res) => {
    testimonies.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.post('/api/contact', async (req, res) => {
   
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: process.env.USER, 
        pass: process.env.PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: process.env.USER, 
      to: process.env.USER, 
      subject: 'Novo cadastro de cliente', 
      html: `<p> Nome: ${req.body.name} </p>
             <p> Telefone: ${req.body.telephone} </p>
             <p> Email: ${req.body.email} </p>
             <p> Onde nos conheceu: ${req.body.meeting} </p>
             <p> Mensagem: ${req.body.message} </p>`,
    });

    res.send('enviado');
  })
};
