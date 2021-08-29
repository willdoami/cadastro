CREATE TABLE IF NOT EXISTS candidatos (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf BIGINT NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    genero VARCHAR(20) NOT NULL,
    endereco json NOT NULL,
    telefone BIGINT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cargo_pretendido VARCHAR(20) NOT NULL,
    estado_civil VARCHAR(20) NOT NULL,
    instituicao_ensino VARCHAR(255),
    nivel_formacao VARCHAR(20),
    profissao VARCHAR(255) NOT NULL,
    detalhes VARCHAR(255)
);
