import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ISession } from '../shared';


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
    addMode:boolean = false
    filterBy:string = 'all'
    sortBy:string = ''

    constructor(private eventService: EventService, private route: ActivatedRoute, private router:Router) {

    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false
        })
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session:ISession) {
        const nextSessionId = Math.max.apply(null, this.event.sessions.map(session => session.id))
        session.id = nextSessionId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}