import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SessionListComponent } from './session-list.component';
import { DebugElement } from '@angular/core';
import { async } from 'q';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWelComponent } from 'src/app/common';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
    let fixture:ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {
            currentUser: {userName: 'Joe'},
            isAuthenticated:() => true
        }
        let mockVoterService = {
            userHasVoted: () => true
        }

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent, UpvoteComponent, DurationPipe, CollapsibleWelComponent
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService},
            ],
            schemas: []
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent)
        component = fixture.componentInstance
        debugEl = fixture.debugElement
        element = fixture.nativeElement
    })

    describe('initial display', () => {
        // it('should have the correct session title', () => {
        //     component.sessions = [
        //         {id: 3, name: 'session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}
        //     ]
        //     component.filterBy = 'all'
        //     component.sortBy = 'name'
        //     component.eventId = 4

        //     component.ngOnChanges()

        //     fixture.detectChanges()

        //     // console.log(element.querySelector('[well-title]').textContent)
        //     // expect(element.querySelector('[well-title]').textContent).toContain('session 1')
        //     expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('session 1')
        // })
    })
})