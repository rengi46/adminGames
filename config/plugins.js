module.exports = ({ env }) => ({
  //...
  'import-export-entries': {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: 'http://localhost:1337/', // default: "".
      
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        ssl: false,
        tls: false,
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN

        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'noreply@recipee.com',
        defaultReplyTo: 'nonreply@recipee.com',
      },
    },
  },
  //...
});