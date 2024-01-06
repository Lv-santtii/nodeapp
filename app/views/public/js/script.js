//Zapatillas
const productos = [
  //Calzado
  { id: 1, nombre: 'Zapatillas Flow Velocity para hombre', precio: 72499 },
  { id: 2, nombre: 'Zapatillas Project Rock 4 para hombre', precio: 59999 },
  { id: 3, nombre: 'Zapatillas HOVR™ Rise 3', precio: 53999 },
  { id: 4, nombre: 'Zapatillas UA Flow Velociti Wind 2', precio: 101999 },
  { id: 5, nombre: 'Zapatillas de running UA HOVR Sonic 6', precio: 59499 },
  { id: 6, nombre: 'Zapatillas running UA HOVR Phantom 3', precio: 139499 },
  { id: 7, nombre: 'Zapatillas HOVR PHANTOM 2', precio: 62999 },
  { id: 8, nombre: 'Zapatillas UA Flow Synchronicity', precio: 54799 },
  { id: 9, nombre: 'Zapatillas de Baketball UA Jet 21', precio: 109999 },
  { id: 10, nombre: 'Zapatillas UA Charged Engage', precio: 59949 },
  { id: 11, nombre: 'Zapatillas UA HOVR™ Phantom 3', precio: 129999 },
  { id: 12, nombre: 'Zapatillas CURRY FLOW 10 SPLASH PARTY', precio: 199999 },
  { id: 45, nombre: 'Zapatillas Project Rock 5', precio: 109999 },
  { id: 46, nombre: 'Zapatillas de running UA HOVR MACHINA', precio: 134999 },
  { id: 47, nombre: 'Botines UA Magnetico Select 2.0', precio: 59999 },
  { id: 48, nombre: 'Botines UA Magnetico Select 2.0', precio: 59999 },
  { id: 49, nombre: 'Zapatillas UA HOVR™ Phantom', precio: 63999 },
  { id: 50, nombre: 'Zapatilla UA HOVR™ Phantom', precio: 72999.25 },
  { id: 51, nombre: 'Zapatillas de running UA Flow Velociti', precio: 101999 },
  { id: 52, nombre: 'Zapatillas de entrenamiento UA Project', precio: 69999 },
  { id: 15, nombre: 'Zapatillas Bandit Trek 2 Print', precio: 99999 },
  //Indumentaria
  { id: 13, nombre: 'Buzo con capucha Rival Fleece nena', precio: 16499 },
  { id: 14, nombre: 'Remera de entrenamiento Foundation', precio: 17999 },
  { id: 16, nombre: 'Hoodie UA Rival Fleece mujer', precio: 22499 },
  { id: 17, nombre: 'Chomba UA Playoff Camo Jacquard', precio: 22499 },
  { id: 18, nombre: 'Buzo Project Rock Knit Track', precio: 51749 },
  { id: 19, nombre: 'Buzo con capucha UA Rival Fleece Logo', precio: 37999 },
  { id: 20, nombre: 'Musculosa UA Fly-By para mujer', precio: 25999 },
  { id: 21, nombre: 'Remera Under Armour GL Foundation', precio: 17999.25 },
  { id: 22, nombre: 'Remera UA OD MTN SEA para hombre', precio: 20999 },
  { id: 23, nombre: 'Remera UA CURRY Sour Then Sweet', precio: 39999 },
  { id: 24, nombre: 'Remera de entrenamiento UA BLOOM', precio: 23999 },
  { id: 25, nombre: 'Remera de Basket UA CURRY IRON BOX LOGO', precio: 22499.25 },
  { id: 26, nombre: 'Remera de Basketball UA ENTER AT YOUR OWN RISK', precio: 20999.25 },
  { id: 27, nombre: 'Remera UA PJT ROCK Q3 PAYOFF', precio: 15599 },
  { id: 28, nombre: 'Remera de entrenamiento UA ABC CAMO SS', precio: 23999 },
  { id: 29, nombre: 'Buzo Project Rock Heavyweight Terry Full-Zip', precio: 53999 },
  { id: 30, nombre: 'Buzo de tejido Fleece UA Rival', precio: 39799 },
  { id: 31, nombre: 'Buzo UA Rival Fleece Oversized', precio: 32999 },
  { id: 32, nombre: 'Hoodie UA Rival Fleece mujer', precio: 22999 },
  { id: 33, nombre: 'Pants Project Rock Heavyweight Terry', precio: 46799 },
  { id: 34, nombre: 'Short de Basket Curry Fleece 9', precio: 41999 },
  { id: 35, nombre: 'UA Accelerate Joggers', precio: 22999 },
  { id: 36, nombre: 'Pantalones UA Drive para Hombre', precio: 68999 },
  { id: 37, nombre: 'Pantalones UA Drive para Hombre', precio: 68999 },
  { id: 38, nombre: 'Short Project Rock Terry Brahma Bul', precio: 40999 },
  { id: 39, nombre: 'Short UA Rival Fleece Sport Palm', precio: 20999 },
  { id: 40, nombre: 'Shorts UA Rival Terry', precio: 29999 },
  { id: 41, nombre: 'Short de Golf UA Linksr', precio: 56999 },
  { id: 42, nombre: 'Pantalón UA Armour Sport Wovenr', precio: 31999 },
  { id: 43, nombre: 'Short UA Fly By 2.0 para mujer', precio: 31999 },
  { id: 44, nombre: 'Short UA Fly By Anywhere', precio: 27999 },
  //Accesorios
  { id: 53, nombre: 'Mochila UA Loudon Unisex', precio: 69999 },
  { id: 54, nombre: 'Guante de Golf UA Iso-Chill', precio: 27999 },
  { id: 55, nombre: 'Guante de Golf UA Iso-Chill', precio: 29999 },
  { id: 56, nombre: 'Gorra UA Blitzing Trucker', precio: 19999 },
  { id: 57, nombre: 'Muñequeras UA Performance', precio: 9999 },
  { id: 58, nombre: 'Mochila Under Armour Hustle Sport', precio: 44499 },
  { id: 59, nombre: 'Mochila Under Armour Hustle Sport', precio: 44499 },
  { id: 60, nombre: 'Bolso UA Favorite para Mujer', precio: 29999 },
  { id: 61, nombre: 'UA Mini Bandas para la cabeza', precio: 10999 },
  { id: 62, nombre: 'Medias Heatgear Invisibles Unisex', precio: 8499 },
  { id: 63, nombre: 'Gorra UA Branded para Hombre', precio: 20499 },
  { id: 64, nombre: 'Visera UA Golf96 para Hombre', precio: 21999 },
  { id: 65, nombre: 'Buzo de tejido Fleece UA Rival', precio: 39799 },
  { id: 66, nombre: 'Mochila tote UA Essentials', precio: 69999 },
  { id: 67, nombre: 'Riñonera de running UA Flex', precio: 19999 },
  { id: 68, nombre: 'Guante Under Armour Light Training', precio: 69999 },
];

const carrito = [];



function agregarAlCarrito(productoId) {
  const productoSeleccionado = productos.find(producto => producto.id === productoId);

  if (productoSeleccionado) {
    carrito.push({ ...productoSeleccionado, cantidad: 1 });
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const carritoContainer = document.getElementById('lista-carrito');
  const totalContainer = document.getElementById('total');
  carritoContainer.innerHTML = '';

  let total = 0;

  carrito.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)}`;
    carritoContainer.appendChild(listItem);

    total += item.precio;
  });

  totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
}

function vaciarCarrito() {
  carrito.length = 0;
  actualizarCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarCarrito();
});

function toggleCarrito() {
  const carritoContainer = document.getElementById('carrito');
  carritoContainer.classList.toggle('abierto');
}

function actualizarCarrito() {
  const carritoContainer = document.getElementById('lista-carrito');
  const totalContainer = document.getElementById('total');
  carritoContainer.innerHTML = '';

  let total = 0;

  carrito.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)}`;
    carritoContainer.appendChild(listItem);

    total += item.precio;
  });

  totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
}

function vaciarCarrito() {
  carrito.length = 0;
  actualizarCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();
  actualizarCarrito();

  const abrirCarritoBtn = document.getElementById('abrir-carrito');
  abrirCarritoBtn.addEventListener('click', toggleCarrito);
});
function abrirCarrito() {
  const carritoContainer = document.getElementById('carrito');
  carritoContainer.style.transform = 'translateX(0)';
}

function cerrarCarrito() {
  const carritoContainer = document.getElementById('carrito');
  carritoContainer.style.transform = 'translateX(100%)';
}

function agregarAlCarrito(productoId) {
  const productoSeleccionado = productos.find(producto => producto.id === productoId);

  if (productoSeleccionado) {
    carrito.push({ ...productoSeleccionado, cantidad: 1 });
    actualizarCarrito();
    abrirCarrito();
  }
}
let carritoAbierto = false;

function toggleCarrito() {
  const carritoContainer = document.getElementById('carrito');
  carritoAbierto = !carritoAbierto;

  if (carritoAbierto) {
    carritoContainer.style.transform = 'translateX(0)';
  } else {
    carritoContainer.style.transform = 'translateX(100%)';
  }
}

function agregarAlCarrito(productoId) {
  const productoSeleccionado = productos.find(producto => producto.id === productoId);

  if (productoSeleccionado) {
      const productoEnCarrito = carrito.find(item => item.id === productoId);

      if (productoEnCarrito) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          productoEnCarrito.cantidad++;
      } else {
          // Si el producto no está en el carrito, agrégalo
          carrito.push({ ...productoSeleccionado, cantidad: 1 });
      }

      // Actualiza el carrito en la interfaz
      actualizarCarrito();
      abrirCarrito();
  }
}

function actualizarCarrito() {
  const carritoContainer = document.getElementById('lista-carrito');
  const totalContainer = document.getElementById('total');
  carritoContainer.innerHTML = '';

  let total = 0;

  carrito.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          ${item.nombre} - $${item.precio.toFixed(2)} (x${item.cantidad} unidad/es)
          <button class="eliminar-producto"><i class='bx bx-x'></i></button>
      `;
      carritoContainer.appendChild(listItem);

      total += item.precio * item.cantidad;
  });

  totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;

  // Agrega un event listener para los nuevos botones de eliminar
  const botonesEliminar = document.querySelectorAll(".eliminar-producto");
  botonesEliminar.forEach(boton => {
      boton.addEventListener("click", function () {
          eliminarProducto(this); // Pasa el botón como referencia para identificar el producto
      });
  });
}

function eliminarProducto(boton) {
  // Encuentra el elemento padre (li) del botón y obtén su contenido
  const nombreProducto = boton.parentElement.textContent.trim();

  // Encuentra el producto correspondiente en el carrito y actualiza la cantidad o elimínalo
  const productoEnCarrito = carrito.find(item => nombreProducto.startsWith(item.nombre));
  
  if (productoEnCarrito) {
      // Si hay más de uno del mismo producto, decrementa la cantidad
      if (productoEnCarrito.cantidad > 1) {
          productoEnCarrito.cantidad--;
      } else {
          // Si solo hay uno, elimina el producto del carrito
          const index = carrito.indexOf(productoEnCarrito);
          carrito.splice(index, 1);
      }

      // Actualiza el carrito en la interfaz
      actualizarCarrito();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // Obtenemos los elementos del DOM
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // Ocultar el formulario de inicio de sesión, registro y el botón de cerrar sesión al cargar la página
  loginForm.style.display = 'none';
  registerForm.style.display = 'none';
  logoutBtn.style.display = 'none';

  // Mostrar el formulario de inicio de sesión al hacer clic en el botón "Iniciar Sesión"
  loginBtn.addEventListener('click', function () {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
  });

  // Mostrar el formulario de registro al hacer clic en el botón "Registrarse"
  registerBtn.addEventListener('click', function () {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
  });

  // Lógica de cierre de sesión al hacer clic en el botón "Cerrar Sesión"
  logoutBtn.addEventListener('click', function () {
    // Aquí puedes agregar la lógica real para cerrar sesión (limpiar cookies, etc.)
    alert('Sesión cerrada');
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'flex';
    registerBtn.style.display = 'flex';
  });
});

function cerrarMenus() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'none';
}

document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  try {
    // Realizar la petición AJAX para enviar el formulario
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newUsername: document.getElementById('newUsername').value,
        newPassword: document.getElementById('newPassword').value,
        email: document.getElementById('email').value,
      }),
    });

    // Verificar la respuesta del servidor
    const data = await response.json();
    if (response.ok) {
      // Si la respuesta es exitosa, mostrar un simple alert y cambiar la interfaz
      alert('Registro exitoso');
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('logoutBtn').style.display = 'flex';
      document.getElementById('loginBtn').style.display = 'none';
      document.getElementById('registerBtn').style.display = 'none';
    } else {
      // Mostrar el mensaje de error en un alert
      alert(data.error);
      // También puedes manejar más lógica aquí según tus necesidades
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
  }
});
document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  try {
    // Realizar la petición AJAX para iniciar sesión
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      }),
    });

    // Verificar la respuesta del servidor
    const data = await response.json();
    if (response.ok) {
      // Si la respuesta es exitosa, mostrar un simple alert y cambiar la interfaz
      alert(data.message);
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('logoutBtn').style.display = 'flex';
      document.getElementById('loginBtn').style.display = 'none';
      document.getElementById('registerBtn').style.display = 'none';
    } else {
      // Mostrar el mensaje de error en un alert
      alert(data.error);
      // También puedes manejar más lógica aquí según tus necesidades
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
  }
});