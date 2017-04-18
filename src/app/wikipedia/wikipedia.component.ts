import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { WikipediaService } from 'app/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  template:`
    <h1>Wikipedia Demo</h1>
    <p>Search after each keystroke</p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>`,
  styleUrls: ['./wikipedia.component.css']  
})
export class WikipediaComponent{

  items: Observable<string[]>;
  constructor (private wikipediaService: WikipediaService) { }
  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }

}



