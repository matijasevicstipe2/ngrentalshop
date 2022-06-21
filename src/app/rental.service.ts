import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Rental, RentalCommand} from "./rental";


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentalURL = 'http://localhost:8080/api/rental';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }
  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(this.rentalURL)
      .pipe(
        tap(_ => console.log('fetched rentals')),
        catchError(this.handleError<Rental[]>('getRentals', []))
      );
  }

  getRental(id: number): Observable<Rental> {
    const url = `${this.rentalURL}/${id}`;
    return this.http.get<Rental>(url)
      .pipe(
        tap(_ => console.log(`fetched Rental w id= ${id}`)),
        catchError(this.handleError<Rental>(`getRental id=${id}`))
      );
  }

  updateRental(rental : Rental): Observable<any> {
    const url = `${this.rentalURL}/${rental.id}`;
    const userId = rental.userId;
    const vhsId = rental.vhsId;
    const rentalDate = rental.rentalDate;
    const returnDate = rental.returnDate;
    const status = rental.status;
    const rentalCommand = {userId,vhsId,rentalDate,returnDate,status} as RentalCommand
    return this.http.put(url, rentalCommand, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated rental with id=${rental.id}`)),
        catchError(this.handleError<any>('updateRental'))
      );
  }

  addRental(rental: RentalCommand): Observable<Rental> {
    return this.http.post<Rental>(this.rentalURL, rental, this.httpOptions)
      .pipe(
        tap((newRental : Rental) => console.log(`added rental w id=${newRental.id}`)),
        catchError(this.handleError<Rental>('addRental'))
      );
  }

  deleteRental(rental: Rental ): Observable<Rental> {
    const url = `${this.rentalURL}/${rental.id}`;

    return this.http.delete<Rental>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`deleted rental w id=${rental.id}`)),
        catchError(this.handleError<Rental>('deleteRental'))
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
