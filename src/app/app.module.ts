import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { WorktimeListComponent } from './worktime/worktime-list/worktime-list.component';
import { WorktimeEditComponent } from './worktime/worktime-edit/worktime-edit.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    WorktimeComponent,
    WorktimeListComponent,
    WorktimeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    PanelModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
