import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image { max-height: 100px; }
        a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit {

    event:any

    constructor(private eventService: EventService, private route: ActivatedRoute, private router:Router) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent
            (+this.route.snapshot.params['id'])
    }

    addSession() {
        this.router.navigate(['/events/sessions/new'])
    }
}