import { Action } from '@ngrx/store';
import { ICharacter } from '../../models/icharacter';

export enum ECharacterActions {
    ChangeActiveCharacter = '[Character] Change Active Character',
    GetCharacters = '[Character] Get Characters',
    GetCharactersSuccess = '[Character] Get Characters Success'
}


export class GetActiveCharacter implements Action {
    public readonly type = ECharacterActions.ChangeActiveCharacter;
    constructor(public payload: ICharacter) {}
}

export class GetCharacters implements Action {
    public readonly type = ECharacterActions.GetCharacters;
}

export class GetCharactersSuccess implements Action {
    public readonly type = ECharacterActions.GetCharactersSuccess;
    constructor(public payload: ICharacter[]){}
}

export type CharacterActions = GetActiveCharacter | GetCharacters | GetCharactersSuccess;