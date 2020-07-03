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

  getUser(): Observable<any> {
    return this.http.get<User>('http://localhost:3000/Server/piapreresult')
      .pipe(
        tap(_ => console.log('Users fetched!')),
        catchError(this.handleError<User[]>('Get users'))
        
      );
  }
  
   updateUser(id, data): Observable<any> {
    return this.http.post<User>('http://localhost:3000/Server/piaitems/:' +id, data, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: `)),
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


