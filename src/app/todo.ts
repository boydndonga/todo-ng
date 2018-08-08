export class Todo {
  public id: number;
  public title: string = '';
  public complete: boolean = false;

  constructor(values: Object= {} ) {
    Object.assign(this, values);
  }
}
