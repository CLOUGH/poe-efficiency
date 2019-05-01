import { initialCharacterState, ICharacterState } from '../state/character.state';
import { CharacterActions, ECharacterActions } from '../actions/character.actions';

export const characterReducers = (
    state = initialCharacterState,
    action: CharacterActions
): ICharacterState => {
    switch(action.type) {
        case ECharacterActions.ChangeActiveCharacter : {
            return {
                ...state,
                activeCharacter : action.payload
            }
        }
        case ECharacterActions.GetCharactersSuccess : {
            return {
                ...state,
                characters: action.payload
            }
        }

        default: 
            return state;
    }
}