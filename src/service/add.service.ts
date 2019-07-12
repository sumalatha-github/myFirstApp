import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { ChangeBgColorDirective } from '../directives/hostDirective'

@Injectable()

export class DataService {

  constructor(private http:Http) { 
      console.log("Entered into the service call");

  }
  saveInfo(addInfo):Observable<any>{
      console.log("Save the data",addInfo);
      return this.http.post('http://localhost:8081/Save',addInfo)
      .pipe(map(res => res.json()));
      
  }

  
}