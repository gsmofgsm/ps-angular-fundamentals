import {Component, Input, Output, EventEmitter} from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date: {{event.date | date:'d/M/y'}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event.time">
            Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'"> (Early start)</span>
            <span *ngSwitchCase="'10:00 am'"> (Late start)</span>
            <span *ngSwitchDefault> (Normal start)</span>
        </div>
        <div>Price: {{event.price | currency:'EUR'}}</div>
        <div *ngIf="event.location">
            <span>Location: {{event.location?.address}}</span>
            <span class="pad-left">{{event.location?.city}}, {{event.location?.country}}</span>
        </div>
        <div [hidden]="!event.onlineUrl">Url: {{event.onlineUrl}}</div>
        <button class="btn btn-primary" (click)="clickMe(event.name)">Click Me!</button>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important;}
        .thumbnail { min-height: 250px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:IEvent
    @Output() eventClick = new EventEmitter()

    clickMe(data) {
        this.eventClick.emit(data);
    }

    getStartTimeClass() {
        const earlyStart = this.event && this.event.time === '8:00 am';
        return {green: earlyStart, bold: earlyStart};
    }
}