import { Component, Input, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';


@Component({
  selector: 'app-worktime-list',
  templateUrl: './worktime-list.component.html',
  styleUrls: ['../worktime.component.css']
})
export class WorktimeListComponent implements OnInit{
  @Input() times: Time[] = [];

  ngOnInit() {

  }




}
