import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICharacter } from '../models/icharacter';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { switchMap, filter, map, find } from 'rxjs/operators';
import { IStaticData } from '../store/static/istatic-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000';
  pathOfExileUrl = 'https://www.pathofexile.com'
  
  constructor(private http: HttpClient) { }

  private getHeaders() {
    const POESESSID = localStorage.getItem('POESESSID');
    return { POESESSID };
  }

  getItems(accountName: string, character: string) {
    return this.http.get(`${this.baseUrl}/get-items`, {
      params: {
        accountName,
        character
      },
      headers: this.getHeaders(),
    });
  }

  getCharacters(accountName?: string): Observable<ICharacter[]> {
    const httpParams: HttpParams = new HttpParams();
    if (accountName) {
      httpParams.set('accountName', accountName);
    }

    return this.http.get<ICharacter[]>(
      `${this.baseUrl}/get-characters`,
      {
        params: httpParams,
        headers: this.getHeaders()
      }
    )
  }

  getSimilarItem(item, leaguge){
    return this.http.post(`${this.baseUrl}/get-similar-items?leauge=${leaguge}`, item, {headers: this.getHeaders()});
  }

  getStaticData(): Observable<IStaticData>{
    return this.http.get<IStaticData>(`${this.baseUrl}/poe-static-data`, {headers: this.getHeaders()});
  }
}
