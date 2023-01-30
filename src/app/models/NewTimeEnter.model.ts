import { Time } from "@angular/common";
import { Chantier } from "./chantier.model";

export class NewTimeEnter {

  constructor(
    //deprecated
  //public id: number,
  // Add time in hours start end with calc version ?
  // Could be nice
  // Easy Version put only hours
  //Hard version put start and end time (maybe a break time inside) (enter in Chantier and leave + break which will be the -30 min for exemple)


  // Delete Name as not needed.
  public startTime: Time,
  public endTime: Time,

  //date should be retrive // for now it is hard code.
  public date: string,
  //Comment peut etre optionel !
  //public comment: string,

  // Il faudra prevoir des truc generique pas
  public chantier: Chantier

  ) {}


}

//https://material.angular.io/components/datepicker/overview  DATE PICKER



//https://stackblitz.com/edit/angular-time-picker-edupala?file=src%2Fapp%2Fapp.module.ts
