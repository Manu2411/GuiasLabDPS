var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Function;
color(value, string);
{ // Así definimos el decorator
    Fabric;
    return function (target) {
        // Este es el decorator, prácticamente regresamos una función con la funcionalidad, se
        // pide el objetivo.
        // Aquí es donde modificamos el objetivo con el valor pedido desde el decorator
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hey, " + this.greeting;
        // return
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet");
    return Greeter;
}());
functionenumerable(value, boolean);
{
    returnfunction(target, any, propertyKey, string, descriptor, PropertyDescriptor);
    {
        descriptor.enumerable = value;
    }
    ;
}
var gree = new Greeter("Soy el mensaje");
Console.log(gree.greet());
{
    "compilerOptions";
    {
        "target";
        "ES5",
            // Definir en que versión de JS nos gustaría convertir el .ts "experimentalDecorators":true,
            // Activar funciones experimentales, en este caso decorators
            "module";
        "system", // Usar el modulo system
            "noImplicitAny";
        true, // Habilitar el uso de implicitos Any
            "removeComments";
        true, // Remover todos los comentarios en nuestros archivos
            "preserveConstEnums";
        true, // Manejar los enumerables como constantes, esto es muy recomendado
            "OutFile";
        "./tsc.js", // Donde vamos a tener el archivo resultante
            "sourceMap";
        true; // Para ver un log de la transpilación 
    }
    "include";
    [
        "*" // Ver que archivos vamos a compilar, usar * indica que serán todos
    ],
        "exclude";
    [
        "node_modules" //Agregar los archivos que no queremos incluir en la transpilación "**/* .spec.ts"
    ];
}
