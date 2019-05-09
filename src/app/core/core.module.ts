import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PathOfExileApiService } from './services/path-of-exile-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';
import { FormsModule } from '@angular/forms';
import { StoreRouterConnectingModule  } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { appReducers } from './store/app/app.reducer';
import { CharacterEffect } from './store/character/character.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiService } from './services/api.service';
import { StaticDataEffect } from './store/static/static-data.effects';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [HeaderComponent, SettingsModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      CharacterEffect,
      StaticDataEffect
    ]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }) : []
  ],
  providers: [PathOfExileApiService, ApiService],
  exports: [HeaderComponent],
  entryComponents: [SettingsModalComponent]
})
export class CoreModule { }
