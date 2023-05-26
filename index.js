const express = require('express');

const server  = express();

server.use(express.json());

const cursos = ['JavaScript', 'React', 'Banco de dados'];


server.get('/cursos/:index', (req, res)=>{
const index = req.params.index;
const curso = cursos[index];
return res.json(curso);
});

server.get('/cursos', (req, res)=>{
return res.json(cursos);
});

server.post('/cursos',(req, res)=>{
    cursos.push(req.body.nome);
    return res.json(cursos);
});

server.put('/cursos/:index',(req, res)=>{
    const index = req.params.index;
    const nome = req.body.nome;
    cursos[index] = nome;
    return res.json(cursos);
});


server.delete('/cursos/:index', (req, res)=>{
const index = req.params.index;
const curso = cursos[index];
if(curso){
cursos.splice(index, 1);
return res.json(cursos);
}
return res.status(500).json('Posição não encontrada');
});

server.listen(3333, () =>{
    console.log('ServerUp!');
});

