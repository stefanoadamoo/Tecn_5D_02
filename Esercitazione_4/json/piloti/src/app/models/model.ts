export class Italiani {
    public nome: string;
    public altezza: number;
    public peso: number;
    public squadra: string;
    public pathImmagine:string;
    
    constructor(nome: string, altezza: number, peso: number, squadra: string, pathImmagine:string) {
        this.nome = nome;
        this.altezza = altezza;
        this.peso = peso;
        this.squadra = squadra;
        this.pathImmagine=pathImmagine;
    }
}

export class Spagnoli {
    public nome: string;
    public altezza: number;
    public peso: number;
    public squadra: string;
    public pathImmagine:string;

    constructor(nome: string, altezza: number, peso: number, squadra: string,pathImmagine:string) {
        this.nome = nome;
        this.altezza = altezza;
        this.peso = peso;
        this.squadra = squadra;
        this.pathImmagine=pathImmagine;
    }
}
   
export class Francesi {
    public nome: string;
    public altezza: number;
    public peso: number;
    public squadra: string;
    public pathImmagine:string;

    constructor(nome: string, altezza: number, peso: number, squadra: string,pathImmagine) {
        this.nome = nome;
        this.altezza = altezza;
        this.peso = peso;
        this.squadra = squadra;
        this.pathImmagine=pathImmagine;
    }
}