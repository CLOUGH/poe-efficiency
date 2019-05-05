import { Injectable } from "@angular/core";
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { Effect, ofType,  Actions } from '@ngrx/effects';
import { IAppState } from '../app/app.state';
import { GetStaticData, EStaticDataActions, GetStaticDataSuccess } from './static-data.actions';
import { switchMap } from 'rxjs/operators';
import { IStaticData } from './istatic-data';
import { of } from 'rxjs';

@Injectable()
export class StaticDataEffect {
    constructor(
        private apiService: ApiService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {}

    @Effect()
    GetStaticData = this.actions$.pipe(
        ofType<GetStaticData>(EStaticDataActions.GetStaticData),
        switchMap(() => this.apiService.getStaticData()),
        switchMap((staticData: IStaticData) => {
            return of(new GetStaticDataSuccess(staticData))
        })
    );
}