
export const inventarioCocina = [
    { id: 1, nombre: "Café Americano", categoria: "Bebidas", precio: 45, disponible: true },
    { id: 2, nombre: "Capuchino", categoria: "Bebidas", precio: 55, disponible: true },
    { id: 3, nombre: "Croissant", categoria: "Repostería", precio: 40, disponible: true }
];


// AGREGAR
export function agregarProducto(nuevoProducto) {
    inventarioCocina.push(nuevoProducto);
    console.log(`[Cocina]: Producto "${nuevoProducto.nombre}" agregado.`);
}

// EDITAR
export function editarProducto(id, nuevosDatos) {
    const producto = inventarioCocina.find(item => item.id === id);
    if (producto) {
        Object.assign(producto, nuevosDatos);
        console.log(`[Cocina]: Producto ID ${id} actualizado.`);
    } else {
        console.warn(`[Cocina]: Producto ID ${id} no encontrado.`);
    }
}

// ELIMINAR
export function eliminarProducto(id) {
    const indice = inventarioCocina.findIndex(item => item.id === id);
    if (indice !== -1) {
        const eliminado = inventarioCocina.splice(indice, 1);
        console.log(`[Cocina]: Producto "${eliminado[0].nombre}" eliminado.`);
    } else {
        console.warn(`[Cocina]: Producto ID ${id} no encontrado.`);
    }
}

// OBTENER PRODUCTOS
export function obtenerProductos() {
    return inventarioCocina;
}