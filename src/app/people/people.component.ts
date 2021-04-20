import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public name = 'Imtiaz Ali';
  public headId = 'head';
  public inputField = 'inputField';
  public isDisabled = 'true';
  public people = '';
  public textOnClick = '';
  public employees = [];
  constructor(private empService: EmployeeService ) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe( data => this.employees = data);
  }


  handleEvent(value) {
    this.textOnClick = value;
  }

}
