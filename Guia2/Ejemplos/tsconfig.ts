Function color(value :string){ // Así definimos el decorator
    Fabric return function(target){
        // Este es el decorator, prácticamente regresamos una función con la funcionalidad, se
        // pide el objetivo.

        // Aquí es donde modificamos el objetivo con el valor pedido desde el decorator
    }
}

    class Greeter{
        greeting: string;
        constructor(message: string){
            this.greeting = message;
        }

        @enumerable(false)
        greet(){
            return "Hey, " + this.greeting;

            // return
        }
    }

    functionenumerable(value: boolean){
        returnfunction (target: any, propertyKey: string, descriptor: PropertyDescriptor){
            descriptor.enumerable = value;
        };
    }

    let gree = new Greeter("Soy el mensaje");

    Console.log(gree.greet());

    {
        "compilerOptions":{
            "target":"ES5",
        // Definir en que versión de JS nos gustaría convertir el .ts "experimentalDecorators":true,
        // Activar funciones experimentales, en este caso decorators

            "module":"system", // Usar el modulo system
            "noImplicitAny":true, // Habilitar el uso de implicitos Any
            "removeComments":true, // Remover todos los comentarios en nuestros archivos
            "preserveConstEnums":true, // Manejar los enumerables como constantes, esto es muy recomendado
            "OutFile":"./tsc.js", // Donde vamos a tener el archivo resultante
            "sourceMap":true // Para ver un log de la transpilación 
        },

        "include":[
            "*" // Ver que archivos vamos a compilar, usar * indica que serán todos
        ]
        "exclude":[
            "node_modules" //Agregar los archivos que no queremos incluir en la transpilación "**/* .spec.ts"
        ]
}