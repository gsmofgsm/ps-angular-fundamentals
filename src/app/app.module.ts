import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'

import { ToastrService } from './common/toastr.service'

import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';

import {
  EventRouteActivator,
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver
} from './events/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
