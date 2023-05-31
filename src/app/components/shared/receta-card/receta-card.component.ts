import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receta } from 'src/app/services/receta.service';

@Component({
  selector: 'app-receta-card',
  templateUrl: './receta-card.component.html',
  styleUrls: ['./receta-card.component.css']
})
export class RecetaCardComponent {
  @Input() receta: Receta | undefined;
  @Input() index: number | undefined;
  @Output() recetaSelected: EventEmitter<number>;

  constructor(){
    this.recetaSelected = new EventEmitter();
  }

  verReceta(){
    this.recetaSelected.emit(this.index);
  }

}
