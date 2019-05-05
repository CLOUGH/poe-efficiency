import { IStaticDataState } from './static-data.state';
import { createSelector } from '@ngrx/store';
import { IStaticData } from './istatic-data';
import { IAppState } from '../app/app.state';

export const selectStaticData = (state: IAppState) => state.statData.data;

export const selectFindStaticData = (id, type) => createSelector(
    selectStaticData,
    (staticData: IStaticData) => {
        return staticData[type].find(data => data.id === id);
    }
)