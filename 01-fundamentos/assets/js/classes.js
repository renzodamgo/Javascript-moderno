class Persona {
	nombre = '';
	codigo = '';
	frase = '';
	constructor(nombre, codigo, frase) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.frase = frase;
	}

	decirFrase() {
		console.log(this.frase);
	}
}

const spiderman = new Persona("Peter Parker", "spiderman", "Soy tu amigable vecino ironman");

// console.log(spiderman);

class Heroe extends Persona {
	clan = 'sin clan';

	constructor(nombre, codigo, frase, clan) {
		super(nombre, codigo, frase);
		this.clan = clan;
	}

}

const ironman = new Heroe("Tony", "Ironman", "Soy ironman", "Avengers");
ironman.decirFrase();