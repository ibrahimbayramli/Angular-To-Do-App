import {Component, Input} from '@angular/core';
import {UnDoneModel} from "../../models/unDoneModel";
import {DoneModel} from "../../models/doneModel";

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent {

  @Input() unDoneModels:UnDoneModel[];
  @Input() doneModels:DoneModel[];

  deleteUnDoneItem(unDone: any) {

    let index = this.unDoneModels.indexOf(unDone);

    this.unDoneModels.splice(index, 1);

  }
  complateUnDoneItem(unDoneModel: any) {
    this.doneModels.push(unDoneModel);

    let index = this.unDoneModels.indexOf(unDoneModel);

    this.unDoneModels.splice(index, 1);
  }

}
