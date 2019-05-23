import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-get-people',
  templateUrl: './get-people.component.html',
  styleUrls: ['./get-people.component.scss'],
})
export class GetPeopleComponent implements OnInit {

  public people: Person[];

  constructor(private peopleService: PeopleService) {
    this.peopleService.getPeople().subscribe(result => {
      this.people = result;
    }, error => console.error(error));
  }

  public delete(person: Person) {
    if (confirm('Are you sure you want to delete ' + person.name + '?')) {
      let index = this.people.indexOf(person, 0);

      this.peopleService.deletePerson(person.id).subscribe(() => {
        this.people.splice(index, 1);
      }, error => console.error(error));
    }
  }

  ngOnInit() {}

}
