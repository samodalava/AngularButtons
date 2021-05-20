import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

const materialComponents =[MatButtonModule, BrowserAnimationsModule, MatIconModule ]
@NgModule({
  
  imports: [ materialComponents ] ,
  exports: [ materialComponents ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
