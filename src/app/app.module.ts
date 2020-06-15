import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// Modules
import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { ErrorComponent } from './layout/error/error.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ShopComponent } from './layout/shop/shop.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, AdminComponent, ShopComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Angular Material
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    // Core & Shared
    CoreModule,
    SharedModule,

    // Routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
