import { APIDataTypes } from "../../App";

import {
    Image,
    HeaderContainer,
    Paragraph,
    Title
} from "./HeaderStyles";

import backgroundImage from "../../assets/photo1.png";

export const Header = ({
    APIData
}: HeaderProps) => {
    return (
        <HeaderContainer>
            <Title>{APIData.recipeInformation.title}</Title>

            <Paragraph>{APIData.recipeInformation.information}</Paragraph>

            <Image style={{
                backgroundImage: `url(${APIData.recipeInformation.image})`
            }}></Image>
        </HeaderContainer>
    );
}

interface HeaderProps {
    APIData: APIDataTypes;
};