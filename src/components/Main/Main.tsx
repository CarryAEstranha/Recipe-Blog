import { Ingredients } from "../Ingredients/Ingredients";
import { Instructions } from "../Instructions/Instructions";
import { RecipeTimeBlock } from "../RecipeTimeBlock/RecipeTimeBlock";

import { APIDataTypes } from "../../App";

import {
    MainBlockContainer,
    MainContainer
} from "./MainStyles";

export const Main = ({
    APIData
}: MainProps) => {
    return (
        <MainContainer>
            <RecipeTimeBlock APIData={APIData} />

            <MainBlockContainer>
                <Ingredients APIData={APIData} />
                <Instructions APIData={APIData} />
            </MainBlockContainer>
        </MainContainer>
    );
}

interface MainProps {
    APIData: APIDataTypes;
};