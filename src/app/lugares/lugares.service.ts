import { Injectable } from '@angular/core';
import {Lugar} from './lugar.model'

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  private lugares:Lugar[]=[
    {
      id:'1',
      title:'Torre Eiffel',
      imageURL:'https://www.paris-forever.com/wp-content/uploads/2018/08/tour-eiffel-3.jpg',
      comentario:['Una experiencia asombrosa']
    },
    {
      id:'2',
      title:'Estatua De la Libertad',
      imageURL:'https://viajes.nationalgeographic.com.es/medio/2021/03/15/istock-989260044-ccbc19b5-1500x1000_a10f0fb1_550x807.jpeg',
      comentario:['Una experiencia asombrosa']
    }]

  constructor() { }

  getLugares () {
    return[...this.lugares]
  }

  getLugar (lugarId: string) {
    return{
      ...this.lugares.find(lugar =>{
        return lugar.id === lugarId
        })
    }
  }

  addLugar (title:string,imageURL:string) {
    this.lugares.push({
      title,
      imageURL,
      comentario:[],
      id: this.lugares.length + 1 + ""
    });
  }

  deleteLugar (lugarId:string) {
    this.lugares=this.lugares.filter(lugar=>{
      return lugar.id !== lugarId
    })
  }
}
