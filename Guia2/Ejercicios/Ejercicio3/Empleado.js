var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.Nombre = nombre;
        this.Salario = salario;
    }
    Empleado.prototype.Descuentos = function () {
        this.AFP = this.Salario * 0.1;
        this.ISSS = this.Salario * 0.03;
        this.Pago_Total = this.Salario - (this.AFP + this.ISSS);
        return this.Pago_Total;
    };
    return Empleado;
}());
var trabajador = new Empleado("Juan", 385.89);
trabajador.Descuentos();
