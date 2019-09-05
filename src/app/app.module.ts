import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { EventsAppComponent } from './events-app.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
