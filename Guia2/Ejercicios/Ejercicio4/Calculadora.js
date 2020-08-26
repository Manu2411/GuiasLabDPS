var Calculadora = /** @class */ (function () {
    function Calculadora(number1, number2) {
        this.Numero1 = number1;
        this.Numero2 = number2;
    }
    Calculadora.prototype.Suma = function () {
        var Ope_Suma;
        Ope_Suma = this.Numero1 + this.Numero2;
        alert("La suma de los números es: " + Ope_Suma);
    };
    Calculadora.prototype.Resta = function () {
        var Ope_Resta;
        Ope_Resta = this.Numero1 - this.Numero2;
        alert("La resta de los números es: " + Ope_Resta);
    };
    Calculadora.prototype.Multi = function () {
        var Ope_Multi;
        Ope_Multi = this.Numero1 * this.Numero2;
        alert("La multiplicación de los números es: " + Ope_Multi);
    };
    Calculadora.prototype.Divi = function () {
        var Ope_Divi;
        Ope_Divi = this.Numero1 / this.Numero2;
        alert("La División de los números es: " + Ope_Divi);
    };
    return Calculadora;
}());
var Operations = new Calculadora(3, 5);
Operations.Suma();
Operations.Resta();
Operations.Multi();
Operations.Divi();
