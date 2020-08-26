class Empleado {
    Nombre: string;
    Salario: number;
    Pago_Total: number;
    AFP: number;
    ISSS: number;

    constructor(nombre: string, salario: number) {
        this.Nombre = nombre;
        this.Salario = salario;
    }

    Descuentos() {

        this.AFP = this.Salario * 0.1;
        this.ISSS = this.Salario * 0.03;

        this.Pago_Total = this.Salario - (this.AFP + this.ISSS);

        return this.Pago_Total;
    }
}


let trabajador = new Empleado("Juan", 385.89);

trabajador.Descuentos();