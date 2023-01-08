const formulario = document.getElementById('form');

const nombre = document.getElementById('firstName');
const apellido = document.getElementById('lastName');

const sector = document.getElementById('sector');
const nroOperacion = document.getElementById('operation');
const descripcion = document.getElementById('descrip');

//const IDReclamo = document.getElementById('IDReclamo');
const nroReclamo = [0]
const IDReclamo = [];
const delSector = document.getElementById('delSector');
const solicitante = document.getElementById('solicitante');
const info = document.getElementById('info');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    obtenerReclamoNuevo();
})

const obtenerID = () => {
    let terminado = false;
    let ultimoNroReclamo = nroReclamo[nroReclamo.length - 1]

    do {
        const sectorSwitch = sector.value

        switch (sectorSwitch) {
            case 'Recargas':
                ultimoNroReclamo+=1;
                IDReclamo.push("R" + ultimoNroReclamo);
                console.log(IDReclamo)
                break;
            case  'SUBE':
                numeroReclamo+=1;
                IDReclamo = 'S' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoS);
                break;
            case 'Cobro de servicios':
                ultimoNroReclamo+=1;
                IDReclamo = 'CS' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoCS);
                break;
            case 'Medios de pago':
                ultimoNroReclamo+=1;
                IDReclamo = 'MP' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoMP);
                break;
            case 'Transferencias':
                ultimoNroReclamo+=1;
                IDReclamo = 'T' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoT);
                break;
            case 'Plataforma':
                ultimoNroReclamo+=1;
                IDReclamo = 'P' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoP);
                break;
            case 'App':
                ultimoNroReclamo+=1;
                IDReclamo = 'A' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoA);
                break;
            default:
                alert('No elegiste una opción válida')
                break;
        }

        terminado = confirm('¿Querés hacer otro reclamo?')
    } while (terminado);

}

const obtenerReclamoNuevo = () => {
    IDReclamo2 = IDReclamo[IDReclamo.length - 1]
    const reclamo = {
        IDReclamo: IDReclamo2,
        sector: sector.value,
        solicitante: nombre.value + " " + apellido.value,
        descripcion: descripcion.value
    }
    pintarReclamo(reclamo)

    guardarReclamoStorage(reclamo)
}

const pintarReclamo = (reclamo) => {
    IDReclamo.innerText = `${reclamo.IDReclamo}`;
    delSector.innerText = `${reclamo.sector}`;
    solicitante.innerText = `${reclamo.solicitante}`;
    info.innerText = `${reclamo.descripcion}`;
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