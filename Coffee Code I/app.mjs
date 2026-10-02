// app.mjs (Interfaz Intuitiva y Completa)

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { 
    inventarioCocina, 
    buscarProductosBaratos, 
    buscarProductosCaros, 
    buscarBebidas, 
    buscarPostres 
} from './cocina.mjs';
import { 
    agregarPedido, 
    listaDePedidos, 
    calcularSubtotal, 
    calcularIVA, 
    calcularTotal 
} from './caja.mjs';

const rl = readline.createInterface({ input, output });

// Función para imprimir listas de forma bonita y estructurada
function mostrarMenuElegante(productos, titulo = "MENÚ DEL DÍA") {
    console.log(`\n==============================================================`);
    console.log(`                 ☕ COFFEE CODE II - ${titulo} ☕`);
    console.log(`==============================================================`);
    
    if (!productos || productos.length === 0) {
        console.log(" ⚠️  No hay productos disponibles en esta categoría.");
    } else {
        productos.forEach(({ id, nombre, categoria, precio }) => {
            console.log(` [ID: ${id}] ${nombre.padEnd(25)} | Cat: ${categoria.toUpperCase().padEnd(8)} | $${precio}`);
        });
    }
    console.log(`==============================================================`);
}

// Función para mostrar Promociones creadas con map()
function mostrarPromociones() {
    const promos = inventarioCocina.map(prod => ({
        ...prod,
        precioPromo: (prod.precio * 0.85).toFixed(2)
    }));

    console.log(`\n==============================================================`);
    console.log(`          💥 PROMOCIONES ESPECIALES (15% DE DESCUENTO) 💥`);
    console.log(`==============================================================`);
    promos.forEach(({ id, nombre, precio, precioPromo }) => {
        console.log(` [ID: ${id}] ${nombre.padEnd(23)} | Antes: $${precio} ➔ ¡HOY: $${precioPromo}!`);
    });
    console.log(`==============================================================`);
}

// Desglose del Ticket Final con Subtotal, IVA y Total
function mostrarResumenPedido() {
    console.log(`\n==============================================================`);
    console.log(`                  🧾 TICKET FINAL DE COMPRA 🧾`);
    console.log(`==============================================================`);
    
    listaDePedidos.forEach(({ nombreAComprar, costo }) => {
        console.log(` • ${nombreAComprar.padEnd(30)} .......... $${costo.toFixed(2)}`);
    });

    const subtotal = calcularSubtotal();
    const iva = calcularIVA();
    const total = calcularTotal();

    console.log(`--------------------------------------------------------------`);
    console.log(` Subtotal:   $${subtotal.toFixed(2)}`);
    console.log(` IVA (16%):  $${iva.toFixed(2)}`);
    console.log(` 💰 TOTAL:   $${total.toFixed(2)}`);
    console.log(`==============================================================`);
}

async function iniciarVenta() {
    console.log(`\n¡Bienvenido a Coffee Code II! Cargando el menú principal...\n`);
    
    let quieroSeguirComprando = "si";

    while (quieroSeguirComprando === "si") {
        // 1. SIEMPRE se muestra el menú visible de entrada
        mostrarMenuElegante(inventarioCocina, "MENÚ COMPLETO");

        // 2. Menú de opciones visible
        console.log(`\n¿Qué deseas hacer?`);
        console.log(` [1] Comprar directo (ingresar ID)`);
        console.log(` [2] Filtrar por Bebidas`);
        console.log(` [3] Filtrar por Postres`);
        console.log(` [4] Ver Productos Económicos (<= $45)`);
        console.log(` [5] Ver Productos Premium (> $45)`);
        console.log(` [6] Ver Promociones del Día (15% OFF)`);

        const seleccion = await rl.question('\nElige una opción (1-6): ');

        switch (seleccion.trim()) {
            case '2':
                mostrarMenuElegante(buscarBebidas(), "SOLO BEBIDAS");
                break;
            case '3':
                mostrarMenuElegante(buscarPostres(), "SOLO POSTRES");
                break;
            case '4':
                mostrarMenuElegante(buscarProductosBaratos(), "PRODUCTOS ECONÓMICOS");
                break;
            case '5':
                mostrarMenuElegante(buscarProductosCaros(), "PRODUCTOS PREMIUM");
                break;
            case '6':
                mostrarPromociones();
                break;
            case '1':
            default:
                // No filtra nada, se mantiene el menú visualizado
                break;
        }

        const entradaUsuario = await rl.question('\n👉 Ingresa el ID del producto que deseas ordenar: ');
        const idBuscado = parseInt(entradaUsuario);
        
        const productoElegido = inventarioCocina.find((item) => item.id === idBuscado);
        
        if (productoElegido) {
            const { nombre, precio } = productoElegido; 
            console.log(`\n 🍳 [Cocina]: Preparando tu ${nombre}...`);
            
            agregarPedido(nombre, precio);
            
            console.log(` ✅ Agregado exitosamente. Llevas ${listaDePedidos.length} producto(s) en tu cuenta.`);
        } else {
            console.log(`\n ❌ El ID "${entradaUsuario}" no corresponde a ningún producto del menú.`);
        }

        const respuesta = await rl.question('\n¿Deseas agregar otro producto a tu pedido? (si / no): ');
        quieroSeguirComprando = respuesta.toLowerCase().trim(); 
    }

    mostrarResumenPedido();
    console.log(`\n ¡Gracias por tu visita a Coffee Code II! Que disfrutes tu pedido. ☕✨\n`);
    
    rl.close();
}

iniciarVenta();