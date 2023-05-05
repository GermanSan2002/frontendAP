import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudio } from '../model/estudio';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SEstudioService {
  URL = environment.URL + 'estlab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.URL + 'detail/' + id);
  }

  public save(est: Estudio): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', est);
  }

  public update(id: number, est: Estudio): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}update/${id}`, est);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
