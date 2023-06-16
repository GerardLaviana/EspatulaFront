import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Receta, RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-receta-card',
  templateUrl: './receta-card.component.html',
  styleUrls: ['./receta-card.component.css']
})
export class RecetaCardComponent implements OnInit{
  @Input() receta: Receta | undefined;
  @Input() index: number | undefined;
  @Output() recetaSelected: EventEmitter<number>;
  isGluten: boolean=false;

  constructor(private _receService: RecetaService){
    this.recetaSelected = new EventEmitter();
  }

  ngOnInit(): void {
    this.isGluten = this._receService.tieneGluten(this.receta!);
    console.log(this.isGluten);
  }

  verReceta(){
    this.recetaSelected.emit(this.index);
  }

}
