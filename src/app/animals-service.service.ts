import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsServiceService {
  readonly APIUrl = "http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }

  getlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/animal/');

  }

  deletelist(val:any){
    return this.http.delete<any[]>(this.APIUrl + '/animal/'+val);

  }



}
