class Singleton {
	static instancia;
	nombre = "";
	constructor(nombre = "") {
		// !undefined = true | !!undefinded = !true = false
		if (!!Singleton.instancia) {
			return Singleton.instancia;
		}
		Singleton.instancia = this;
		this.nombre = nombre;

		return this;

	}
}

const instancia1 = new Singleton("ironman");
const instancia2 = new Singleton("spiderman");


console.log(`El nombre de la instacia 1 es: ${instancia1.nombre}`);
console.log(`El nombre de la instacia 1 es: ${instancia2.nombre}`);
