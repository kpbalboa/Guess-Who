import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service'
import { from } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameservice: GameService) { }
ppl:any = [];
person:any;
  ngOnInit() {
    let people = this.gameservice.sendPeople();
    this.person = people[Math.floor(Math.random() * 25)]
    console.log(this.person)
    people.forEach(prsn => { 
      this.ppl.push(prsn)
    });
  }
  activate(e){
    console.log(e)
    if(e.target.classList[0]== "card"){
      if (e.target.classList[1] == undefined) {
        e.target.classList.add('select')
      }
      else{
        e.target.classList.remove('select')
      }
  
    }else{
    if (e.target.parentElement.classList[1] == undefined) {
      e.target.parentElement.classList.add('select')
      console.log(e.target.parentElement.classList[1])
    }
    else{
      e.target.parentElement.classList.remove('select')
      console.log(e.target.parentElement.classList[1])
    }
  }
  }

  minimize(e){
    if(e.target.parentElement.classList[0]=="target" || e.target.parentElement.classList[0]== "mini" ){
    if (e.target.parentElement.classList[0] == "target") {
      e.target.parentElement.classList.add('mini')
      e.target.parentElement.classList.remove('target')
    }
    else{
      
      e.target.parentElement.classList.remove('mini')
      e.target.parentElement.classList.add('target')
    }
  }else{
    if (e.target.classList[0] == "target") {
      e.target.classList.remove('target')
      e.target.classList.add('mini')
    }
    else{
      e.target.classList.remove('mini')
      e.target.classList.add('target')
    }
  }
}
reset(){
  window.location.reload();
}

}
