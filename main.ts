import {Lector} from "./Lector";import {Copia} from "./Copia";import {Autor} from "./Autor";import {Libro} from "./Libro";
let java = new Libro("Java afondo","PRORAMACION","TRILLAS","1995","Deitel");
let Juan = new Lector("1205","JUAN","20728590","CALLE OLMO","2894 7754 4973 7940");
let Pedro = new Lector("1452","Pero vera","285828942","OLCENA 237","4756  82933 7957 1033");
let copia = new Copia("10/10/222",53803,"Reciente","Java afondo");
copia.agregarcopia(10,java,Juan);
copia.agregarcopia(7,java,Pedro);
console.log(copia.listacopia());


