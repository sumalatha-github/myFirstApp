import { Component, OnInit,ViewChild, ViewChildren,Input,Output,EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../../service/add.service';
import { ChangeBgColorDirective } from '../../../directives/hostDirective'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
 
})
export class ProfileEditorComponent implements OnInit {
  @Input('inputData') inputData:string;
  @Output() countChange = new EventEmitter();
  public a : ChangeBgColorDirective;
  color:String ="green";
  count = 9;
  profileGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl('')
  })
  constructor(private ds:DataService) {

   }
  title = 'Hey ng Developer ! ';
  ngOnInit() {
    console.log("the inputData---",this.inputData);
  }

  formSubmit() {
    console.log("Form submitted data =====",this.profileGroup.value);
    this.ds.saveInfo(this.profileGroup.value).subscribe(data =>{
      console.log("okay----",data);
    });
  }

  updateProfile(){
    this.profileGroup.patchValue({
      fname:'sumalatha'
    });
    //this.ds.dataDirective();
    //this.a.ChangeBgColor("green");
    console.log(" this.vc.nativeElement---");
    this.color ="yellow";
    let count = 1;
    this.countChange.emit(count);

  }
}
