import styled from "styled-components";

import { pxToRem } from "../../styles/globalStyles";

export const RecipeTimeBlockContainer = styled.aside`
    display: flex;

    gap: ${pxToRem(20)} ${pxToRem(40)};

    flex-shrink: 0;
    flex-wrap: wrap;

    height: fit-content;

    .break {
        flex-basis: 100%;
    }

    @media (min-width: 1440px) {
        flex-direction: column;
        flex-wrap: nowrap;

        border-radius: ${pxToRem(12)};

        box-shadow: 0 0 ${pxToRem(20)} rgba(0, 0, 0, 0.1);

        padding: ${pxToRem(56)} ${pxToRem(40)} ${pxToRem(56)} ${pxToRem(40)};

        width: fit-content;

        .break {
            flex-basis: initial;
        }
    }
`;

export const TimeBlockElementContainer = styled.div`
    display: flex;

    gap: ${pxToRem(4)};

    align-items: center;

    @media (min-width: 1440px) {
        gap: ${pxToRem(12)};
    }
`;

export const TimeBlockElementIcon = styled.span`
    font-size: ${pxToRem(16)};

    @media (min-width: 1440px) {
        font-size: ${pxToRem(34)};
    }
`;

export const TimeBlockElementParagraph = styled.p`
    display: flex;

    flex-direction: column;

    @media (min-width: 1440px) {
        gap: ${pxToRem(4)}
    }
`;

export const TimeBlockElementParagraphInformation = styled.span`
    font-family: "Montserrat", sans-serif;
    font-size: ${pxToRem(10)};
    font-weight: 500;

    line-height: ${pxToRem(12.18)};

    @media (min-width: 1440px) {
        font-size: ${pxToRem(14)};

        line-height: ${pxToRem(17.06)};
    }
`;

export const TimeBlockElementParagraphTitle = styled.span`
    color: #BDBDBD;

    font-family: "Montserrat", sans-serif;
    font-size: ${pxToRem(8)};
    font-weight: 700;

    line-height: ${pxToRem(9.75)};

    @media (min-width: 1440px) {
        font-size: ${pxToRem(10)};

        line-height: ${pxToRem(12.18)};
    }
`;