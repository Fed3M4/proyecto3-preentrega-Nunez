const nroReclamo = [0]

class Reclamos {
    constructor(sector, solicitante, fecha, descripcion) {
        this.IDReclamo = "";
        this.sector = sector;
        this.solicitante = solicitante;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.resuelto = false;
    }
    cerrar() {
        this.resuelto = true
    }
    timeStamp() {
        const dia = new Date();
        this.fecha = dia .getTime()
    }
    crearNroSeguimiento() {
        const generarID = () => {
            let numerito = nroReclamo[nroReclamo.length - 1] + 1;
            nroReclamo.push(numerito);
            this.IDReclamo = sector.charAt(0) + ultimoNroReclamo;
            console.log(this.IDReclamo)
        }
        switch (sector) {
            case 'Recargas':
                generarID();
                break;
            case  'SUBE':
                generarID();
                break;
            case 'Cobro de servicios':
                generarID();
                break;
            case 'Medios de pago':
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
}