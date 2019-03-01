//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Navigation1Component } from './components/navigation1/navigation1.component';
import { Navigation2Component } from './components/navigation2/navigation2.component';
import { Main1Component } from './components/main1/main1.component';
import { Main2Component } from './components/main2/main2.component';

//SERVICES
import { FraseDiaService } from './services/frase-dia.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Navigation1Component,
    Navigation2Component,
    Main1Component,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FraseDiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
