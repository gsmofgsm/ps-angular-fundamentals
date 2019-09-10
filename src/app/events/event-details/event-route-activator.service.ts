import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { EventService } from '../shared/event.service';
import { CreateEventComponent } from '../create-event.component';

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate {
     constructor(private eventService: EventService, private router: Router) {

     }
     canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists
     }

     canDeactivate(component: CreateEventComponent) {
        if (component.isDirty) {
            return window.confirm('Are you sure to leave this page?')
        }
        return true
     }
}