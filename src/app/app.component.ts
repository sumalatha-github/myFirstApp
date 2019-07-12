
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DataService } from '../service/add.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private addService:DataService){

  }
  public propertyBinding:String = '';
  public disableField:boolean = false;
  public storedData = [];
  public image ;
  title = 'Registration Form';
  name:String = "";
  fname:String = '';
  ngOnInit() {
   
  }
  add(fname,lname,address){
    console.log(fname,lname);
    var addInfo = {
      "fname":fname,
      "lname":lname,
      "address":address
    }
    var addInfoArray = [];
    addInfoArray.push(addInfo)
    console.log("save data in controller====",addInfo);
    this.addService.saveInfo(addInfo).subscribe(data =>{
      console.log("data recived from the database-----------------",data);
      if(data != ''){
        this.name = "Sucessfully Submited data";
      }
      this.storedData.push(data);
      this.disableField = true;
      this.propertyBinding = data.fname; 
      this.image = 'assets/a.jpg';
    },error =>{
      console.log("Error occuered while reciving the data");
    });

  }
}