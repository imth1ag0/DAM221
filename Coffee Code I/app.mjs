// app.mjs
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { inventarioCocina } from './cocina.mjs';
import { agregarPedido, listaDePedidos, totalAcumulado } from './caja.mjs';

const rl = readline.createInterface({ input, output });

function mostrarMenu() {
    console.log(`\n========================= MENU DEL DIA ====================`);
    inventarioCocina.forEach((producto) => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    });
    console.log(`==============================================================`);
}

function mostrarResumenPedido() {
    console.log(`\n========================= TU TICKET ========================`);
    
    listaDePedidos.forEach((item) => {
        console.log(`- ${item.nombreAComprar}: $${item.costo}`);
    });

    console.log(`\nEl total a pagar es: $${totalAcumulado}`);
    console.log(`==========================================================`);
}

async function iniciarVenta() {
    let quieroSeguirComprando = "si";

    while (quieroSeguirComprando === "si") {
        mostrarMenu();

        const entradaUsuario = await rl.question('\n¿qué te gustaría ordenar?: ');
        const idBuscado = parseInt(entradaUsuario);
        
        const productoElegido = inventarioCocina.find((item) => item.id === idBuscado);
        
        if (productoElegido) {
            const { nombre, precio } = productoElegido; 
            console.log(`\nPreparando tu ${nombre}...`);
            
            // Función proveniente de caja.mjs
            agregarPedido(nombre, precio);
            
            console.log(`Agregado a tu cuenta. Llevas ${listaDePedidos.length} artículo(s).`);
        } else {
            console.log(`\nEl producto ${entradaUsuario} no lo tenemos.`);
        }

        const respuesta = await rl.question('\n¿Quieres ordenar algo más? (si / no): ');
        quieroSeguirComprando = respuesta.toLowerCase().trim(); 
    }

    mostrarResumenPedido();
    console.log(`\nGracias por tu compra`);
    
    rl.close();
}

iniciarVenta();