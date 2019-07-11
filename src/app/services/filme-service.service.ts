import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeServiceService {

  constructor(private http:HttpClient) {}
  list(){
    return this.http.get("https://5d262d00eeb36400145c59b3.mockapi.io/filme")
  }
  post(filme){
    return this.http.post("https://5d262d00eeb36400145c59b3.mockapi.io/filme", filme)
  }

}
