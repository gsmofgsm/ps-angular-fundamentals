import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventListComponent implements OnInit {

    events:IEvent[]

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this could also be in the constructor,
        // however, problem is that if getEvents() takes long, like an ajax call
        // it will take long to construct
        // that is why it is put in the life cycle
        this.events = this.route.snapshot.data['events'];
    }
}