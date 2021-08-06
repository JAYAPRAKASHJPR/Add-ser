import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Firstcomponent } from './first.component';
import { MyServiceService } from './my-service.service';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Firstcomponent],
  bootstrap: [AppComponent],
  providers: [MyServiceService]
})
export class AppModule {}
