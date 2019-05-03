import { IAppState } from '../app/app.state';
import { createSelector } from '@ngrx/store';
import { ICharacterState } from './character.state';

export const selectCharacters = (state: IAppState) => state.character;

export const selectCharacterList = createSelector(
    selectCharacters,
    (state: ICharacterState) => state.characters
);

export const selectSelectedCharacterIndex = createSelector(
    selectCharacters,
    (state: ICharacterState) => state.selectedCharacterIndex
);

export const selectSelectedCharacter = createSelector(
    [
        selectCharacterList,
        selectSelectedCharacterIndex
    ],
    (characters, index) =>  characters && index ? characters[index]: null
)