import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  inputChangeLog: string[] = [];
  inputForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
    name: new FormControl()
  });
  this.logInputChange();
  }

logInputChange() {
  const nameControl = this.inputForm.get('name');
  nameControl.valueChanges.forEach(
    (value: string) => {
      this.inputChangeLog.push(value);
      console.log(this.inputChangeLog);
    }
  );
}

}