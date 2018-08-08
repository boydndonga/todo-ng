import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  public lastId: number = 0;
  public todo: Todo[] = [];
  constructor() { }
}
