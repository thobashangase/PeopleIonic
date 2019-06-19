import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {

  public person: Person;
  id: string;

  constructor(private peopleService: PeopleService, @Inject(ActivatedRoute) private activatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.peopleService.getPersonById(this.id).subscribe(result => {
      this.person = result;
    }, error => console.error(error));
  }

  public delete(person: Person) {
    if (confirm('Are you sure you want to delete ' + person.name + '?')) {

      this.peopleService.deletePerson(person.id).subscribe(() => {
        this.router.navigateByUrl('/people'); 
      }, error => console.error(error));
    }
  }

  ngOnInit() {}

}
