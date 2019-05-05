import { initialCharacterState, ICharacterState } from './character.state';
import { CharacterActions, ECharacterActions } from './character.actions';


export const characterReducers = (
    state = initialCharacterState,
    action: CharacterActions
): ICharacterState => {
    switch (action.type) {
        case ECharacterActions.SetSelectedCharacterIndex: {
            return {
                ...state,
                selectedCharacterIndex: action.payload
            };
        }
        case ECharacterActions.GetCharactersSuccess: {
            return {
                ...state,
                characters: action.payload
            };
        }

        default:
            return state;
    }
}