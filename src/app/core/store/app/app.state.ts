import { ICharacterState, initialCharacterState } from '../character/character.state';
import { IStaticDataState, initialStaticDataState } from '../static/static-data.state';

export interface IAppState {
    character: ICharacterState;
    statData: IStaticDataState;
}

export const initialAppState: IAppState = {
    character: initialCharacterState,
    statData: initialStaticDataState
}

export function getIntialState(): IAppState {
    return initialAppState;
}