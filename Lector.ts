export class Lector{
    private No_socio:string="";
    private Nombre:string="";
    private Telefono:string="";
    private Direccion:string="";
    private Tc:string="";

    constructor(No_socio:string, Nombre:string, Telefono:string,Direccion:string,Tc: string){
        this.No_socio=No_socio;
        this.Nombre=Nombre;
        this.Telefono=Telefono;
        this.Direccion=Direccion;
        this.Tc=Tc;
    }

    public get_No_socio():string{
        return this.No_socio;
    }

    public get_Nombre():string{
        return this.Nombre;
    }

    public get_Telefono():string{
        return this.Telefono;
    }

    public get_Direccion():string{
        return this.Direccion;
    }

    public get_Tc():string{
        return this.Tc;
    }

    public set_No_socio(No_socio:string){
        this.No_socio=No_socio;
    }

    public set_Nombre(Nombre:string){
        this.Nombre=Nombre;
    }
     
    public set_Telefono(Telefono:string){
        this.Telefono=Telefono;
    }

    public set_Direccion(Direccion:string){
        this.Direccion=Direccion;
    }

    public set_Tc(Tc:string){
        this.Tc=Tc;
    }
    public multar(multar:string):string{
        return multar;
    }
    public devolver(devolver:string):string{
        return devolver;
    }
    public prestar(prestar:string):string{
        return prestar;
    }
}