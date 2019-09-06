import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let toastr

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail
                    (click)="handleThumbnailClick(event.name)"
                    (eventClick)="handleClick($event)"
                    [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventListComponent implements OnInit {

    events:any[]

    constructor(private eventService: EventService) {

    }

    ngOnInit() {
        // this could also be in the constructor,
        // however, problem is that if getEvents() takes long, like an ajax call
        // it will take long to construct
        // that is why it is put in the life cycle
        this.events = this.eventService.getEvents();
    }

    handleClick(data) {
        console.log('received: ', data);
    }

    handleThumbnailClick(eventName: String) {
        toastr.success(eventName);
    }
}