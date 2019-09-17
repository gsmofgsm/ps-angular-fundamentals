import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    @Input() eventId:number
    visibleSessions:ISession[]

    constructor(private auth:AuthService, private voterService:VoterService) {

    }

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBySessions(this.sortBy)
        }
    }

    toggleVote(session:ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
        } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(this.sortByVotesDsc)
        }
    }

    userHasVoted(session:ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

    filterSessions(level:string):void {
        if (level === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter
                (session => session.level.toLowerCase() === level)
        }
    }

    sortBySessions(sortBy:string):void {
        if (sortBy === 'name') {
            this.visibleSessions = this.visibleSessions.sort(this.sortByNameAsc)
        } else if (sortBy === 'votes') {
            this.visibleSessions = this.visibleSessions.sort(this.sortByVotesDsc)
        }
    }

    sortByNameAsc(s1:ISession, s2:ISession) {
        if (s1.name < s2.name) {
            return -1
        } else if (s1.name == s2.name) {
            return 0
        } else {
            return 1
        }
    }

    sortByVotesDsc(s1:ISession, s2:ISession) {
        return s2.voters.length - s1.voters.length
    }
}