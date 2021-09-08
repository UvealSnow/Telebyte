// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = function (api) {
  api.loadSource((store) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        gcms {
          projects {
            slug
          }
          services {
            slug
          }
          posts {
            slug
          }
        }
      }
    `);

    data.gcms.projects.forEach(node => {
      createPage({
        path: `/projects/${node.slug}`,
        component: './src/templates/Project.vue',
        context: {
          slug: node.slug,
        },
      });
    });

    data.gcms.services.forEach(node => {
      createPage({
        path: `/services/${node.slug}`,
        component: './src/templates/Service.vue',
        context: {
          slug: node.slug,
        },
      })
    });

    data.gcms.posts.forEach(node => {
      createPage({
        path: `/posts/${node.slug}`,
        component: './src/templates/Post.vue',
        context: {
          slug: node.slug,
        },
      })
    });
  });
}
