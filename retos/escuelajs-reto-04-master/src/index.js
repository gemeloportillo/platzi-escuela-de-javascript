//funcion de orden
const orders = (time, product, table) => {
  console.log(`### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
    }, time);
  });
}

//Reto semana 4 base
//arreglo de menu
const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

//arreglo de mesas
const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

//crear el primer mesero
const waiter = () => {
  orders(6000, menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

//crear mi funcion randomType
const randomType = (min = 1000, max = 8000) => {
   return Math.floor(Math.random() * (max-min) + min)
}

//crea segundo mesero
//crear funcion waiter2 que recoge los pedidos de las mesas 1 y 3
//usando promesas y randomTime
const waiter2 = () => {
  orders(randomType(), menu.hotdog, table[0])
  .then((res) => {
    console.log(res)
    return orders(randomType(), menu.pizza, table[2])
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
}

//crear waiter3
//recoger el pedido de la mesa 2. Servir los platillos cuando la orden esté completa
//usar async/await, randomType y manejo de errores
const waiter3 = async () => {
  Promise.all([
    orders(randomType(), menu.pizza, table[1]),
    orders(randomType(), menu.hotdog, table[1]),
    orders(randomType(), menu.hamburger, table[1])
  ])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};


/* async waiter3 = () => {
  var people = [1,2,3]
  var promesas = people.map()
} */

//waiter();
waiter3 ();
