import { IAppState } from '../state/app.state';
import { characterReducers } from './character.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const appReducers: ActionReducerMap<IAppState, any> = {
    character: characterReducers
}