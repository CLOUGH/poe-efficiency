import { ICharacter } from '../../models/icharacter';

export interface ICharacterState {
    activeCharacter: ICharacter;
    characters: ICharacter[];
}


export const initialCharacterState: ICharacterState = {
    activeCharacter: null,
    characters: null
}