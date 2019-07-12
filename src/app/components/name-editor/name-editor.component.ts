import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  
  name = new FormControl('');
  sendDataValue = "suma";
  constructor() { }

  ngOnInit() {
    console.log("form controller Name is---",this.name.value);
    
  }

  updateName(){
    this.name.setValue("sumalatha");
  }

  changeCount(count){
    console.log("count=====",count);
  }
}
