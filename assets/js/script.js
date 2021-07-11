//Capturar elemento del html
let formulario = document.querySelector('form');
let resultado = document.querySelector('#resultado');


//Funcion que imprime los datos del propietario y mascota
let tipoDeAnimal = (event) => {
    event.preventDefault();
    let nombrePropietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombre = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    
    //validacion si el tipo es igual a gato, perro o conejo
    if (tipo == 'gato') {
        let gato = new Mascota(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad);
        gato.tipo = tipo;
        resultado.innerHTML = `<li>${gato.datosPropietario()}</li> <br> <li> ${gato.mostrarTipo()}, mientras que el nombre de la mascota es: ${gato.nombre} y la enfermedad es: ${gato.enfermedad}</li>`
        
    } else if (tipo == 'perro') {
        let perro = new Mascota(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad);
        perro.tipo = tipo;
        resultado.innerHTML = `<li>${perro.datosPropietario()}</li> <br> <li> ${perro.mostrarTipo()}, mientras que el nombre de la mascota es: ${perro.nombre} y la enfermedad es: ${perro.enfermedad} </li>`
    } else if (tipo == 'conejo') {
        let conejo = new Mascota(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad);
        conejo.tipo = tipo;
        resultado.innerHTML = `<li>${conejo.datosPropietario()}</li> <br> <li>${conejo.mostrarTipo()}, mientras que el nombre de la mascota es: ${conejo.nombre} y la enfermedad es: ${conejo.enfermedad}</li>`
    }
    formulario.reset();
}
//llamar a el evento submit y ejecuta la funcion
formulario.addEventListener('submit', tipoDeAnimal);

//Clase padre
class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this.nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;

    }
    //metodo que retorna informacion del propietario 
    datosPropietario() {
        return `El nombre del dueño es: ${this.nombrePropietario}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

//clase animal que hereda de propietario
class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(newTipo) {
        this._tipo = newTipo;
    }
    // metodo que retorna que tipo de animal es
    mostrarTipo() {
        return (`El tipo de animal es un: ${this.tipo}`);
    }
}

//clase mascota que hereda de clase propietario y clase animal
class Mascota extends Animal {
    constructor(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad) {
        super(nombrePropietario, direccion, telefono, tipo);
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }
    get nombre() {
        return this._nombre;
    }

    set nombre(newNombre) {
        this._nombre = newNombre;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(newEnfermedad) {
        this._enfermedad = newEnfermedad;
    }
}