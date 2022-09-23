let userList = [{name: 'JENNY', id: '1152192772', passworld: '=1152192772Jv=', userType: 'cliente'},{name: 'VANESSA', id: '71932158', passworld: 'vAnEsSA1991', userType: 'administrador'},{name: 'Leidy', id: '1152192599', passworld: 'leidyquinto', userType: 'cliente'},{name: 'JOHANA', id: '26328964', passworld: '2537893', userType: 'administrador'}];
let arrayBill = [{nameBill: 'COP5', amount: 0},{nameBill: 'COP10', amount: 0},{nameBill: 'COP20', amount:0},{nameBill: 'COP50', amount: 0},{nameBill: 'COP100', amount: 0}];

let tipoDeUsuario; 
let load;
let newLoad;
let balance=0;
let retiro =0;
let bill5 = 0;
let bill10 = 0;
let bill20 = 0;
let bill50= 0;
let bill100 = 0;
let cash;
let admin;
let user;
// let withdrawall;

let inicio = confirm('Bienvenido');

let login = (id, pass, userList)=>{
    const user = userList.find(elemento => (elemento.id === id && elemento.passworld===pass));    
    if(user){ 
        return user.userType;      
    } 
    else{
        alert('El usuario no existe');
        return null;               
    }            
};

const rechargeATM =()=>{
    let totalLoad = 0;
    let bills5= parseInt(prompt('Ingrese cantidad billetes 5.000 COP'));
    const bills10= parseInt(prompt('Ingrese cantidad billetes 10.000 COP'));
    const bills20= parseInt(prompt('Ingrese cantidad billetes 20.000 COP'));
    const bills50= parseInt(prompt('Ingrese cantidad billetes 50.000 COP'));
    const bills100= parseInt(prompt('Ingrese cantidad billetes 100.000 COP'));
    totalLoad = bills5*5000+bills10*10000+bills20*20000+bills50*50000+bills100*100000;
    const objBill = {
        bills5: bills5,
        bills10: bills10,
        bills20: bills20,
        bills50: bills50,
        bills100: bills100,
    };    
    console.log(`Cantidad de billetes cargados de 5.000 COP = ${bills5}\nCantidad de billetes cargados de 10.000 COP = ${bills10}\nCantidad de billetes cargados de 20.000 COP = ${bills20}\nCantidad de billetes cargados de 50.000 COP = ${bills50}\nCantidad de billetes cargados de 100.000 COP = ${bills100}\nTotal de dinero cargado = ${totalLoad}`);    
    return objBill;   
};

let creditATM =(billsList,credit)=>{
    let balance = 0;
    billsList.forEach(element => {
        if (element.nameBill === 'COP5') {
            element.amount += credit.bills5;
            balance += (5000*element.amount);
        } else if (element.nameBill === 'COP10') {
            element.amount += credit.bills10;
            balance += (10000*element.amount);
        } else if (element.nameBill === 'COP20') {
            element.amount += credit.bills20;
            balance += (20000*element.amount);
        } else if (element.nameBill === 'COP50') {
            element.amount += credit.bills50;
            balance += (50000*element.amount);
        } else {
            element.amount += credit.bills100;
            balance += (100000*element.amount);
        }
    });
    return{billsList,balance};
};

while(inicio){ 
    let userId = prompt('Documento');;
    let userPassword = prompt('Contraseña');;
    tipoDeUsuario = login(userId,userPassword,userList);          
    console.log(tipoDeUsuario);
    if(tipoDeUsuario==='administrador'){
        load = rechargeATM();
        admin =creditATM(arrayBill,load);
        cash = admin.billsList;
        balance = admin.balance;
        
        console.log(`Total billetes 5.000 COP = $${5000*load.bills5}\nTotal billetes 10.000 COP = $${10000*load.bills10}\nTotal billetes 20.000 COP = $${20000*load.bills20}\nTotal billetes 50.000 COP = $${50000*load.bills50}\nTotal billetes 100.000 COP = $${100000*load.bills100}\nTotal general = $${balance}`);   

    }
    else if(tipoDeUsuario==='cliente'){
        if(balance===0){
            console.log('Cajero en mantenimiento, vuelva pronto');
        }else{
            retiro=parseInt(prompt('Catidad a retirar'));
            if(retiro >=1000 && retiro <10000){
                retiro =5000
            }
            if(retiro >=10000 && retiro <100000){    
                retiro =Math.floor(retiro/10000)*10000;
            }
            else if(retiro >=100000 && retiro <1000000){    
                retiro =Math.floor(retiro/10000)*10000;
            }
            else if(retiro >=1000000){    
                retiro =Math.floor(retiro/100000)*100000;
            }
            else if (retiro<5000){
                alert('El retiro minimo es $5000 COP');
            };
            console.log(retiro);
            console.log(`Cantidad disponible para retiro = $${balance}COP\n${cash[0].amount} billete de 5.000COP\n${cash[1].amount} billete de 10.000COP\n${cash[2].amount} billete de 20.000COP\n${cash[3].amount} billete de 50.000COP\n${cash[4].amount} billete de 100.000COP`);
            newLoad = cash.reverse();
            const withdrawall = retiro;
            while(retiro>0){
                newLoad.forEach(elemento=>{
                    if(retiro>=100000&&(elemento.amount>bill100)){
                        bill100++;
                        retiro-=100000;
                        // elemento.amount--;
                        return retiro;            
                    }
                    else if(retiro>=50000&&(elemento.amount>bill50)){
                        bill50++;
                        retiro-=50000;
                        // elemento.amount--;
                        return retiro;
                    }
                    else if(retiro>=20000&&(elemento.amount>bill20)){
                        bill20++;
                        retiro-=20000;
                        // elemento.amount--;
                        return retiro;
                    }
                    else if(retiro>=10000&&(elemento.amount>bill10)){
                        bill10++;
                        retiro-=10000;
                        // elemento.amount--;
                        return retiro;
                    }
                    else if(retiro>=5000) {
                        bill5++;
                        retiro-=5000;
                        // elemento.amount--;
                        return retiro;            
                    }
                });
                newLoad = [{nameBill: 'COP5', amount: bill5}, {nameBill: 'COP10', amount: bill10}, {nameBill: 'COP20', amount: bill20}, {nameBill: 'COP50', amount: bill50}, {nameBill: 'COP100', amount: bill100}];                   
            };
            console.log(`Se entregaron:\n${bill5} billete de 5.000COP\n${bill10} billete de 10.000COP\n${bill20} billete de 20.000COP\n${bill50} billete de 50.000COP\n${bill100} billete de 100.000COP`);
            // console.log(newLoad);
            user = {
                bills5: newLoad[0].amount,
                bills10: newLoad[1].amount,
                bills20: newLoad[2].amount,
                bills50: newLoad[3].amount,
                bills100: newLoad[4].amount,
            };
            for(const property in user) {
                user[property] = user[property] * -1;
            };            
            let respuesta = creditATM(cash,user);           
            console.log(`Total billetes 5.000 COP = $${5000*respuesta.billsList[4].amount}\nTotal billetes 10.000 COP = $${10000*respuesta.billsList[3].amount}\nTotal billetes 20.000 COP = $${20000*respuesta.billsList[2].amount}\nTotal billetes 50.000 COP = $${50000*respuesta.billsList[1].amount}\nTotal billetes 100.000 COP = $${100000*respuesta.billsList[0].amount}\nTotal general = $${respuesta.balance}`)                      
        };        
    }
               
    inicio = confirm('¿Desea realizar otra operacion?');    
    
};
alert('Hasta pronto!');

   

