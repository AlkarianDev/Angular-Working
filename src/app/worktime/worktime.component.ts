import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import { Chantier } from '../models/chantier.model';
import { Time } from '../models/time.model';



@Component({
  selector: 'app-worktime',
  templateUrl: './worktime.component.html',
  styleUrls: ['./worktime.component.css']
})


export class WorktimeComponent {


  selectedChantier: Chantier | undefined;

  times = [
    {id: 1, name:'test 1', date: '25 december'},
    {id: 2, name:'test 2', date: '26 december'},
    {id: 3, name:'test 3', date: '27 december'},
    {id: 4, name:'test 4', date: '28 december'}
  ];

  chantiers = [
    {id: 1, name:'Namur'},
    {id: 2, name:'Yolo'},
    {id: 3, name:'XD'},
    {id: 4, name:'test 4'}
  ];




  modelTime = new Time(10, 'df', 'ds');

  modelChantier = new Chantier(10, 'sss');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newChantier() {
    this.modelChantier = new Chantier(0,'');
  }

  newTime() {
    this.modelTime = new Time(0, '', '');
  }




}
