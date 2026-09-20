// caja.mjs
export const listaDePedidos = [];
export let totalAcumulado = 0;

export function agregarPedido(producto, precio) {
    listaDePedidos.push({ nombreAComprar: producto, costo: precio });
    totalAcumulado = totalAcumulado + precio;
    console.log("Se agregó " + producto + " de $" + precio);
}