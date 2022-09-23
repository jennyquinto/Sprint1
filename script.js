//1. Listado de usuarios

const users = [
    {
        id: 1,
        name: 'JENNY',
        doc: '1152192772',
        pass: '=1152192772Jv=',
        type: 'cliente'
    },
    {
        id: 2,
        name: 'VANESSA',
        doc: '71932158',
        pass: 'vAnEsSA1991',
        type: 'administrador'
    },
    {
        id: 3,
        name: 'Leidy',
        doc: '1152192599',
        pass: 'leidyquinto',
        type: 'cliente'
    },
    {
        id: 4,
        name: 'JOHANA',
        doc: '26328964',
        pass: '2537893',
        type: 'admin'
    } 
];

const money = [

    {
        name: '100.000 COP',
        cantidad: 0,
        valor: 0
    },
    {
        name: '50.000 COP',
        cantidad: 0,
        valor: 0
    },
    {
        name: '20.000 COP',
        cantidad: 0,
        valor: 0
    },
    {
        name: '10.000 COP',
        cantidad: 0,
        valor: 0
    },
    {
        name: '5.000 COP',
        cantidad: 0,
        valor: 0
    }
];

let total = 0
//Declaración de la función que nos permite asignar y mostrar la cantidad y valor de la denominación del billete entregado al cliente
const cantidadEntregada = (arraysBilletes, denominacion, valorBillete) => {
    const retiroBill = arraysBilletes.find(din => din.name === denominacion);
    const cantidadActual = retiroBill.cantidad + 1;
    retiroBill.cantidad = cantidadActual;
    retiroBill.valor = cantidadActual * valorBillete;
    console.log(`Cantidad de billetes de ${denominacion} entregados: ${retiroBill.cantidad}, total = $${retiroBill.valor.toLocaleString()}`)
}


//Declaración de la función cargar dinero
const cargarDinero = () => {
    const cincomil = prompt('Ingrese la cantidad de billetes de 5.000COP');
    const diezmil = prompt('Ingrese la cantidad de billetes de 10.000COP');
    const veintemil = prompt('Ingrese la cantidad de billetes de 20.000COP');
    const cincuentamil = prompt('Ingrese la cantidad de billetes de 50.000COP');
    const cienmil = prompt('Ingrese la cantidad de billetes de 100.000COP');


    //Llamamos a las propiedades cantidad y valor para ingresar los datos cargados por el usuario
    money.forEach(bill => {
        if (bill.name === '5.000 COP') {
            const cantidadActual = bill.cantidad + parseInt(cincomil);
            bill.cantidad = cantidadActual;
            bill.valor = cantidadActual * 5000;
            total = total + bill.valor;
            console.log(bill)
        }
        if (bill.name === '10.000 COP') {
            bill.cantidad = bill.cantidad + parseInt(diezmil);
            bill.valor = bill.cantidad * 10000;
            total = total + bill.valor;
            console.log(bill)
        }
        if (bill.name === '20.000 COP') {
            bill.cantidad = bill.cantidad + parseInt(veintemil);
            bill.valor = bill.cantidad * 20000;
            total = total + bill.valor;
            console.log(bill)
        }
        if (bill.name === '50.000 COP') {
            bill.cantidad = bill.cantidad + parseInt(cincuentamil);
            bill.valor = bill.cantidad * 50000;
            total = total + bill.valor;
            console.log(bill)
        }
        if (bill.name === '100.000 COP') {
            bill.cantidad = bill.cantidad + parseInt(cienmil);
            bill.valor = bill.cantidad * 100000;
            total = total + bill.valor;
            console.log(bill)
        }

    });
    console.log(money);
    console.log('El total del dinero en el cajero es: $', total.toLocaleString()); //toLocaleString() nos permite colocarle los puntos de mil a valores numéricos
}



//Declaración de la función retirar dinero
const retirarDinero = () => {
    if (total === 0) {
        console.log('Cajero en mantenimiento vuelva pronto');
        return
    }
    let retiro = prompt('Ingrese la cantidad que desea retirar');

    const retiroBilletes = [
        {
            name: '100.000 COP',
            cantidad: 0,
            valor: 0
        },
        {
            name: '50.000 COP',
            cantidad: 0,
            valor: 0
        },
        {
            name: '20.000 COP',
            cantidad: 0,
            valor: 0
        },
        {
            name: '10.000 COP',
            cantidad: 0,
            valor: 0
        },
        {
            name: '5.000 COP',
            cantidad: 0,
            valor: 0
        }
    ];

    let totalEntregado = 0;
    let transaccionExitosa;


    while ((total > 0) && (retiro >= 5000)) {
        transaccionExitosa = false;

        money.forEach(bill => {
            if ((retiro >= 100000) && (bill.name === '100.000 COP') && (bill.cantidad > 0)) {
                const cantidadActual = bill.cantidad - 1;

                retiro = retiro - 100000;
                bill.cantidad = cantidadActual;
                bill.valor = cantidadActual * 100000;
                total = total - 100000;                

                cantidadEntregada(retiroBilletes, bill.name, 100000);
                console.log(` Cantidad de Billetes de ${bill.name} que quedan el el cajero: ${bill.cantidad}`);
                totalEntregado = totalEntregado + 100000;
                transaccionExitosa = true;

            }
            if ((retiro >= 50000) && (bill.name === '50.000 COP') && (bill.cantidad > 0)) {
                const cantidadActual = bill.cantidad - 1;

                retiro = retiro - 50000;
                bill.cantidad = cantidadActual;
                bill.valor = cantidadActual * 50000;
                total = total - 50000;
               
                cantidadEntregada(retiroBilletes, bill.name, 50000);
                console.log(` Cantidad de Billetes de ${bill.name} que quedan el el cajero: ${bill.cantidad}`);
                totalEntregado = totalEntregado + 50000;
                transaccionExitosa = true;
            }
            if ((retiro >= 20000) && (bill.name === '20.000 COP') && (bill.cantidad > 0)) {
                const cantidadActual = bill.cantidad - 1;

                retiro = retiro - 20000;
                bill.cantidad = cantidadActual;
                bill.valor = cantidadActual * 20000;
                total = total - 20000;        

                cantidadEntregada(retiroBilletes, bill.name, 20000);
                console.log(` Cantidad de Billetes de ${bill.name} que quedan el el cajero: ${bill.cantidad}`);
                totalEntregado = totalEntregado + 20000;
                transaccionExitosa = true;
            }
            if ((retiro >= 10000) && (bill.name === '10.000 COP') && (bill.cantidad > 0)) {
                const cantidadActual = bill.cantidad - 1;

                retiro = retiro - 10000;
                bill.cantidad = cantidadActual;
                bill.valor = cantidadActual * 10000;
                total = total - 10000;  

                cantidadEntregada(retiroBilletes, bill.name, 10000);
                console.log(` Cantidad de Billetes de ${bill.name} que quedan el el cajero: ${bill.cantidad}`);
                totalEntregado = totalEntregado + 10000;
                transaccionExitosa = true;
            }
            if ((retiro >= 5000) && (bill.name === '5.000 COP') && (bill.cantidad > 0)) {
                const cantidadActual = bill.cantidad - 1;

                retiro = retiro - 5000;
                bill.cantidad = cantidadActual;
                bill.valor = cantidadActual * 5000;
                total = total - 5000;
                
                cantidadEntregada(retiroBilletes, bill.name, 5000);
                console.log(` Cantidad de Billetes de ${bill.name} que quedan el el cajero: ${bill.cantidad}`);
                totalEntregado = totalEntregado + 5000;
                transaccionExitosa = true;
            }
        })
        if (transaccionExitosa === false) {
            break;
        }
    }

    if (retiro > 0) {
        console.log('El cajero no puede entregar la suma de: $', retiro.toLocaleString());
    }

    console.log('El cajero entregó: $', totalEntregado.toLocaleString());
    if (total > 0) {
        console.log(retiroBilletes);
    }
    console.log('El total de dinero restante en el cajero es de: $', total.toLocaleString());
    if (total > 0) {
        console.log(money);
    }
}

//2. Un bucle que nos permita ingresar documento y contraseña y validar si existe el usuarios
const procesar = () => {
    while (true) {
        const identificacionUsuario = prompt('Por favor ingrese su documento');
        const passwordUsuario = prompt('Por favor ingrese su contraseña');
    
        //Indentificar si existe un usuario con ese documento
        const user = users.find(u => u.doc === identificacionUsuario);
    
        if (!user) {
            console.log('El usuario no existe');
            continue;
        }
    
        if (passwordUsuario === user.pass) {
            console.log('Bienvenidx ', user.name);
            if (user.type === 'admin') {
                cargarDinero();
            } else {
                retirarDinero();
            }
        } else {
            console.log('Por favor verifique la contraseña ingresada');
            break;
        }    
    }
}

procesar();






