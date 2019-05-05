import { IStaticData } from './istatic-data';

export interface IStaticDataState {
    data: IStaticData;
}

export const initialStaticDataState: IStaticDataState = {
    data: null,
};