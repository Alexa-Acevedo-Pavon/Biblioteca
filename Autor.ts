export class Autor{
   private Nombre:string = "";
   private Nacionalidad:string = "";
   private Fecha_nac:string= "";

   constructor(Nombre: string, Nacionalidad: string, Fecha_nac: string)
   {
     this.Nombre = Nombre;
     this.Nacionalidad = Nacionalidad;
     this.Fecha_nac = Fecha_nac;

   }

   public get_Nombre(): string{
     return this.Nombre;
   }

   public get_Nacionalidad(): string{
     return this.Nacionalidad;
   }

   public get_Fecha_nac(): string{
     return this.Fecha_nac;
   }

   public set_Nombre(Nombre:string){
     this.Nombre= Nombre;
   }

   public set_Nacionalidad(Nacionalidad:string){
     this.Nacionalidad= Nacionalidad;
   }

   public set_Fecha_nac(Fecha_nac: string){
     this.Fecha_nac= Fecha_nac;
   }

}