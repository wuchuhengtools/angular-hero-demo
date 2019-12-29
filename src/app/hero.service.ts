import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { MessageService } from './message.service';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
   
  constructor(public messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>
  {
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }
  
  getHero(id: number): Observable<Hero>
  {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id));
  }
}