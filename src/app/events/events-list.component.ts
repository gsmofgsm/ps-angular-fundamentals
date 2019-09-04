import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail
            (eventClick)="handleClick($event)"
            [event]="event"></event-thumbnail>
    </div>
    `
})
export class EventListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/iamges/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleClick(data) {
        console.log('received: ', data);
    }
}