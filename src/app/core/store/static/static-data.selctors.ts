import { IStaticDataState } from './static-data.state';
import { createSelector } from '@ngrx/store';
import { IStaticData } from './istatic-data';
import { IAppState } from '../app/app.state';

export const selectStaticData = (state: IAppState) => state.statData.data;

export const selectFindStaticData = (id, type) => createSelector(
  selectStaticData,
  (staticData: IStaticData[]) => {
    console.log({ type, staticData, id });
    return staticData.find(data => data.id.match(new RegExp(`${type}`, 'i'))).entries.find(data => data.id === id);
  }
)
