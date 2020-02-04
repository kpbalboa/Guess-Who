import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }

  peoplelist=[];
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
characters=[];
pictures=[]
movie;
fetchMovie(searchTerm: string): Observable<any> {
  let movies= this.http
    .get(`https://api.themoviedb.org/3/search/movie?api_key=15e5712ff47e4688d1f70d94261a6c5d&query=${searchTerm}
`).toPromise()
movies.then((data)=>{
  this.fetchcast(data.results[0].id)
})

}
fetchcast(id){
  let people =  this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=964781403df38499570b6f7233c0a524&language=en-US&page=1`).toPromise();
  // console.log('click')
   people.then((data)=>{
    console.log(data)
    let i;
    for (i = 0; i < 20; i++) {
      let character= data.cast[i].character
      if (character.includes("/ ")){
        character=character.split("/ ").pop();
      }
      this.characters.push(character)
      this.peoplelist.push(data.cast[i].name)
      this.fetchPictures(data.cast[i].id)
    }
    });
  
  }

  fetchPictures(id){
    let pictures = this.http.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=964781403df38499570b6f7233c0a524`).toPromise();
  pictures.then((data)=>{
    if(data.profiles[0] == undefined){
      this.pictures.push('undefined')
      
    }else{
      this.pictures.push(("https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+data.profiles[0].file_path)
      )};
      if(this.pictures.length==20){
        this.pushPeople()
      }
  })
}
pushPeople(){
  let i;
  for (i = 0; i < this.peoplelist.length; i++) {
    // console.log(this.people)
    this.people.push({name: this.peoplelist[i],source: this.pictures[i], character: this.characters[i]})
  }
  console.log(this.people)
  }
getPeople(title){
if(title.length>0){
this.movie = title
}
this.people.length=0
this.characters.length=0
this.pictures.length=0
this.peoplelist.length=0
this.fetchMovie(this.movie)
}

sendPeople(){
 
  return this.people;
}
}
