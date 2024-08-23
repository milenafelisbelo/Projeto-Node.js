drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

create table Livros(
    id integer primary key auto_increment,
    nome varchar (100) not null,
    autor varchar(100) not null,
    descricao varchar(255) not null,
    dataCadastro date not null
);

show tables;