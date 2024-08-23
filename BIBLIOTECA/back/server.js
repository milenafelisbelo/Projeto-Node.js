const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
});

const create = (req, res) => {
    let nome = req.body.nome;
    let autor = req.body.autor;
    let descricao = req.body.descricao;
    let dataCadastro = req.body.dataCadastro;

    let query = `INSERT INTO Livros (nome, autor, descricao, dataCadastro) value`;
    query += ` ('${nome}', '${autor}', '${descricao}', '${dataCadastro}')`;

    con.query(query, (err, result) => {
        if (err) {
            console.log("Erro ao cadastrar o livro");
        } else {
            console.log("Livro cadastrado com sucesso");
        }
    });
};

app.get("/", teste);
app.post("/livros", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
