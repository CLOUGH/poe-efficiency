import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import { IAppState } from 'src/app/core/store/app/app.state';
import { State, Store, select } from '@ngrx/store';
import { selectFindStaticData, selectStaticData } from 'src/app/core/store/static/static-data.selctors';
import { IStaticData, IStaticDataItem } from 'src/app/core/store/static/istatic-data';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer, private store: Store<IAppState>) { }


  transform(value: any) {
    return this.store.pipe(
      select(selectFindStaticData(value, 'currency')),
      switchMap((staticData: IStaticDataItem) => {
        return of(this.sanitizer.bypassSecurityTrustHtml(`<img src="https://www.pathofexile.com/${staticData.image}" height="25"/>`));
      })
    );
  }

}
