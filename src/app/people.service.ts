import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../app/models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  myAppUrl: string = "";
  
    constructor(private _http: HttpClient) {
        this.myAppUrl = "http://localhost:3000/";
    }

    getPeople(): Observable<Person[]> {  
      return this._http.get<Person[]>(this.myAppUrl + 'api/People');  
    }  
  
    getPersonById(id: string): Observable<Person> {  
      return this._http.get<Person>(this.myAppUrl + "api/People/" + id);
    }  

    addPerson(person) {  
      return this._http.post(this.myAppUrl + 'api/People', person);
    }  
  
    updatePerson(person) {  
      return this._http.put(this.myAppUrl + 'api/People/' + person.id, person);
    }  
  
    deletePerson(id: string) {  
      return this._http.delete(this.myAppUrl + "api/People/" + id);
    }
}