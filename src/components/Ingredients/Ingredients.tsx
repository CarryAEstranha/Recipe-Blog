import { APIDataTypes } from "../../App";

import {
    IngredientsCheckboxContainer,
    IngredientsCheckboxForm,
    IngredientsContainer,
    IngredientsContainerTitle,
    SubIngredientsContainer,
    SubIngredientsContainerTitle
} from "./IngredientsStyles";

export const Ingredients = ({
    APIData
}: IngredientsProps) => {
    return (
        <IngredientsContainer>
            <IngredientsContainerTitle>Ingredients</IngredientsContainerTitle>

            {APIData.ingredients.map(({
                title,
                items
            }, index) => {
                return (
                    <SubIngredientsContainer key={title + index}>
                        <SubIngredientsContainerTitle>{title}</SubIngredientsContainerTitle>

                        <IngredientsCheckboxForm>
                            {items.map((item, index) => {
                                return (
                                    <IngredientsCheckboxContainer key={item + index}>
                                        <input type="checkbox" />
                                        <span></span>

                                        <div className="checkbox-text" dangerouslySetInnerHTML={{ __html: item }}></div>
                                        <div className="foreground-decoration"></div>
                                    </IngredientsCheckboxContainer>
                                );
                            })}
                        </IngredientsCheckboxForm>
                    </SubIngredientsContainer>
                );
            })}
        </IngredientsContainer>
    );
}

interface IngredientsProps {
    APIData: APIDataTypes
};