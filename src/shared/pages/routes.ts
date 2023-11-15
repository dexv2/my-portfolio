export const Routes = {
  Menu: {
    // Landing: `/`,
    Home: `/#home`,
    Projects: `/#projects`,
    Skills: `/#skills`,
    About: `/#about`,
    Experience: `/#experience`,
    Connect: `/#connect`,
    // About: `/about`,
    Blog: `/blog`,
    BlogArticle: (slug: string) => (`/blog/${slug}`),
  },
  Legal: {
    PrivacyPolicy: `/document/privacy-policy`,
    CookiePolicy: `/document/cookie-policy`,
    TermsOfUse: `/document/terms-of-use`,
    Disclaimer: `/document/disclaimer`,
  },
};

export const ExternalRoutes = {
  Menu: {
    Faq: `https://docs.matrixswap.io/general/faq`,
    Contact: `https://docs.matrixswap.io/general/official-matrixswap-links`,
    Whitepaper: `https://docs.matrixswap.io/`,
    Docs: `https://docs.matrixswap.io/`,
    Learn: `https://docs.matrixswap.io/library/learning-center-and-blog`,
    // Swap: `https://router.matrixswap.io/`,
    // Perpetual: `https://perp.matrixswap.io/`,
    MediaKit: `https://drive.google.com/drive/folders/1LuYDTUUmhV-Eeay_femOV9aK8unnEaXR?usp=sharing`,
    // Faq: `https://docs.matrix-labs.xyz/general/faq`,
    // Contact: `https://docs.matrix-labs.xyz/general/official-matrixswap-links`,
    // Whitepaper: `https://docs.matrix-labs.xyz/`,
    // Docs: `https://docs.matrix-labs.xyz/`,
    // Learn: `https://docs.matrix-labs.xyz/library/learning-center-and-blog`,
    Swap: `https://dex-aggregator-eight.vercel.app/#/`,
    Perpetual: `https://perp.matrix-labs.xyz/`,
    Escrow: `https://github.com/dexv2/escrow-payment/`,
    Cv: `https://drive.google.com/file/d/1m8L2JsxemTD6UtNkeemRTXxiBdNLq7N6/view?usp=sharing`
  },
  Social: {
    AnnouncementTelegram: `https://t.me/matrixswapexchange`,
    Telegram: `https://t.me/matrixswapofficial`,
    Twitter: `https://twitter.com/matrixswap`,
    Discord: `https://discord.com/invite/nRJXNtZBe6`,
    Github: `https://github.com/dexv2/`,
    Medium: `https://matrixlabs.medium.com/`,
    LinkedIn: `https://www.linkedin.com/in/vermont-paguiligan/`,
    Gmail: `mailto:vermont.paguiligan@gmail.com`
  },
};
