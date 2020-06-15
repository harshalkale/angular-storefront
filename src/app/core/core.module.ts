import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Guards & Services
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

// Other imports
import { environment } from '@env';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Firebase
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFireAuthGuard],
})
export class CoreModule {}
