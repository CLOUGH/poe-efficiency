import { IStaticData } from './istatic-data';
import { Action } from '@ngrx/store';

export enum EStaticDataActions {
    GetStaticData = '[Static] Get Static Data',
    GetStaticDataSucces = '[Static] Get Static Data Success',
}

export class GetStaticData implements Action {
    public readonly type = EStaticDataActions.GetStaticData;
}

export class GetStaticDataSuccess implements Action {
    public readonly type = EStaticDataActions.GetStaticDataSucces;
    constructor(public payload: IStaticData){}
}

export type StaticDataActions = GetStaticData | GetStaticDataSuccess;