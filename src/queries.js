const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'cadastro',
    host: 'localhost',
    database: 'cadastro',
    password: 'cadastro',
    port: 5432,
});

// Retorna todos os candidatos
const getCandidatos = (request, response) => {
    pool.query('SELECT * FROM candidatos ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

// Retorna o canditados buscando pelo ID
const getCandidatosById = (request, response) => {
    const id = parseInt(request.params.id);
  
    pool.query('SELECT * FROM candidatos WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

const createCandidato = (request, response) => {
    const { nome, cpf, data_nascimento, sexo, endereco,
            telefone, email, cargo_pretendido, estado_civil,
            instituicao_ensino, nivel_formacao, profissao, detalhes } = request.body
  
    pool.query(
        'INSERT INTO candidatos (nome, cpf, data_nascimento, sexo, endereco' +
        'telefone, email, cargo_pretendido, estado_civil,' +
        'instituicao_ensino, nivel_formacao, profissao, detalhes)' +
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', 
        [nome, cpf, data_nascimento, sexo, endereco,
            telefone, email, cargo_pretendido, estado_civil,
            instituicao_ensino, nivel_formacao, profissao, detalhes]
            , (error, results) => {
                if (error) {
                    throw error;
                }
        response.status(201).send(`Candidato adicionado com o ID: ${result.insertId}`);
    });
}

const deleteCandidato = (request, response) => {
    const id = parseInt(request.params.id);
  
    pool.query('DELETE FROM candidato WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Usuário com ID foi deletado: ${id}`)
    });
}


module.exports = {
    getCandidatos,
    getCandidatosById,
    createCandidato,
    deleteCandidato
}