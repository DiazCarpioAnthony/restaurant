// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Header1Component } from './page1/header1/header1.component';
import { Header2Component } from './page2/header2/header2.component';
import { Main1Component } from './page1/main1/main1.component';
import { Banner2Component } from './page2/banner2/banner2.component';
import { Main2Component } from './page2/main2/main2.component';
import { About2Component } from './page2/about2/about2.component';
import { Comments2Component } from './page2/comments2/comments2.component';

// SERVICES
import { FraseDiaService } from './services/frase-dia.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Header1Component,
    Header2Component,
    Main1Component,
    Banner2Component,
    Main2Component,
    About2Component,
    Comments2Component
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
