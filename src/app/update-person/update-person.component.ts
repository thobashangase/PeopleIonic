import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss'],
})
export class UpdatePersonComponent implements OnInit {

  public personUpdateForm: FormGroup;
  person: Person;
  id: string;
  
  constructor(private formBuilder: FormBuilder, private peopleService: PeopleService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.peopleService.getPersonById(this.id).subscribe(result => {
      this.personUpdateForm = this.formBuilder.group({
        id: [result.id],
        name: [result.name, [Validators.required, Validators.minLength(3)]],
        phone: [result.phone, [Validators.required, Validators.pattern("[0-9]{10}")]],
        email: [result.email, [Validators.required, Validators.email]]
      });
    }, error => console.error(error));
  }

  onSubmit() {
    this.peopleService.updatePerson(this.personUpdateForm.value).subscribe(() => { 
      this.route.navigateByUrl('/people'); 
    });
  }

  ngOnInit() {}

}
