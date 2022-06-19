import styled from "styled-components";

import { pxToRem } from "../../styles/globalStyles";

export const FooterContainer = styled.footer`
    display: flex;
    
    flex-grow: 1;

    align-items: flex-end;

    margin-top: ${pxToRem(24)};

    @media (min-width: 1440px) {
        margin-top: ${pxToRem(48)};
    }
`;

export const FooterText = styled.p`
    color: #828282;

    font-family: "Montserrat", sans-serif;
    font-size: ${pxToRem(14)};
    font-weight: 500;

    line-height: ${pxToRem(17.06)};

    span {
        font-weight: 700;
    }
`;