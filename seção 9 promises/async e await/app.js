const promessa = new Promise( resolve => resolve('ok'))

async function start(){

  try{
  const result = await promessa
  console.log(result)
  }catch(err){
    console.log(err)
  } finally{
    console.log('rodar sempre')
  }
  
}

start()