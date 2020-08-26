class Calculadora {
    Numero1: number;
    Numero2: number;

    constructor(number1: number, number2: number){
        this.Numero1 = number1;
        this.Numero2 = number2;
    }


    Suma(){
        var Ope_Suma: number;

        Ope_Suma = this.Numero1 + this.Numero2;

        alert("La suma de los números es: " + Ope_Suma);
    }

    Resta(){
        var Ope_Resta: number;

        Ope_Resta = this.Numero1 - this.Numero2;

        alert("La resta de los números es: " + Ope_Resta);
    }

    Multi(){
        var Ope_Multi: number;

        Ope_Multi = this.Numero1 * this.Numero2;

        alert("La multiplicación de los números es: " + Ope_Multi);
    }

    Divi(){
        var Ope_Divi: number;

        Ope_Divi = this.Numero1 / this.Numero2;

        alert("La División de los números es: " + Ope_Divi);
    }
}

let Operations = new Calculadora(3, 5);


Operations.Suma();

Operations.Resta();

Operations.Multi();

Operations.Divi();