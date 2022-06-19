import styled from "styled-components";

import { pxToRem } from "../../styles/globalStyles";

import iconDots from "../../assets/6dots.svg";

export const Image = styled.img`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: ${pxToRem(12)};
    
    aspect-ratio: 352 / 202;
    width: 100%;
`;

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: ${pxToRem(972)};
`;

export const Paragraph = styled.p`
    display: flex;

    gap: ${pxToRem(12)};

    color: #4F4F4F;

    font-family: "Montserrat", sans-serif;
    font-size: ${pxToRem(12)};
    font-style: italic;
    font-weight: 500;

    line-height: ${pxToRem(14.62)};

    margin: ${pxToRem(12)} 0 ${pxToRem(24)} 0;

    width: 100%;
    max-width: ${pxToRem(618)};

    &::before {
        content: "";

        background-image: url(${iconDots});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;

        flex-shrink: 0;

        margin-top: ${pxToRem(3.5)};

        width: ${pxToRem(13)};
        height: ${pxToRem(8)};
    }

    @media (min-width: 1440px) {
        font-size: ${pxToRem(14)};

        line-height: ${pxToRem(17.06)};
    }
`;

export const Title = styled.h1`
    color: #000000;

    font-family: 'Playfair Display', sans-serif;
    font-size: ${pxToRem(24)};
    font-weight: 700;

    line-height: ${pxToRem(42)};
`;