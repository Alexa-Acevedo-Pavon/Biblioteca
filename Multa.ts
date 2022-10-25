export class Multa{
    private Fecha_inicio:number=0;
    private Fecha_fin:number=0;

    constructor(Fecha_inicio:number,Fecha_fin:number){
        this.Fecha_inicio=Fecha_inicio;
        this.Fecha_fin=Fecha_fin;
    }

    public get_Fecha_inicio():number{
        return this.Fecha_inicio;
    }
    
    public get_Fecha_fin():number{
        return this.Fecha_fin;
    }

    public set_Fecha_inicio(Fecha_inicio:number){
        this.Fecha_inicio=Fecha_inicio;
    }

    public set_Fecha_fin(Fecha_fin:number){
        this.Fecha_fin=Fecha_fin;
    }
}