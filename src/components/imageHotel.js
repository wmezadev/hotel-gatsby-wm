import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackgroung = styled(BackgroundImage)`
    height: 700px;
`;

const ImageText = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.75));
    color: #F2F2F2;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0%;

        @media (min-width: 992px) {
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px) {
            font-size: 3rem;
        }
    }
`;

const ImageHotel = () => {
    
    const { image } = useStaticQuery(graphql`
    query {
    image: file(relativePath: { eq: "beach-hotel-banner.jpg" }) {
            sharp: 
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `);

    return (
        <ImageBackgroung
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <ImageText>
                <h1>Welcome to the Gatsby Hotel</h1>
                <p>The best hotel for your dreamed vacations!</p>
            </ImageText>
        </ImageBackgroung>
    );
}
 
export default ImageHotel;