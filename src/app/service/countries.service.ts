import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Countries } from './countries';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  // import country json data
  private dataUrl = 'assets/data/countries.json';

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    // console.error(errorMessage);
    return throwError(errorMessage);
  }

  // GET COUNTRIES METHOD
  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.dataUrl)
      .pipe(
        // tap(data => console.log('All: ' + JSON.stringify(data[0].latlng))),
        catchError(this.handleError)
      );
  }
}