import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {

  personAddForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private peopleService: PeopleService, private route: Router) {
    this.personAddForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.personAddForm.value);

    this.peopleService.addPerson(this.personAddForm.value).subscribe(() => { 
      this.route.navigateByUrl('/people'); 
    });
  }

  ngOnInit() {}

}
