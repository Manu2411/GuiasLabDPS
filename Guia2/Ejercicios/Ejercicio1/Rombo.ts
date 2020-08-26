class Rombo {
    DiagonalV: number;
    DiagonalH: number;
    Area: number;

    constructor(DiaV:number, DiaH:number){
        this.DiagonalV = DiaV;
        this.DiagonalH = DiaH;
    }

    CalculoArea() {
        this.Area = this.DiagonalV * this.DiagonalH;

        return this.Area;
    }
}

let rombo = new Rombo(4, 3.5);

rombo.CalculoArea();