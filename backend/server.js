const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./src/models/User');
const zxcvbn = require('zxcvbn');
const cors = require('cors');
const sequelize = require('./src/config/db');



const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

// Rota para registrar um novo usuário
app.post('/cadastrar', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    
    // Verificar a força da senha
    const passwordStrength = zxcvbn(password);
    if (passwordStrength.score < 3) {
      return res.status(400).json({ error: 'Senha fraca. Escolha uma senha mais forte.' });
    }
    
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Salvar o usuário no banco de dados
    await User.create({ username, password: hashedPassword, email });

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

// Rota para fazer login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Por favor, informe email e senha" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Email não cadastrado. Crie uma conta para continuar." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign({ userId: user.id }, 'segredo-do-token', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Erro no login" });
  }
});


  app.listen(port, async () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    try{
      await sequelize.authenticate();
      console.log('conectado ao banco de dados MySQL');
    }catch(error){
      console.error('erro ao conectar ao banco de dados MySQL:', error);
    }
  });