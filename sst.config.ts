/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "portafolio-ventulab",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const gmailUser = new sst.Secret("GMAIL_USER");
    const gmailAppPassword = new sst.Secret("GMAIL_APP_PASSWORD");

    new sst.aws.React("portafolio-ventulab", {
      domain: {
        name: "alex.ventulab.com",
        redirects: ["www.alex.ventulab.com"],
      },
      link: [gmailUser, gmailAppPassword],
    });
  },
});
