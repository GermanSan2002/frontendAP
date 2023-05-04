export class Estudio {
    id?: number;
    nombreE: String;
    institucionE: String;
    descripcionE: String;
    inicioE: String;
    finalE: String;

    constructor(nombreE: String, institucionE: String, descripcionE: String, inicioE: String, finalE: String) {
        this.nombreE = nombreE;
        this.institucionE = institucionE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finalE = finalE;
    }
}
