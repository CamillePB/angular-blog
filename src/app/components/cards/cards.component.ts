import { Component, Input, OnInit } from '@angular/core';
import { cardsData } from 'src/app/data/cardsData';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  cardSubtitle:string = ""

  @Input()
  Id:string="0"

  constructor() {
   }

  ngOnInit(): void {
  }
}
