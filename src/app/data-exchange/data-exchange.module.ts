import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataExchangeComponent } from './data-exchange.component';
import { DataExchangeRoutingModule } from './data-exchange-routing.module';
import {SharedService} from './shared.service'

@NgModule({
  imports: [DataExchangeRoutingModule],
  declarations: [DataExchangeComponent],
  providers: [SharedService]
})
export class DataExchangeModule {}