import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface CharacterComponentProps{
    item:ICharacter,
    chldren:ReactNode,
}

export const CharacterComponent = ({item}:CharacterComponentProps) => {
    return (
        <div>
            <h3>{item.name}{item.surname} </h3>

        </div>
    );
};