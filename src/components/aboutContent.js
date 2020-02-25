import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const AboutContent = () => {

    const result = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "about-us"} }){
                nodes {
                    title
                    content
                    image {
                        fluid ( maxWidth: 1200 ){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    const { title, content, image } = result.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
                <Image
                    fluid={image.fluid}
                />
            </div>
        </>
    );
}
 
export default AboutContent;