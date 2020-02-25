import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Navigation from './nav';
import { Link } from 'gatsby';

const LinkHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = () => {
    return (
        <>
            <footer
                css={
                    css`
                        margin-top: 4rem;
                        background-color: rgba(44,62,80);
                        padding: 1rem;
                    `
                }
            >
                <div
                    css={
                        css`
                            margin: 0 auto;
                            max-width: 1200px;

                            @media (min-width: 768px) {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                            }
                        `
                    }
                >
                    <Navigation/>
                    <LinkHome
                        to={'/'}
                    >
                        <h1>
                            Home
                        </h1>
                    </LinkHome>
                </div>
            </footer>
            <p
                css={
                    css`
                        text-align: center;
                        color: #FFF;
                        background-color: rgb(33,44,55);
                        margin: 0;
                        padding: 1rem;
                    `
                }
            >
                Hotel Gatsby. All right reserved &copy;
            </p>
        </>
    );
}
 
export default Footer;