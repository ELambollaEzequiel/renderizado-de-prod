const shopContent = document.getElementById("producto-content");

const printListaProducts = (arr) => {
  arr.forEach((producto) => {
    let content = document.createElement("div");
    //aca lo que hacemos es inyectarle a content (el div que creamos) , todos los elementos que necesitamos para mostrar nuestros productos
    content.innerHTML = `
        <div class="card " >
        <img src="https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?w=1380&t=st=1692649559~exp=1692650159~hmac=8770b71239435edc69af85f0c358a728df2e424e7935eb34be1983a85588cc39" class="card-img-top" alt="${producto.modelo}">
        <div class="card-body ">
          <h5 class="card-title modelo-prod" id="prod-modelo">${producto.modelo}</h5>
          <p class="card-text h-100 cantidad-prod" id="prod-descripcion">${producto.descripcion}</p>
          <span class="card-text precio-prod" id="precio-unit-prod">${producto.precio} $</span>
        <button id="${producto.id}" class="btn  btn-dark btn-add-cart"">add to cart</button>
        </div>
      </div>
`;
    content.className = "col product-cart "; // este es el contenedor que le vas a dar a la tarjeta , solos srve para que la clase de de product.-content funciones , no te ,mates entenciendolo
    shopContent.append(content); //aca le decimos que el div que creamos lo agrge a nuestro contenedor principal , al cual le asignamos la clase en la linea de arriba que hace que funciones (la que hace que funcione es la que dice col ---- la que viene despues es para que despues vos le puedas hacer cambios con css)
  });
};
printListaProducts(productos);
