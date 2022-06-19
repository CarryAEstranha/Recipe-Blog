import { createGlobalStyle } from 'styled-components';

import styled from "styled-components";

export const pxToRem = (value: number) => {
    return `${value / 16}rem`;
}

export const screenAutoSize = (currentWidth: number) => {
    return `${100 * (16 / currentWidth)}vw`;
}

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }

    @media (min-width: 1440px) {
        html {
            font-size: ${screenAutoSize(1440)};
        }
    }

    @media (max-width: 375px) {
        html {
            font-size: ${screenAutoSize(375)};
        }
    }
`;

export const PageContainer = styled.div`
    display: flex;

    flex-direction: column;

    align-items: center;

    padding: ${pxToRem(32)} ${pxToRem(12)};

    min-height: 100vh;
`;