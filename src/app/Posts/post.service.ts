import { Injectable } from '@angular/core';
import { IPost } from './post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private url = 'https://localhost:44365/api/posts';

    constructor(private http: HttpClient){}

    getPosts() : Observable<IPost[]>{
        return this.http.get<IPost[]>(this.url).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getPost(id: string) : Observable<IPost>{
        return this.http.get<IPost>(`${this.url}/${id}`).pipe(
            tap(data => console.log('Specific: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            console.log(errorMessage);
            return throwError(errorMessage);
        }
    }
}