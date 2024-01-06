const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Usuario = require('./app/models/usuario');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://santi2006:Santi2006@cluster0.0grnbd5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'app', 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'views', 'index.html'));
});

app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, 'app', 'views', `${page}.html`));
});

app.post('/register', async (req, res) => {
  try {
    const { newUsername, newPassword, email } = req.body;

    const existingUser = await Usuario.findOne({ $or: [{ username: newUsername }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario o correo electrónico ya existe' });
    }

    const newUser = new Usuario({
      username: newUsername,
      password: newPassword,
      email,
    });

    await newUser.save();

    res.status(200).json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Usuario.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor ON en el puerto ${port}`);
});