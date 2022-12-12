import {Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {UnDoneModel} from "../../models/unDoneModel";

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddUndoneComponent {

  @Input() unDoneModels:UnDoneModel[];
  @ViewChild("addInput") addInput:ElementRef;

  unDoneInput: string = "";

  addUnDoneItem(addInput:HTMLInputElement) {
    

    let unDoneModel = new UnDoneModel();
    unDoneModel.title = addInput.value;
    unDoneModel.date = Date();

    this.unDoneModels.push(unDoneModel);
  }

}
