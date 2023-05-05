export class Experiencia {
    id?: number;
    nombreE: String;
    empresaE: String;
    descripcionE: String;
    inicioE: String;
    finalE: String;

    constructor(nombreE: String, empresaE: String, descripcionE: String, inicioE: String, finalE: String) {
        this.nombreE = nombreE;
        this.empresaE = empresaE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finalE = finalE;
    }
}
