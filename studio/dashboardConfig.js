export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4f66ace3b6fa8b6f0f889c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio-7na2gmnr',
                  apiId: '4553b8a8-cece-4a41-a41e-4ce0bcda2198'
                },
                {
                  buildHookId: '5f4f66ace3b6fa85ae0f8d09',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test-web-rj5m9ibz',
                  apiId: '748bbbcf-478e-46d1-8f4d-c64c2b92addc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Maybach91/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test-web-rj5m9ibz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
