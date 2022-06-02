-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE FeelTheMusic;

USE FeelTheMusic;

CREATE TABLE Usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	Nome VARCHAR(20),
	Email VARCHAR(30),
	Senha VARCHAR(20)
);

CREATE TABLE NovosGeneros (
	idGenero INT PRIMARY KEY AUTO_INCREMENT,
	nomeGenero VARCHAR(20),
	Descricao varchar(300),
	fkUsuario INT,
	FOREIGN KEY(fkUsuario) REFERENCES Usuarios(idUsuario)
)AUTO_INCREMENT = 10000;




/* para sql server - remoto - produção */

CREATE TABLE Usuarios (
	idUsuario INT PRIMARY KEY IDENTITY(1,1),
	Nome VARCHAR(20),
	Email VARCHAR(30),
	Senha VARCHAR(20),
);

CREATE TABLE NovosGeneros (
	idGenero INT PRIMARY KEY IDENTITY(10000,1),
	nomeGenero VARCHAR(20),
	Descricao varchar(300),
	fkUsuario INT,
	FOREIGN KEY(fkUsuario) REFERENCES Usuarios(idUsuario),
);


