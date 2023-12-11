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
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('MAIL_USERNAME'),
        defaultReplyTo: env('MAIL_USERNAME'),
      },
    },
    // config: {
    //   provider: 'nodemailer',
    //   providerOptions: {
    //     service: 'Gmail',
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     // ssl: false,
    //     // tls: false,
    //     auth: {
    //       type: 'OAuth2',
    //       user: env("MAIL_USERNAME"),
    //       pass: env("MAIL_PASSWORD"),
    //       clientId: env("OAUTH_CLIENTID"),
    //       clientSecret: env("OAUTH_CLIENT_SECRET"),
    //       refreshToken: env("OAUTH_REFRESH_TOKEN")

    //     },
    //     // ... any custom nodemailer options
    //   },
    //   settings: {
    //     defaultFrom: env("MAIL_USERNAME"),
    //     defaultReplyTo: env("MAIL_USERNAME"),
    //   },
    // },
  },
  //...
});