import { Injectable, ValueSansProvider } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'Shared/user';
import { Item } from 'Shared/item';
import { of } from 'rxjs';

@Injectable()

export class PiaItemsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) {}

   addUser(user: User): Observable<any> {
     return this.http.post<User>('http://localhost:3000/Server/piaitems', user, this.httpOptions)
       .pipe(
         catchError(this.handleError<User>('Add User'))
       );
   }

   getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/Server')
      .pipe(
        tap(items => console.log('Items fetched!')),
        catchError(this.handleError<Item[]>('Get items', []))
        
      );
  }
  
   updateUser(id, user: User): Observable<any> {
    return this.http.put('http://localhost:3000/Server/piaitems/:id' + id, user, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<User[]>('Update User'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  
} 


