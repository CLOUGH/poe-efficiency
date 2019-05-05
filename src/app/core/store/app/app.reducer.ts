
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { characterReducers } from '../character/character.reducer';
import { staticDataReducers } from '../static/static-data.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    character: characterReducers,
    statData: staticDataReducers
}