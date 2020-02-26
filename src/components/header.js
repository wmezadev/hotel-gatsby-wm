import React from 'react';
import { css } from '@emotion/core';
import Navigation from './nav';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const LinkHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return (
        <header
            css={
                css`
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
                <LinkHome
                    to={'/'}
                >
                    <h1>Hotel Gatsby</h1>
                </LinkHome>
                <Navigation/>
            </div>
        </header>
    );
}
 
export default Header;