import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import { Chantier } from '../models/chantier.model';
import { NewTimeEnter } from '../models/NewTimeEnter.model';
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

  profileForm = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(),
    date: new FormControl(),
    chantier: new FormControl(),
  });


  OnSubmit() {
    //console.log('works good');
//console.log(Form.value)
    //console.log(this.profileForm)
//    window.location.reload();

    const result = new NewTimeEnter(
      this.profileForm.value.startTime,
      this.profileForm.value.endTime,
      this.profileForm.value.date,
      new Chantier(this.profileForm.value.chantier) //
      )

      console.log(result);
  }


}
