const fs = require('fs/promises');

// como vamos ler arquivos assincronamente, precisamos do async
module.exports = async function apiCredentials(req, _res, next) {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authdata = await fs.readFile('./authdata.json', 'utf-8');
  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);
  
  if (token in authorized) {
    // modifica o req para guardar a informação importante
    req.authorizedTeams = authorized[token].teams;
    next(); // pode continuar
  } else {
    const err = {
      statusCode: 401,
      message: 'unauthorized client token',
    };
    next(err);
  }
};
