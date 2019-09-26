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

//crear el primer mesero waiter
const waiter = () => {
  orders(6000, menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// Reto 1. Implementa una función randomTime que regrese un valor entre 1000 y 8000ms (investiga)
//crear mi funcion randomType
const randomType = (min = 1000, max = 8000) => {
   return Math.floor(Math.random() * (max-min) + min)
}

//  Reto 2. Crea una función llamada 'waiter2' que se encarge de recoger los pedidos de las mesas 1 y 3
//          (usando promesas y randomTime)
//crea segundo mesero waiter2
const waiter2 = () => {
  orders(randomType(), menu.hotdog, table[0])
  .then((res) => {
    console.log(res)
    return orders(randomType(), menu.pizza, table[2])
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
}

// Reto 3. Crea una función llamada 'waiter3' que se encargue de recoger el pedido de la mesa 2
//        Los platillos sólo pueden ser servidos cuando la orden esté completa.
//(usar async/await, randomType y manejo de errores)
//crea tercer mesero waiter3
const waiter3 = async () => {
  Promise.all([
    orders(randomType(), menu.pizza, table[1]),
    orders(randomType(), menu.hotdog, table[1]),
    orders(randomType(), menu.hamburger, table[1])
  ])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// Reto 4. (Opcional) Crea una función llamada 'fetchOrders' que realice un llamado a la API de ordenes
//         y una llamada 'waiter4' que se encargue de solicitar los 4 pedidos que deban ser entregados
//         hasta que estén todos listos.
const fetchOrders = () => {

}

//crear waiter4
const waiter4 = async () => {
  Promise.all([
    orders(randomType(), menu.hamburger, table[3]),
    orders(randomType(), menu.hotdog, table[3]),
    orders(randomType(), menu.pizza, table[3],
    orders(randomType(), menu.hotdog, table[3]))
  ])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}


waiter();
waiter2();
waiter3 ();
