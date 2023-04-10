const Afip = require('@afipsdk/afip.js');
const afip = new Afip({ 'CUIT': 20182438414 });

(async () => {
/**
 * Numero del punto de venta
 **/
const punto_de_venta = 1;

/**
 * Tipo de comprobante
 **/
const tipo_de_comprobante = 11; // 11 = Factura C

/**
 * Número de la ultima Factura C
 **/
const last_voucher = await afip.ElectronicBilling.getLastVoucher(punto_de_venta, tipo_de_comprobante);

/**
 * Mostramos por pantalla el número de la ultima Factura C
 **/
console.log(last_voucher);
})();

