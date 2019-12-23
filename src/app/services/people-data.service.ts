import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleDataService {

  private _URL = 'api/peoplesData'

  constructor(private _HTTP:HttpClient) { }

  public getAllPeoplesData(){
    return this._HTTP.get<People[]>(this._URL)
  }

}
