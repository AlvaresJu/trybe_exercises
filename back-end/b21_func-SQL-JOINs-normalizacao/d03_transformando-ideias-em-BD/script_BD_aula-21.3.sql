-- -----------------------------------------------------
-- Schema livraria_aula21_3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS livraria_aula21_3;
USE livraria_aula21_3;

-- -----------------------------------------------------
-- Table livraria_aula21_3.categoria
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS categoria (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

-- -----------------------------------------------------
-- Table livraria_aula21_3.autor
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS autor (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_completo VARCHAR(200) NOT NULL,
  nacionalidade VARCHAR(100),
  data_nascimento DATE,
  genero VARCHAR(100),
  pseudonimo VARCHAR(100)
);

-- -----------------------------------------------------
-- Table livraria_aula21_3.livro
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS livro (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  ano_lancamento INT,
  idioma VARCHAR(100) NOT NULL,
  editora VARCHAR(200),
  autor_id INT NOT NULL,
  categoria_id INT NOT NULL,
  CONSTRAINT `fk_livro_autor`
    FOREIGN KEY (autor_id) REFERENCES autor (id),
  CONSTRAINT `fk_livro_categoria`
    FOREIGN KEY (categoria_id) REFERENCES categoria (id)
);

-- -----------------------------------------------------
-- Table livraria_aula21_3.cliente
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS cliente (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_completo VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(45),
  endereco VARCHAR(200),
  cpf VARCHAR(11) NOT NULL,
  data_nascimento DATE
);

-- -----------------------------------------------------
-- Table livraria_aula21_3.aluguel
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS aluguel (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_aluguel DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  data_devolucao DATETIME,
  tempo_aluguel_previsto INT NOT NULL DEFAULT 5,
  cliente_id INT NOT NULL,
  livro_id INT NOT NULL,
  CONSTRAINT `fk_aluguel_cliente`
    FOREIGN KEY (cliente_id) REFERENCES cliente (id),
  CONSTRAINT `fk_aluguel_livro`
    FOREIGN KEY (livro_id) REFERENCES livro (id),
);