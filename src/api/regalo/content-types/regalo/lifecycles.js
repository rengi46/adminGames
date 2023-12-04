function createHash(str){
  const splitCode = str.split('')
  const newCode = splitCode.map((letter)=> `${letter}${String(letter).charCodeAt(0)}`)
  return newCode.join('')
}

module.exports = {
  async afterCreate(event)  {
    // console.log('afterCreate',event);
    const result = event.result

    for (let index = 0; index < Number(result.Max); index++) {
      const code = `${result.codigoRegalo}-${index}`

      const data = {
        data:{
          "regaloEntregado":0,
          "emailEnviado":0,
          "code":createHash(code),
          "inicio":result.Inicio,
          "fin":result.Fin,
          "finPromo":result.FinPromo,
          "tienda":result.tienda.count,
          "descripcion":result.Descripcion,
          "publishedAt": new Date(),
          "createdBy":result.createdBy.id,
        }
      } 
      try{
          strapi.db.query('api::check.check').create(data)
  
        } catch (err) {
          strapi.log.error( err)
      }
  
    }
    }
}