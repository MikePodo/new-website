import { RESUME } from "~services/links";

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    emailServiceKey: "service_1h66r6c",
    emailTemplateKey: "template_reviqvr",
    emailPublicKey: "-F46i3A00UCDjqMDk",
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: RESUME,
        permanent: true,
      },
    ];
  },
};
