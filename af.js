const Afip = require('@afipsdk/afip.js');

const afip = new Afip({ 'CUIT': 20182438414 });

(async () => {
/**
 * Numero de factura
 **/
const numero_de_factura = 10;

/**
 * Numero del punto de venta
 **/
const punto_de_venta = 1;

/**
 * Tipo de comprobante
 **/
const tipo_de_comprobante = 11; // 11 = Factura C

/**
 * Informacion de la factura
 **/
const informacion = await afip.ElectronicBilling.getVoucherInfo(numero_de_factura, punto_de_venta, tipo_de_comprobante); 

if (!informacio){
console.log('La factura no existe');
}
else{
/**
 * Mostramos por pantalla la información de la factura
 **/
console.log(informacion);
}
})(); 
