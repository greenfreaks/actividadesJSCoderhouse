
class Productos{
    constructor(nombre, marca, categoria, precio, stock){
      this.nombre = nombre;
      this.marca = marca;
      this.categoria = categoria;
      this.precio = precio;
      this.stock = stock;
      this.disponible = true;
      this.productos = [];
    }
    addProduct(){
      this.productos.push(this.nombre, this.marca, this.categoria, this.precio, this.stock);
      if(this.stock === 0){
        this.disponible = false;
      }
      alert("Nombre del Producto: " + this.productos[0] + "\n" +
            "Marca del Producto: " + this.productos[1] + "\n" +
            "Categoría del Producto: " + this.productos[2] + "\n" +
            "Precio del Producto: " + this.productos[3] + "\n" +  
            "Stock del Producto: " + this.productos[4] + "\n" +
            "Producto disponible: " + this.disponible);
    }
  
  /* 
  * Quise agregarle este método adicional, pero no logré recorrer el array para imprimir el recorrido de todos los elemtos del arreglo, pero no me salió,   me da un error muy raro:
  * Se supone que quiero mostrar todo el contenido de mi array, pero por ejemplo, al ejecutar mi código, lo primero que me pide es ingresar el nombre de mi producto, y si escribo la palabra PLAYERA, la consola me arroja lo siguiente:
      P
      L
      A
      Y
      E
      R
      A
  * Después me arroja puros UNDEFINED
  */
  showProducts(){
   //let arrayProductos = this.productos;
   for(const prod of this.productos){
     console.log(prod[0]);
     console.log(prod[1]);
     console.log(prod[2]);
     console.log(prod[4]);
     console.log(prod[5]);
   }
  }
}
const cantidad = parseInt(prompt("¿Cuántos productos deseas registrar?"))
let add;
for(i = 1; i <= cantidad; i++){
   add = new Productos(prompt("Nombre del producto" + " " + i), 
                          prompt("Marca del producto" + " " + i) , 
                          prompt("Categoría del Producto" + " " + i), 
                          parseFloat(prompt("Precio del producto" + " " + i)),
                          parseInt(prompt("¿Cuántos stock tienes disponible del producto?" + " " + i)));
  add.addProduct();
}
add.showProducts();



