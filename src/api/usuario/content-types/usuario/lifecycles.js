const QRCode = require('qrcode');


module.exports = {

  async afterCreate(event)  {
    const {regalo} = require('../../../../templatesMail/templateMail');
      const sendTo = event.result.Email
      strapi.log.debug(`Trying to send an email to ${sendTo}`)

      const gift =await strapi.db.query('api::check.check').update({
        where: { 
          regaloEntregado: false , 
          emailEnviado: false,
          inicio:{ $lte:new Date()},
          fin:{ $gte:new Date()},
        },
        populate: true,
        data:{
          emailEnviado:true,
          cliente: event.result.id
        }
      })
      if(!gift){
        console.log("No hay regalos");
        return
      }
      const qrCodeDataURL = await QRCode.toDataURL(gift.code);
      try {
        const emailOptions = {
          to: sendTo,
          subject: 'This is a test',
          html: regalo("https://phygitalstudio.es/","roger","message",gift.code),
          attachments: [{
            filename: 'QR.png',
            path: qrCodeDataURL,
            cid: gift.code 
          }]
        }
        await strapi.plugins['email'].services.email.send(emailOptions)
        // strapi.log.debug(`Email sent to ${sendTo}`)
        console.log("Email sent");
      } catch (err) {
        strapi.log.error(`Error sending email to ${sendTo}`, err)
        console.log('Error sending email' );
      }
  }
}