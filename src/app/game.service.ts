import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
people= [
  {name:"Ariana", source:'../../assets/photos/Ariana.jpg'}, 
  {name:"Kevin", source:'../../assets/photos/Kevin.jpg'},
  {name:"Lana", source:'../../assets/photos/Lana.jpg'},
   {name:"Anna", source:'../../assets/photos/Anna.jpg'},
   {name:"Kate", source:'../../assets/photos/Kate.jpg'}, 
   {name:"Raven", source:'../../assets/photos/Raven.jpg'},
   {name:"John", source:'../../assets/photos/John.jpg'},
    {name:"Margo", source:'../../assets/photos/Margo.jpg'},
    {name:"Madison", source:'../../assets/photos/Madison.jpg'}, 
    {name:"Stitch", source:'../../assets/photos/Stitch.jpg'},
    {name:"Tracy", source:'../../assets/photos/Tracy.jpg'},
     {name:"Danielle", source:'../../assets/photos/Danielle.jpg'},
     {name:"Cristina", source:'../../assets/photos/Cristina.jpg'}, 
     {name:"Sara", source:'../../assets/photos/Sara.jpg'},
     {name:"Eric", source:'../../assets/photos/Eric.jpg'},
      {name:"Stephanie", source:'../../assets/photos/Stephanie.jpg'},
      {name:"Katy", source:'../../assets/photos/Katy.jpg'}, 
      {name:"Sarah", source:'../../assets/photos/Sarah.jpg'},
      {name:"Brian", source:'../../assets/photos/Brian.jpg'},
       {name:"Robert", source:'../../assets/photos/Robert.jpg'},
       {name:"Becky", source:'../../assets/photos/Becky.jpg'},
       {name:"Kim", source:'../../assets/photos/Kim.jpg'},
       {name:"Zendaya", source:'../../assets/photos/Zendaya.jpg'},
        {name:"Heather", source:'../../assets/photos/Heather.jpg'}
]

sendPeople(){
  return this.people;
}
}
