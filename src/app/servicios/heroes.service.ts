
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "Whisky",
          bio: "es una bebida alcohólica obtenida por la destilación de la malta fermentada de cereales como cebada, trigo, centeno y maíz, y su posterior envejecimiento en barriles de madera, tradicionalmente de roble.",
          img: "assets/img/t1.jpg",
          aparicion: "1941-11-01",
          casa:"Johnnie Walker"
        },
        {
          nombre: "Vodka",
          bio: "es una bebida destilada. Se discute el origen de la misma aunque el nombre actual es ruso. Se produce generalmente a través de la fermentación de granos y otras plantas ricas en almidón, como el centeno, trigo, o patata.",
          img: "assets/img/tt2.jpg",
          aparicion: "1939-05-01",
          casa:"Absolut Vodka"
        },
        {
          nombre: "Vino",
          bio: "El vino, tal como se conoce hoy en día, es una bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras presentes en el hollejo de las uvas. ",
          img: "assets/img/tt3.jpeg",
          aparicion: "1892-03-07",
          casa: "Nacional"
        },
        {
          nombre: "Ron",
          bio: "El ron es una bebida alcohólica, elaborada a partir de la caña de azúcar o de melazas por fermentación. A continuación, el producto es destilado a altas temperaturas usando alambiques de cobre o de acero inoxidable para obtener un alto contenido de etanol.",
          img: "assets/img/tt4.jpg",
          aparicion: "1862-05-01",
          casa: "Abuela"
        },
        {
          nombre: "Fernet",
          bio: "El fernet es una bebida alcohólica amarga del tipo amaro elaborada a partir de varios tipos de hierbas mirra, ruibarbo, manzanilla, cardamomo, orégano y azafrán,​ entre otras, que son maceradas en alcohol de vino,",
          img: "assets/img/tt5.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "jägermeister",
          bio: "jägermeister es un licor amargo endulzado con base en hierbas el cual tiene 35% de contenido alcohólico. Se elabora con hierbas y es muy popular en Baja Sajonia en la ciudad de Wolfenbüttel.",
          img: "assets/img/tt6.jpg",
          aparicion: "1962-08-01",
          casa: "jägermeister"
        },
        {
          nombre: "Tequilla",
          bio: "El tequilla es una bebida alcohólica obtenida del destilado, originaria en Tequila en el estado de Jalisco, México. Se elabora a partir de la fermentación y destilado al igual que el mezcal, el cual también tiene su origen en Jalisco, jugo extraído del agave,",
          img: "assets/img/tt7.jpg",
          aparicion: "1874-11-01",
          casa: "cuervo"
        }
      ];
    
    
    constructor(){
        console.log("Servicio listo para usarse!!!!");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
};