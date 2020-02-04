import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameservice: GameService) { }

  ngOnInit() {
  }
  Getpeople(title){
    
  this.gameservice.getPeople(title)
  }

}
