import { APIDataTypes } from "../../App";

import {
    InstructionsContainer,
    InstructionsTitle,
    ListContainer,
    ListItem
} from "./InstructionsStyles";

export const Instructions = ({
    APIData
}: InstructionsProps) => {
    return (
        <InstructionsContainer>
            <InstructionsTitle>Instructions</InstructionsTitle>

            <ListContainer>
                {APIData.instructions.map((item, index) => {
                    return (
                        <ListItem key={item + index}>
                            <span>{index + 1}</span>

                            <div dangerouslySetInnerHTML={{__html: item}}></div>
                        </ListItem>
                    );
                })}
            </ListContainer>
        </InstructionsContainer>
    );
}

interface InstructionsProps {
    APIData: APIDataTypes;
};