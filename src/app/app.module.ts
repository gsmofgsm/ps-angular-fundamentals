import {HttpClientModule} from '@angular/common/http'

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'

import { TOASTR_TOKEN, Toastr, JQ_TOKEN, CollapsibleWelComponent, SimpleModalComponent, ModalTriggerDirective } from './common'

import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';

import {
  EventRouteActivator,
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr:Toastr = window['toastr']
let jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWelComponent,
    Error404Component,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    DurationPipe
  ],
  providers: [
    EventService, 
    {provide: TOASTR_TOKEN, useValue: toastr}, 
    {provide: JQ_TOKEN, useValue: jQuery}, 
    EventRouteActivator,
    EventListResolver,
    EventResolver,
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
