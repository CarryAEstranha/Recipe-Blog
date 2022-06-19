import { APIDataTypes } from "../../App";

import {
    RecipeTimeBlockContainer,
    TimeBlockElementContainer,
    TimeBlockElementIcon,
    TimeBlockElementParagraph,
    TimeBlockElementParagraphInformation,
    TimeBlockElementParagraphTitle
} from "./RecipeTimeBlockStyles";

const TimeBlockElement = ({
    breakClass,
    color,
    elementName,
    iconName,
    information
}: TimeBlockElementProps) => {
    return (
        <TimeBlockElementContainer className={breakClass === true ? "break" : ""}>
            <TimeBlockElementIcon
                className="material-icons"
                style={{
                    color: color
                }}
            >
                {iconName}
            </TimeBlockElementIcon>

            <TimeBlockElementParagraph>
                <TimeBlockElementParagraphTitle>
                    {elementName}
                </TimeBlockElementParagraphTitle>
                <TimeBlockElementParagraphInformation style={{
                    color: color
                }}>
                    {information}
                </TimeBlockElementParagraphInformation>
            </TimeBlockElementParagraph>
        </TimeBlockElementContainer>
    );
}

export const RecipeTimeBlock = ({
    APIData
}: RecipeTimeBlockProps) => {
    return (
        <RecipeTimeBlockContainer>
            <TimeBlockElement
                breakClass={true}
                color="#F2994A"
                elementName="Yields"
                iconName="local_dining"
                information={APIData.timeBlockInformation.yields}
            />
            <TimeBlockElement
                breakClass={false}
                color="#4F4F4F"
                elementName="Prep TIme"
                iconName="query_builder"
                information={APIData.timeBlockInformation.prepTime}
            />
            <TimeBlockElement
                breakClass={false}
                color="#4F4F4F"
                elementName="Cook Time"
                iconName="query_builder"
                information={APIData.timeBlockInformation.cookTime}
            />
            <TimeBlockElement
                breakClass={false}
                color="#4F4F4F"
                elementName="Total Time"
                iconName="query_builder"
                information={APIData.timeBlockInformation.totalTime}
            />
        </RecipeTimeBlockContainer>
    );
}

interface RecipeTimeBlockProps {
    APIData: APIDataTypes;
};

interface TimeBlockElementProps {
    breakClass: boolean;
    color: string;
    elementName: string;
    iconName: string;
    information: string;
};