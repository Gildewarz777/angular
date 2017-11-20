import {Component, OnInit, NgModule} from '@angular/core';

@Component({
  selector: 'nb-part',
  template: `
  <input (keyup)="onKey($event)">
  <div *ngFor="let nbpart of nbparts">
  <img src="assets/images/pizza-{{nbpart}}.png" alt="">
  </div>
  `
})

export class NbPartComponent {
  nbpartrest = 0;
  nbpizza = 1;
  nbparts = [0];
  i = 1;
  img = document.createElement("img");
  

  onKey(event: KeyboardEvent) {
    this.nbparts = [];
    if (!parseInt((<HTMLInputElement>event.target).value)){
      this.nbpartrest  = 0;
      this.nbparts.push(this.nbpartrest);
    }
    else{
      this.nbpartrest  = parseInt((<HTMLInputElement>event.target).value)%6
      this.nbpizza = ~~(parseInt((<HTMLInputElement>event.target).value)/6) + 1




      if(this.nbpartrest  == 0 && this.nbpizza != 0){
        this.nbpartrest  = 6
        this.nbpizza -= 1
      }

      for(this.i=1; this.i < this.nbpizza; this.i++) {
        this.nbparts.push(6);
      }
      this.nbparts.push(this.nbpartrest);
    }
  }
}
@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})

export class PizzaFormComponent implements OnInit {
  pizzas: Pizza[];
  extras: Extra[];
  pates: Pate[];
  showMeInfos: boolean;
  showMeMain: boolean;
  nom: string;
  constructor() { }
  ngOnInit() {
    this.pizzas = PIZZAS;
    this.extras = EXTRAS;
    this.pates = PATES;
    this.showMeInfos = false;
    this.showMeMain = true;
  }

  displayForm() {
    this.showMeInfos = true;
  }

  hideMain() {
    this.showMeMain = false;
  }

  update(value: string) {
    this.nom = value;
  }

}

export interface Pizza {
  name: string;
  prix: number;
  ingredients: string[];
}

export interface Extra {
  name: string;
  prix: number;
  checked: boolean;
}

export interface Pate {
  name: string;
  prix: number;
  checked: boolean;
}

const PIZZAS: Pizza[] = [
  { name: 'Margherita', ingredients: ['Tomate', 'mozzarella', 'basilic', 'huile d olive'], prix: 8},
  { name: 'Reine', ingredients: ['Mozzarella', 'champignons', 'artichaut', 'jambon', 'olives', 'huile dolive'], prix: 10},
  { name: 'Quattro stagioni', ingredients: ['Tomate', 'mozzarella', 'basilic', 'huile dolive'], prix: 12},
  { name: 'Sicilienne', ingredients: ['Tomate', 'mozzarella', 'basilic', 'anchois', 'câpres', 'champignons'], prix: 12},
];

const EXTRAS: Extra[] = [
  { name: 'Olives', prix: 1, checked: false},
  { name: 'Anchois', prix: 4, checked: false},
  { name: 'Chèvre', prix: 3, checked: false},
  { name: 'Piment', prix: 1, checked: false},
];

const PATES: Pate[] = [
  { name: 'Classique', prix: 0, checked: false},
  { name: 'Extra fine', prix: 2, checked: false},
  { name: 'Epaisse', prix: 3, checked: false},
];

