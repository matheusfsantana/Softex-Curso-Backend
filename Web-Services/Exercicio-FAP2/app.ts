const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let usuarios = [
  { id: 1, nome: 'Matheus' },
  { id: 2, nome: 'Lucas' },
  { id: 3, nome: 'Mariana' }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === usuarioId);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send('Usuário não encontrado.');
  }
});


app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome 
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario); 
});


app.get('/saudacao/:nome', (req, res) => {
  const { nome } = req.params;
  res.send(`Olá, ${nome}! Bem-vindo!`);
});


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
