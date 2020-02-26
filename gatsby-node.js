/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsRoom{
                nodes {
                    slug
                }
            }
        }    
    `);

    // if error 
    if(result.error) {
        reporter.panic('There is no result', result.errors);
    }

    // if no errors on fetching data
    const rooms = result.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        });
    });
}