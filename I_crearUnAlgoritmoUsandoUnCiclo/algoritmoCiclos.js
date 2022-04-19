function Personaje(nombre, poder, frase, vivo){
    this.nombre = nombre;
    this.poder = poder;
    this.frase = frase;
    this.vivo = vivo;
}

const naruto = new Personaje("Naruto", "Jutsu Evangelización", "¿Sabes? yo solía ser como tú", true);
const itachi = new Personaje("Itachi", "Amaterasu", "Te falta Odio Sasuki", false);
const kakashi = new Personaje("Kakashi", "Chidori", "Los que rompen las reglas son basura, pero los que abandonan a sus compañeros son peor que basura", true);
const sakura = new Personaje("Sakura", "Invocar a Naruto", "Narutoooo :´v", true)
const sasuke = new Personaje("Sasuke", "Sharingan", "Mi objetivo es matar a cierta persona", true);

const ninjas = [naruto, itachi, kakashi, sakura, sasuke];

for(i = 1; i < ninjas.length; i++){
    console.log(ninjas[i]);
}
