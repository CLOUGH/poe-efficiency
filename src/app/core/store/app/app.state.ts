import { ICharacterState, initialCharacterState } from '../character/character.state';

export interface IAppState {
    character: ICharacterState;
}

export const initialAppState: IAppState = {
    character: initialCharacterState
}

export function getIntialState(): IAppState {
    return initialAppState;
}