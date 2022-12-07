import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Rouge'
  // };

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    console.warn(hero)
    this.selectedHero=hero;
  }


}
