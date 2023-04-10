const Afip = require('@afipsdk/afip.js');

const afip = new Afip({ CUIT: 20182438414 });

afip.ElectronicBilling.getAliquotTypes().then(res => {
	console.log(res)
});

