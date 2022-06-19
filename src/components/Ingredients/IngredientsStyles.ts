import styled from "styled-components";

import { pxToRem } from "../../styles/globalStyles";

export const IngredientsCheckboxContainer = styled.label`
    position: relative;
    
    display: flex;

    gap: ${pxToRem(8)};

    cursor: pointer;

    width: fit-content;

    &:hover .foreground-decoration {
        opacity: 0.2;
    }

    @media (min-width: 1440px) {
        gap: ${pxToRem(16)};
    }

    .checkbox-text {
        p {
            color: #333333;

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

    .foreground-decoration {
        background: #828282;
        
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        border-radius: ${pxToRem(4)};

        opacity: 0;

        transition: 0.2s;

        pointer-events: none;

        width: calc(100% + ${pxToRem(16)});
        height: calc(100% + ${pxToRem(4)});
    }

    input {
        display: none;
    }

    input:checked + span {
        background: #828282;

        opacity: 0.8;
    }

    span {
        flex-shrink: 0;

        border: ${pxToRem(1)} solid #828282;
        border-radius: ${pxToRem(4)};

        margin-top: ${pxToRem(2)};

        transition: 0.2s;

        width: ${pxToRem(21)};
        height: ${pxToRem(21)};
    }
`;

export const IngredientsCheckboxForm = styled.form`
    display: flex;
    
    gap: ${pxToRem(8)};

    flex-direction: column;
`;

export const IngredientsContainer = styled.section`
    display: flex;

    gap: ${pxToRem(38)};

    flex-direction: column;
`;

export const IngredientsContainerTitle = styled.h2`
    color: #333333;

    font-family: "Playfair Display", sans-serif;
    font-size: ${pxToRem(18)};
    font-weight: 700;

    line-height: ${pxToRem(23.98)};

    margin-bottom: ${pxToRem(-38 + 14)};

    @media (min-width: 1440px) {
        font-size: ${pxToRem(24)};

        line-height: ${pxToRem(31.98)};

        margin-bottom: ${pxToRem(-38 + 32)};
    }
`;

export const SubIngredientsContainer = styled.div`

`

export const SubIngredientsContainerTitle = styled.h3`
    color: #333333;

    font-family: "Playfair Display", sans-serif;
    font-size: ${pxToRem(16)};
    font-style: italic;
    font-weight: 400;

    line-height: ${pxToRem(21.32)};

    margin-bottom: ${pxToRem(24)};

    @media (min-width: 1440px) {
        font-size: ${pxToRem(18)};

        line-height: ${pxToRem(23.98)};
    }
`;