
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { characterReducers } from '../character/character.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    character: characterReducers
}