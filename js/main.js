const formulario = document.getElementById('form');

const nombre = document.getElementById('firstName');
const apellido = document.getElementById('lastName');

const sector = document.getElementById('sector');
const nroOperacion = document.getElementById('operation');
const descripcion = document.getElementById('descrip');

//const IDReclamo = document.getElementById('IDReclamo');
const nroReclamo = [0]
let IDReclamo = "";
const delSector = document.getElementById('delSector');
const solicitante = document.getElementById('solicitante');
const info = document.getElementById('info');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    crearCaso();
})

function crearCaso() {
    crearNroSeguimiento(sector)
    const reclamo =  new Reclamos(IDReclamo);
    //obtenerReclamoNuevo(reclamo)

    pintarReclamo(reclamo);

    guardarReclamoStorage(reclamo);

    //Pintar la cantidad de reclamos que hay 
    const cantR = nroReclamo[nroReclamo.length - 1];
    mostrarQReclamos(cantR);
}

const crearNroSeguimiento = () => {
    const section = sector.value
    const generarID = (section) => {
        let numerito = nroReclamo[nroReclamo.length - 1] + 1;
        nroReclamo.push(numerito);
        return IDReclamo = sector.value.charAt(0) + numerito;
    }
    switch (section) {
        case 'Recargas':
            generarID();
            break;
        case  'SUBE':
            generarID();
            break;
        case 'Cobro de servicios':
            generarID();
            break;
        case 'Medios de pagos':
            generarID();
            alert('Tu número de reclamo es: ' + reclamoMP);
            break;
        case 'Transferencias':
            generarID();
            break;
        case 'Plataforma':
            generarID();
            break;
        case 'App':
            generarID();
            break;
        default:
            alert('No elegiste una opción válida')
            break;
    }
}
const pintarReclamo = (reclamo) => {
    IDpintado.innerText = `${reclamo.IDReclamo}`;
    delSector.innerText = `${reclamo.sector}`;
    solicitante.innerText = `${reclamo.solicitante}`;
    info.innerText = `${reclamo.descripcion}`;
}

const mostrarQReclamos = (cantR) => {
    QReclamos.innerText = `${cantR}`
}

const guardarReclamoStorage = (reclamo) => {
    localStorage.setItem('reclamo', JSON.stringify(reclamo));
}

const obtenerReclamoStorage = () => {
    const reclamoStorage = JSON.parse(localStorage.getItem('reclamo'))
    return reclamoStorage;
}


const obtenerReclamo = () => {
    if (localStorage.getItem('reclamo')) {
        const prestamoStorage = obtenerReclamoStorage();
        pintarReclamo(prestamoStorage);
    }
}

obtenerReclamo();