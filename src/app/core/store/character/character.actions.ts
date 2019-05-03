import { Action } from '@ngrx/store';
import { ICharacter } from '../../models/icharacter';

export enum ECharacterActions {
    SetSelectedCharacterIndex = '[Character] Set Selected Character Index',
    GetCharacters = '[Character] Get Characters',
    GetCharactersSuccess = '[Character] Get Characters Success'
}


export class SetSelectedCharacterIndex implements Action {
    public readonly type = ECharacterActions.SetSelectedCharacterIndex;
    constructor(public payload: number) {}
}

export class GetCharacters implements Action {
    public readonly type = ECharacterActions.GetCharacters;
}

export class GetCharactersSuccess implements Action {
    public readonly type = ECharacterActions.GetCharactersSuccess;
    constructor(public payload: ICharacter[]){}
}


export type CharacterActions = SetSelectedCharacterIndex | GetCharacters | GetCharactersSuccess;