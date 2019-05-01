import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../models/icharacter';

@Injectable()
export class PathOfExileApiService {
  baseUrl = 'http://localhost:3000';

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

    return this.http.get(
      `${this.baseUrl}/get-characters`,
      {
        params: httpParams,
        headers: this.getHeaders()
      }
    );
  }
}
