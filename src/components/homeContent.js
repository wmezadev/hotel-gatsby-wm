import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const HomeContent = () => {

    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { 
                slug: {
                eq: "home"
                }
            }) {
                nodes {
                title
                content
                image {
                    fluid {
                        ...GatsbyDatoCmsFluid
                    }
                }
                }
            }
        }
    `);

    console.log(info)

    return (
        <>
            <h2>Page title</h2>
        </>
    );
}
 
export default HomeContent;