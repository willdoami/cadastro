CREATE TABLE IF NOT EXISTS candidatos (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf BIGINT NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    sexo VARCHAR(6) NOT NULL,
    endereco json NOT NULL,
    telefone BIGINT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cargo_pretendido VARCHAR(20) NOT NULL,
    estado_civil VARCHAR(20) NOT NULL,
    instituicao_ensino VARCHAR(255),
    nivel_formacao VARCHAR(16),
    profissao VARCHAR(255) NOT NULL,
    detalhes VARCHAR(255)


INSERT INTO candidatos (
    nome,
    cpf,
    data_nascimento,
    sexo,
    endereco,
    telefone,
    email,
    cargo_pretendido,
    estado_civil,
    instituicao_ensino,
    nivel_formacao,
    profissao,
    detalhes
)
VALUES (
    'Joao',
    99999999999,
    '1999-01-02'::date,
    'Masculino',
    '{ "rua" : "Rua qualquer", "numero": "1111" }',
    21988999999,
    'exemplo@exemplo.com',
    'Assistente',
    'Solteiro',
    'UERJ',
    'Superior Completo',
    'Operador',
    'Breve descricao'
)



curl --data "nome=Maria&cpf=88888888888&data_nascimento=1993-03-21&sexo=Feminino&endereco='{"Rua": 'nova', "numero" : "1234"}'&telefone=31999988888&email=exemplo@exemplo.com.br&cargo_pretendido=Direcao&estado_civil=Casada&instituicao_ensino=IFMG&nivel_formacao=SuperiorCompleto&profissao=Gerente&detalhes=Nada&" http://localhost:3000/candidatos