(async () =>{
  const database = require('./db');
  const produto = require('./produtoModel');

  try{
    const resultado = await database.sync();
    console.log("Banco conectado com sucesso");
  }
  catch(error){
    console.log(`Falha ao se conectar ao banco, ${error}`);
  }
})();

