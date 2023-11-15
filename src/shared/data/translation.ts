/*
  NOTE:
  This object sole purpose is to gather the static strings together 
  and serve as a base for a possible future multi language support.
*/
export const Translation = {
  en: {
    meta: {
      title: `Vermont Phil Paguiligan`,
      description: `Get to know my skills and experience by browsing my portfolio.`,
    },
    common: {
      launchApp: `Launch App`,
      getInTouch: `Get in Touch`,
      enterApp: `Enter App`,
      viewGithub: `View GitHub`,
      comingSoon: `Coming Soon!`,
      subscribe: `Subscribe`,
      subscribed: `Subscribed!`,
      download: `Download my CV`,
    },
    label: {
      my: `MY`,
      portfolio: `PORTFOLIO`,
      fname: `VERMONT PHIL`,
      lname: `PAGUILIGAN`
    },
    projects: {
      swap: `MATRIX SWAP`,
      perp: `MATRIX PERP`,
      escrow: `ESCROW PAYMENT`
    },
    error: {
      emptyEmail: `Input is empty`,
      invalidEmail: `Input is not an email`,
    },
    menupoint: {
      home: `Home`,
      skills: `Skills`,
      projects: `Projects`,
      experience: `Experience`,
      about: `About`,
      connect: `Connect`,
      community: `Community`,
      learn: `Learn`,
      docs: `Docs`,
      blog: `Blog`,
      mediaKit: `Media Kit`,
      technicalDocs: `Technical Docs`,
      whitepaper: `Whitepaper`,
      faq: `FAQ`,
      contact: `Contact`,
      support: `Support`,
      privacyPolicy: `Privacy Policy`,
      cookiePolicy: `Cookie Policy`,
      termsOfUse: `Terms of Use`,
      disclaimer: `Disclaimer`,
    },
    communityMenupoint: {
      twitter: `Visit Our Official Twitter Page`,
      discord: `Join the Matrix Labs Community on Discord`,
      medium: `Catch Up on Announcements in Our Medium Blog`,
      telegram: `Join the Official Matrix Labs Telegram Channel`,
      annTelegram: `Matrix Labs Announcement Telegram Channel`,
      blog: `Catch Up on Our Latest Blog Posts`,
      learn: `Learn How to Buy $MATRIX Tokens`,
      whitepaper: `Read the Matrix Labs Whitepaper`,
    },
    header: { },
    footer: {
      joinCommunity: `Join Our Community`,
      emailPlaceholder: `youremail@example.com`,
      copyright: `Copyright`,
      allRightsReserved: `All rights reserved.`,
    },
    blog: {
      title: `Blog`,
      description: `Learn more about Matrix Labs, DeFi, trading, and much more.`,
      recommendedPosts: `More To Explore`,
      allPosts: `All Posts`,
      loadMore: `Load more posts`,
      sharePost: `Share this post`,
    },
    section: {
      intro: {
        title: `Hi, I'm Vermont Phil Paguiligan 👋🏼`,
        description: `A Full-Stack Blockchain Engineer`,
      },
      apps: {
        title: `Browse through my projects`,
        swap: {
          title: `MatrixSwap`,
          description: `Swap & trade on Polygon, BSC, Arbitrum, and 6 other blockchains.`,
          action: `Enter DEX Aggregator`,
        },
        perp: {
          title: `MatrixPerp`,
          description: `Start trading derivatives on Polygon mainnet.`,
          action: `Trade on Mainnet`,
        },
        zap: {
          title: `MatrixZap`,
          description: `Instantly “Zap” all of your tokens into a farm and start earning rewards.`,
          action: ``,
        },
        escrow: {
          title: `EscrowPayment`,
          description: `Make your online transaction secure by using this payment system.`,
          action: `View Contracts`
        }
      },
      skills: {
        blockchain: {
          title: `Skills in Blockchain Development`,
          description: `I specialize in developing decentralized applications (DApps) and Smart Contracts using Solidity, implementing cutting-edge features such as Staking, Yield Farming, and Decentralized Exchanges. My expertise extends to using libraries such as Web3.js, Ethers.js, and Viem, and IPFS for seamless data storage, while also leveraging advanced tools like Hardhat and Foundry for Smart Contract Deployment Automation and maintaining Upgradeable proxies. With a keen understanding of JSON RPC, EVM, and GraphQL/Subgraphs, I'm dedicated to pushing the boundaries of DeFi innovation.`
        },
        fullStack: {
          title: `Skills in Full Stack Development`,
          description: `Proficient in both Javascript and Typescript, I excel in full-stack development, harnessing the power of React, Next.js, and Vite.js for dynamic front-end experiences, and Vue.js for creating versatile UI components. I ensure smooth collaboration and version control using Git and Github. On the server side, I leverage the capabilities of Node.js to build robust applications, complemented by MongoDB for efficient data storage. Whether crafting RESTful APIs or integrating with existing ones, my holistic approach spans the entire stack, ensuring seamless and scalable web development.`
        },
        testing: {
          title: `Testing Methodologies`,
          description: `For code maturity and extra security, I advocate for a comprehensive testing strategy, embracing methodologies like Test Driven Development to ensure robust code from the start. Utilizing Unit Testing, I meticulously validate individual components, while Integration Testing guarantees seamless collaboration between them. Utilized Fuzzing and Invariant Testing which is a powerful tool to expose incorrect logic in protocols. This meticulous approach to testing ensures the reliability and stability of the entire application.`
        },
        soft: {
          title: `Soft Skills`,
          description: `As a professional, I bring a versatile skill set to the table — I am accountable, ensuring responsibility in every task. Upholding ethical standards is paramount in my approach. A natural problem-solver and critical thinker, I thrive in analyzing challenges and finding innovative solutions. I am both a team player and a leader, fostering collaboration while providing guidance when needed. Known for my flexibility, I adapt seamlessly to dynamic work environments. Finally, my diligent work ethic ensures that every project is approached with dedication and attention to detail.`
        }
      },
      features: {
        title: `Matrix Labs provides unique features for DeFi users and projects`,
        price: {
          title: `Best Swap Prices`,
          description: `Our DEX Aggregator grabs liquidity from multiple AMMs within Polygon Network and Binance Smart Chain and executes trades accordingly.`,
        },
        speed: {
          title: `Lightning Fast Perpetual Swaps`,
          description: `Matrix Labs brings on-chain perpetual futures to Polygon. Making derivatives trading simple and easy. (More chains coming soon)`,
        },
        comfort: {
          title: `‘Zap’ Your Tokens With 1 Click`,
          description: `Our Zapper function allows you to “Zap” all of your tokens into farms so you can start earning rewards.`,
        },
        swap: {
          title: `Multiple chains. One decentralized exchange.`,
          description: `MatrixSwap is currently available on four different chains - Polygon, BSC, Avalanche, and Fantom. Aggregating over $3billion in liquidity, you can now swap your favorite tokens within these four chains for the absolute best prices. Enjoy some unique features, too.`,
          multiToken: `Multi Token Swaps`,
          nukeButton: `Emergency Nuke Button`,
        },
        perp: {
          title: `Trade Perpetuals. Up to 25x Leverage.`,
          description: `Using the power of Virtual AMMs (vAMMs), derivatives traders can leverage their favorite assets on Polygon with perfect price execution, low fees, and fast transactions. MatrixPerp offers infinite on-chain liquidity and allows traders up to 25x leverage.`,
        },
        zap: {
          title: `Instantly “Zap” Your Tokens With 1 Click`,
          description: `Another amazing feature within our suite of tools is “MatrixZap.” MatrixZap allows you to quickly “Zap” your tokens quickly into a Liquidity Pool that allows you to earn interest with specific APRs. You can also “Zap” out of your positions allowing you more freedom to do as you choose with your tokens.`,
        },
        security: {
          title: `Decentralized. Secured by Halborn.`,
          description: `We’ve heard too many horror stories within this industry and that’s why we make the security of your funds our absolute priority. Trusted by industry leaders such as Avalanche, Terra Labs, Dapper, Phantom, and more, Matrix Labs’ products have been audited by Halborn Security. `,
          secured: `Secured by`,
        },
      },
      about: {
        title: `About Me`,
        description: `Versatile Full Stack Engineer with a track record of success in driving innovation and efficiency within fast-paced, tech-driven environments. Adept at designing and developing Web 3.0 applications using cutting-edge technologies like Solidity and React. Leveraging expertise in DeFi crypto protocols to build decentralized applications that reshape the industry. Exceptional problem-solving skills, a strong inclination towards continuous learning, and a dedication to driving team growth and process improvements. `,
      },
      roadmap: {
        title: `Work Experience Roadmap`,
        bitcapp: {
          item1: `Directed the development of a state-of-the-art e-commerce and banking application, seamlessly integrating cryptocurrency functionality, resulting in a 30% increase in financial versatility.`,
          item2: `Efficiently coordinated precise project planning and allocated tasks judiciously among team members, leading to a 20% improvement in streamlined project execution.`,
          item3: `Launched a training and mentoring program for team members, contributing to a 30% increase in their productivity and skill development.`,
          item4: `Demonstrated leadership skills and the ability to manage timelines, enhancing project delivery.`,
        },
        webpupies: {
          item1: `Consistently collaborated with international clients, emphasizing the importance of effective communication, ensuring client satisfaction.`,
          item2: `Enhanced and optimized existing websites for a 20% performance improvement, while customizing them to meet the unique needs of every international clients through maintenance.`,
          item3: `Successfully contributed to creating cutting-edge applications in a growth-oriented environment.`,
          item4: `Synchronized seamlessly with cross-functional teams, contributing to the successful implementation of innovative features and enhancements, resulting in a 25% improvement in user experiences.`,
          item5: `Gained expertise in a diverse set of technologies and tools, equipping me to address clients' specific requirements with a 30% increase in efficiency.`,
        },
        nftperp: {
          item1: `Spearheaded the development of a groundbreaking DEX Aggregator DApp, seamlessly aggregating liquidity from diverse AMMs to create a substantial liquidity pool for seamless swap transactions. Resulting of up to 8% higher exchange rates than other AMMs.`,
          item2: `Initiated and executed the implementation of a feature, facilitating concurrent token swaps within a single transaction, resulting in a 40% enhancement in user convenience.`,
          item3: `Seamlessly integrated the DEX Aggregator with nine blockchains including Arbitrum, Polygon, BSC, Avalanche, Fantom, Moonriver, Moonbeam, Cronos, and Milkomeda C1, demonstrating expertise in multichain support and expanding the reach by 50%.`,
          item4: `Directed the successful integration of five token cross-chain bridges through Stargate, establishing connectivity among Arbitrum, Polygon, BSC, and Avalanche, resulting in a 30% increase in cross-platform interoperability.`,
          item5: `Innovated the development of an AMM with Swap, Pool, Staking, and Yield Farming functionalities, significantly diversifying decentralized finance offerings by 25%. `,
        },
      },
      team: {
        title: `Core Team`,
      },
      advisors: {
        title: `Advisors`,
      },
      launchpad: {
        title: `MatrixVerse Launchpad`,
        description_html: `<b>MatrixVerse Launchpad</b> is for curated incubator designed for Metaverse projects. MatrixVerse 
        is the only launchpad program that focuses on incubating Metaverse projects from the ground up and driving significant 
        growth post-launch.</br>
        </br>
        In a nutshell, MatrixVerse will multiply value accrual to $MATRIX stakers, grow the Matrix Ecosystem, build key building 
        blocks in DeFi, grow talent and developer mindshare.
        `,
      },
      vision: {
        title: `Our Vision`,
        description: `Advancing multi-chain DeFi protocols that are user-friendly and open for everyone.`,
      },
      partners: {
        title: `Ecosystem Partners`,
      },
      investors: {
        title: `Backed By The Best`,
      },
      community: {
        title: `Let's Get Connected`,
      },
      social: {
        telegram: {
          title: `Telegram`,
          description: `Connect With Matrix Labs’ Community`,
        },
        twitter: {
          title: `Twitter`,
          description: `Follow For The Latest News & Updates`,
        },
        discord: {
          title: `Discord`,
          description: `Get Involved With The Matrix Labs Team`,
        },
        github: {
          title: `Github`,
          description: `Find Out What I’m Building`,
        },
        gmail: {
          title: `Gmail`,
          description: `Drop a note in my inbox`,
        },
        medium: {
          title: `Medium`,
          description: `Catch Up On Latest News`,
        },
        linkedin: {
          title: `LinkedIn`,
          description: `Learn about my activities`,
        },
      }
    },
  }
}

export default Translation;
