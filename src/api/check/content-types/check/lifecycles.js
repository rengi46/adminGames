

module.exports = {
  afterUpdate:async (model)=> {
    // Coloca tu lógica personalizada aquí
 
    if(model.result.cliente.count > 0 && model.result.regaloEntregado === false && model.result.emailEnviado === true){
      const id = model.result.id;
      const gift =await strapi.db.query('api::check.check').update({
        where: { 
          id: id 
        },
        populate: true,
        data:{
          regaloEntregado:true,
        }
      })

      const sendTo = gift.cliente.Email
      try {
        const emailOptions = {
          to: "rogerpuigdemasa@gmail.com",
          from: 'rpuigdemasa@phygitalbcn.com',
          subject: 'This is a test',
          html: "<h1>Regalo canjeado</h1>",
        }
        console.log(emailOptions);
        await strapi.plugins['email'].services.email.send({
          to: sendTo,
          from: 'rpuigdemasa@phygitalbcn.com',
          subject: 'This is a test',
          text:"hola mundo",
          html: "<h1>Regalo canjeado</h1>",
        })
        console.log("Email sent");
      } catch (err) {
        strapi.log.error(err)
        console.log('Error sending email' );
      }
    }
  }
}