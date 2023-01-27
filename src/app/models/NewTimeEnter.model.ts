import { Chantier } from "./chantier.model";

export class NewTimeEnter {

  constructor(
  public id: number,
  public name: string,
  public date: string,
  public comment: string,

  chantier: Chantier

  ) {}


}
