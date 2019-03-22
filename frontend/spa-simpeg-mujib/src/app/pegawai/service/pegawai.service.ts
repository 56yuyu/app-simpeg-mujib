import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pegawai } from '../model/pegawai';
import { MessageService } from '../../message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {

  private baseUrl = 'http://localhost:8888/api/pegawai';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getDataPegawai(id: number): Observable<Pegawai> {
    const url = `${this.baseUrl}/detail/${id}`;  
    return this.http.get<Pegawai>(url).pipe(
      tap(_ => this.log(`fetched id=${id}`)),
      catchError(this.handleError<Pegawai>(`get id=${id}`))
    );
  }

  updateDataPegawai (id: number, pegawai: Pegawai): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, pegawai, httpOptions).pipe(
      tap(_ => this.log(`updated id=${pegawai.idPegawai}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  getPegawai(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPegawai(pegawai: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, pegawai);
  }

  updatePegawai(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePegawai(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPegawaiList(): Observable<any> {
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
    this.messageService.add(`Service: ${message}`);
  }

}
