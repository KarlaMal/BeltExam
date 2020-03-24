import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllresComponent } from './allres/allres.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';
import { NewresComponent } from './newres/newres.component';
import { UpdateComponent } from './update/update.component';
import { NewreviewComponent } from './newreview/newreview.component';

@NgModule({
  declarations: [
    AppComponent,
    AllresComponent,
    AllreviewsComponent,
    NewresComponent,
    UpdateComponent,
    NewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
