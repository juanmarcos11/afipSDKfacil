const Afip = require('@afipsdk/afip.js');

const afip = new Afip({ CUIT: 20182438414 });

afip.ElectronicBilling.getVoucherInfo(1,1,1).then(res => {
	console.log(res)
	console.log(res.Observaciones)
});

