import { defineConfig } from 'vitepress'

export const en = defineConfig({
    title: 'NineChronicles Developer Portal',
    description: 'Site for NineChronicles Ecosystem Developers',
    lang: 'en-US',
    themeConfig: {
      outline: 'deep',
      nav: [ 
        { text: 'Home', link: '/en' },
        { text: 'Examples', link: '/en/examples' }
      ],
  
      sidebar: [
        {
          text: 'Overview', link: '/en/overview'
        },
        {
          text: 'Introduce',
          link: '/en/introduce/nine-chronicles',
          collapsed: false,
          items: [
            { text: 'NineChronicles?', link: '/en/introduce/nine-chronicles' },
            { text: 'Networks', link: '/en/introduce/networks' },
            { text: 'Multiplanetary', link: '/en/introduce/multiplanetary' },
            { text: 'Developer Ecosystem', link: '/en/introduce/developer-ecosystem' },
          ]
        },
        {
          text: 'Create Network',
          link: '/en/guide/create-network/getting-started',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/en/guide/create-network/getting-started' },
            { text: 'Create Private Key', link: '/en/guide/create-network/create-private-key' },
            { text: 'Create Genesis Block', link: '/en/guide/create-network/create-genesis-block' },
            {
              text: 'Run Node',
              link: '/en/guide/create-network/run-node',
              items: [
                { text: '.NET Project', link: '/en/guide/create-network/run-node-with-dotnet-project' },
                { text: 'Docker', link: '/en/guide/create-network/run-node-with-docker' }
              ]
            },
          ]
        },
        {
          text: 'Get State',
          link: '/en/guide/get-state/home',
          collapsed: false,
          items: [
            { text: 'GraphQL(Headless)', link: '/en/guide/get-state/get-state-with-headless-graphql' },
            { text: 'GraphQL(Mimir)', link: '/en/guide/get-state/get-state-with-mimir-graphql' }
          ]
        },
        {
          text: 'Issue Transaction',
          link: '/en/guide/issue-transaction/home',
          collapsed: false,
          items: [
            { text: 'Chrono', link: '/en/guide/issue-transaction/issue-transaction-with-chrono' }
          ]
        },
        {
          text: 'Join Mainnet',
          link: '/en/guide/join-mainnet/home',
          collapsed: false,
          items: [
            { text: 'Play NineChronicles', link: '/en/guide/join-mainnet/play-nc' },
            { text: 'Node Operations', link: '/en/guide/join-mainnet/node-operations' },
            { text: 'Modding', link: '/en/guide/join-mainnet/modding' },
          ]
        },
        {
          text: 'Examples',
          link: '/en/examples/home',
          collapsed: false,
          items: [
            { text: 'Transfer NCG(Chrono)', link: '/en/examples/transfer/chrono' }
          ]
        },
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/planetarium/www.nine-chronicles.dev' }
      ]
    }
});
