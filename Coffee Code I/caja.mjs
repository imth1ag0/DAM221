// caja.mjs

export const listaDePedidos = [];

// Función para agregar pedidos al ticket
export function agregarPedido(producto, precio) {
    listaDePedidos.push({ nombreAComprar: producto, costo: precio });
    console.log(`Se agregó ${producto} de $${precio}`);
}

// OBTENER SUBTOTAL: Usa reduce() para sumar los costos acumulados
export function calcularSubtotal() {
    return listaDePedidos.reduce((acumulado, item) => acumulado + item.costo, 0);
}

// OBTENER IVA: Aplica el 16% sobre el subtotal
export function calcularIVA() {
    const subtotal = calcularSubtotal();
    return subtotal * 0.16;
}

// OBTENER TOTAL AUTOMÁTICO: Subtotal + IVA (o Subtotal * 1.16)
export function calcularTotal() {
    const subtotal = calcularSubtotal();
    const iva = calcularIVA();
    return subtotal + iva;
}