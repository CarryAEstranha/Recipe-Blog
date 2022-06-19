import styled from "styled-components";

import { pxToRem } from "../../styles/globalStyles";

export const InstructionsContainer = styled.section`
    display: flex;

    gap: ${pxToRem(14)};

    flex-direction: column;
`;

export const InstructionsTitle = styled.h2`
    color: #333333;

    font-family: "Playfair Display", sans-serif;
    font-size: ${pxToRem(18)};
    font-weight: 700;

    line-height: ${pxToRem(31.98)};
`;

export const ListContainer = styled.ol`
    display: flex;

    gap: ${pxToRem(8)};

    flex-direction: column;
`;

export const ListItem = styled.li`
    display: flex;

    gap: ${pxToRem(8)};
    
    list-style: none;

    @media (min-width: 1440px) {
        gap: ${pxToRem(16)};
    }

    div {
        p {
            color: #000000;

            font-family: "Montserrat", sans-serif;
            font-size: ${pxToRem(14)};
            font-weight: 400;

            line-height: ${pxToRem(25)};

            user-select: none;

            width: 100%;
            max-width: ${pxToRem(542)};

            @media (min-width: 1440px) {
                font-size: ${pxToRem(16)};
            }

            strong {
                font-weight: 700;
            }

            em {
                font-style: italic;
                font-weight: 500;
            }
        }
    }

    span {
        background: #F2994A;

        display: flex;

        flex-shrink: 0;

        align-items: center;
        justify-content: center;

        color: #FFFFFF;

        font-family: "Playfair Display";
        font-size: ${pxToRem(24)};
        font-weight: 700;

        line-height: ${pxToRem(31.98)};

        border-radius: ${pxToRem(6)};

        width: ${pxToRem(36)};
        height: ${pxToRem(36)};
    }
`;