let accion = 'saludar';

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break;
    case 'guardar':
        console.log('Accion de Guardar');
        break;
    default:
        console.log('Accion no reconocida : ', accion);
        break;
}