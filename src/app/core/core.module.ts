import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PathOfExileApiService } from './services/path-of-exile-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SettingsModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [PathOfExileApiService],
  exports: [HeaderComponent],
  entryComponents: [SettingsModalComponent]
})
export class CoreModule { }
