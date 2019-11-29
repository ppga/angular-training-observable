import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataExchangeComponent } from './data-exchange.component';
import { DataExchangeRoutingModule } from './data-exchange-routing.module';
import {AcompComponent} from './acomp/acomp.component';
import {BcompComponent} from './bcomp/bcomp.component';
import {SharedService} from './shared.service'

@NgModule({
  imports: [DataExchangeRoutingModule],
  declarations: [DataExchangeComponent,
   AcompComponent, BcompComponent],
  providers: [SharedService]
})
export class DataExchangeModule {}