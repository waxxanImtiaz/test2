import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  colors = ['red', 'green', 'blue'];
  displayName = true;

  // tslint:disable-next-line:no-input-rename
  @Input( 'parentData' ) public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    this.childEvent.emit('Hello this directive.component.ts');
  }
}
