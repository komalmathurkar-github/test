import { Component, OnInit } from '@angular/core';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Object;
  constructor(private data: HeroService) { }

  ngOnInit() {
    this.data.getHeroes().subscribe(
      data => this.heroes$ = data
  }

}
