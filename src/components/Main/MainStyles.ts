import styled from "styled-components";

import { pxToRem } from "../../styles/globalStyles";

export const MainContainer = styled.main`
    display: flex;

    gap: ${pxToRem(24)};

    flex-direction: column;

    margin-top: ${pxToRem(24)};

    width: 100%;
    max-width: ${pxToRem(972)};

    @media (min-width: 1440px) {
        flex-direction: row-reverse;

        justify-content: space-between;

        margin-top: ${pxToRem(48)};
    }
`;

export const MainBlockContainer = styled.div`
    display: flex;

    gap: ${pxToRem(24)};

    flex-direction: column;
    flex-grow: 1;

    @media (min-width: 1440px) {
        
    }
`;