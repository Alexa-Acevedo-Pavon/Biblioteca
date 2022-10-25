import { Autor } from "./Autor";
export class Libro{
    public  id: number = 0;
    private Titulo:string = "";
    private Tipo:string = "";
    private Editorial:string = "";
    private Year: string = "";
    private autor:any=[]=[];


    constructor(Titulo:string,Tipo:string,Editorial:string,Year:string, Autor:any){
        
        this.Titulo=Titulo;
        this.Tipo=Tipo;
        this.Editorial=Editorial;
        this.Year=Year;
        this.id += 1; 
        this.autor.push(Autor);
    }

    public get_Titulo(): string{
        return this.Titulo;
    }

    public get_Tipo(): string{
        return this.Tipo;
    }

    public get_Editorial(): string{
        return this.Editorial;
    }

    public get_Year():string{
        return this.Year;
    }

    public set_Titulo(Titulo:string){
        this.Titulo=Titulo; 
    }

    public set_Tipo(Tipo:string){
        this.Tipo=Tipo;
    }

    public set_Editorial(Editorial:string){
        this.Editorial=Editorial;
    }

    public set_Year(Year:string){
        this.Year=Year;
    }
}