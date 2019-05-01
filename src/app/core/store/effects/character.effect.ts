import { Injectable } from "@angular/core";
import { Effect, ofType,  Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { ECharacterActions, GetCharacters, GetCharactersSuccess } from '../actions/character.actions';
import { PathOfExileApiService } from '../../services/path-of-exile-api.service';
import { IAppState } from '../state/app.state';

@Injectable()
export class CharacterEffect {

    constructor(
        private _poeService: PathOfExileApiService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}

    @Effect()
    getCharacters$ = this._actions$.pipe(
        ofType<GetCharacters>(ECharacterActions.GetCharacters),
        map(action => this.),
        switchMap(([id, users]) => {
            const selectUser = users.filter(user => user.id === +id)[0];
            return of(new GetCharactersSuccess())
        })
    )
}