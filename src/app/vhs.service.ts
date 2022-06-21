import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {VHS, VHSCommand} from "./vhs";
import {Rental, RentalCommand} from "./rental";

@Injectable({
  providedIn: 'root'
})
export class VhsService {

  private vhsURL = 'http://localhost:8080/api/vhs';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }
  getVHSes(): Observable<VHS[]> {
    return this.http.get<VHS[]>(this.vhsURL)
      .pipe(
        tap(_ => console.log('fetched VHSes')),
        catchError(this.handleError<VHS[]>('getVHSes', []))
      );
  }

  getVHS(id: number): Observable<VHS> {
    const url = `${this.vhsURL}/${id}`;
    return this.http.get<VHS>(url)
      .pipe(
        tap(_ => console.log(`fetched VHS with id= ${id}`)),
        catchError(this.handleError<VHS>(`getVHS id=${id}`))
      );
  }

  updateVHS(vhs : VHS): Observable<any> {
    const url = `${this.vhsURL}/${vhs.id}`;
    const name = vhs.name;
    const info = vhs.info;
    const releaseYear = vhs.releaseYear;
    const rating = vhs.rating;
    const runtime = vhs.runtime;
    const score = vhs.score;
    const price = vhs.price;
    const vhsCommand = {name,info,releaseYear,rating,runtime,score,price} as VHSCommand
    return this.http.put(url, vhsCommand, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated vhs with id=${vhs.id}`)),
        catchError(this.handleError<any>('updateVHS'))
      );
  }

  addVHS(vhs : VHSCommand): Observable<VHS> {
    return this.http.post<VHS>(this.vhsURL, vhs, this.httpOptions)
      .pipe(
        tap((newVHS: VHS) => console.log(`added vhs w id=${newVHS.id}`)),
        catchError(this.handleError<VHS>('addVHS'))
      );
  }

  deleteVHS(vhs : VHS): Observable<VHS> {
    const url = `${this.vhsURL}/${vhs.id}`;

    return this.http.delete<VHS>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`deleted vhs w id=${vhs.id}`)),
        catchError(this.handleError<VHS>('deleteVHS'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
