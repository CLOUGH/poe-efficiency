import { Injectable } from "@angular/core";
import { Effect, ofType,  Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { PathOfExileApiService } from '../../services/path-of-exile-api.service';
import { ICharacter } from '../../models/icharacter';
import { GetCharacters, ECharacterActions, GetCharactersSuccess, SetSelectedCharacterIndex } from './character.actions';
import { IAppState } from '../app/app.state';
import { selectCharacterList, selectSelectedCharacterIndex } from './character.selectors';

@Injectable()
export class CharacterEffect {

    constructor(
        private poeService: PathOfExileApiService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {}

    @Effect()
    getCharacters$ = this.actions$.pipe(
        ofType<GetCharacters>(ECharacterActions.GetCharacters),
        switchMap(() => this.poeService.getCharacters()),
        switchMap((characters: ICharacter[]) => {
            return of(new GetCharactersSuccess(characters));
        })
    );

    @Effect()
    getCharactersSuccess = this.actions$.pipe(
        ofType<GetCharactersSuccess>(ECharacterActions.GetCharactersSuccess),
        map(action => action.payload),
        switchMap(characters => {
            const index = characters.findIndex(character => character.lastActive === true );
            return of(new SetSelectedCharacterIndex(index));
        })
    );
}
