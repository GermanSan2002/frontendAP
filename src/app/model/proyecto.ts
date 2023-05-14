export class Proyecto {
    id?: number;
    nombre: String;
    descripcion: string;
    linkDemo: string;
    linkCode: string;

    constructor(nombre: string, descipcion: string, linkDemo: string, linkCode: string) {
        this.nombre = nombre;
        this.descripcion = descipcion;
        this.linkCode = linkCode;
        this.linkDemo = linkDemo;
    }
}
