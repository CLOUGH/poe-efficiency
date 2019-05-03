import { ICharacter } from '../../models/icharacter';

export interface ICharacterState {
    selectedCharacterIndex: number;
    characters: ICharacter[];
}


export const initialCharacterState: ICharacterState = {
    selectedCharacterIndex: null,
    characters: null
}