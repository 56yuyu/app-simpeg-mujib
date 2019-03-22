import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Akun } from '../model/akun';
import { MessageService } from '../../message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AkunService {

  private baseUrl = 'http://localhost:8888/api/akun';
  private loggedInStatus = false

  constructor(private http: HttpClient, private messageService: MessageService) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username) {
    return this.http.post<Akun>(`${this.baseUrl}` + `/login`, {
      username
    })
  }

  getUsername(username: String): Observable<Akun> {
    const url = `${this.baseUrl}/usrname/${username}`;  
    return this.http.get<Akun>(url).pipe(
      tap(_ => this.log(`fetched akun id=${username}`)),
      catchError(this.handleError<Akun>(`getAkun id=${username}`))
    );
  }

  getPassword(pwd: String): Observable<Akun> {
    const url = `${this.baseUrl}/pwd/${pwd}`;  
    return this.http.get<Akun>(url).pipe(
      tap(_ => this.log(`fetched akun id=${pwd}`)),
      catchError(this.handleError<Akun>(`getAkun id=${pwd}`))
    );
  }

  getDataAkun(id: number): Observable<Akun> {
    const url = `${this.baseUrl}/detail/${id}`;  
    return this.http.get<Akun>(url).pipe(
      tap(_ => this.log(`fetched akun id=${id}`)),
      catchError(this.handleError<Akun>(`getAkun id=${id}`))
    );
  }

  updateDataAkun (id: number, akun: Akun): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, akun, httpOptions).pipe(
      tap(_ => this.log(`updated akun id=${akun.id_akun}`)),
      catchError(this.handleError<any>('updateAkun'))
    );
  }

  getAkun(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAkun(akun: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, akun);
  }

  updateAkun(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAkun(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAkunList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`AkunService: ${message}`);
  }

}
