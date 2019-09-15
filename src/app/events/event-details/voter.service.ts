import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {
    constructor(private http:HttpClient){}

    deleteVoter(session:ISession, voterName:string) {
        session.voters = session.voters.filter(voter => voter !== voterName)
    }

    addVoter(eventId:number, session:ISession, voterName:string) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe()
    }

    userHasVoted(session:ISession, voterName:string) {
        return session.voters.some(voter => voter === voterName)
    }

    private handleError<T> (operation = 'operation', result?:T) {
      return (error:any):Observable<T> => {
        console.error(error)
        return of(result as T)
      }
    }
}