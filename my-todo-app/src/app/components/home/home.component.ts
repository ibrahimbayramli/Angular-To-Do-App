import {Component, ViewEncapsulation} from '@angular/core';
import {UnDoneModel} from "../../models/unDoneModel";
import {DoneModel} from "../../models/doneModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent {
  title = 'my-todo-app';
  unDoneModels: UnDoneModel[] = [];
  doneModels: DoneModel[] = [];








}
