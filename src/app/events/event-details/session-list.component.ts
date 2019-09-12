import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[]
    @Input() filterBy:string
    visibleSessions:ISession[]

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(level:string):void {
        if (level === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter
                (session => session.level.toLowerCase() === level)
        }
    }
}