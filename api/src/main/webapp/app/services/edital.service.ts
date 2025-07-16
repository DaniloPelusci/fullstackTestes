import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edital } from '../models/edital';

@Injectable({ providedIn: 'root' })
export class EditalService {
  private apiUrl = '/api/editais';

  constructor(private http: HttpClient) {}

  list(): Observable<Edital[]> {
    return this.http.get<Edital[]>(this.apiUrl);
  }

  get(id: number): Observable<Edital> {
    return this.http.get<Edital>(`${this.apiUrl}/${id}`);
  }

  create(edital: Edital): Observable<Edital> {
    return this.http.post<Edital>(this.apiUrl, edital);
  }

  update(id: number, edital: Edital): Observable<Edital> {
    return this.http.put<Edital>(`${this.apiUrl}/${id}`, edital);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
