import { Libro } from "./Libro";
import{ Lector} from "./Lector";
export class Copia{
    private fecha : string;
    private id:number = 0;
    private Estado:string="";
    private libro : any[]=[];

    constructor(fecha:string,id:number, Estado:string, libro :any){
        this.fecha=fecha;
        this.id=id;
        this.Estado=Estado
    }

    public get_id():number{
        return this.id;
    }

    public get_Estado():string{
        return this.Estado;
    }

    public set_id(id:number){
        this.id=id;
    }

    public set_Estado(Estado:string){
        this.Estado=Estado;
    }
    public listacopia(){
        console.log(this.libro);
    }
    public agregarcopia(nocopias:number,libro:Libro,lector:Lector) {
        this.id++;
        let Registro ={
            Registro:this.id,
            Lector:lector,
            NumCopias:nocopias,
            Estado:"proceso",
            libro:libro
        };
        this.libro.push(Registro);

    }
}