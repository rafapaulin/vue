var	billsApp	=	new Vue({
	el: '#billsApp',
	data: {
		title:	'Contas à pagar',
		names:	[
			'Luz',
			'Água',
			'Telefone',
			'Internet',
			'Cartão de crédito',
			'Empréstimo',
			'Combustível',
		],
		bill: {
			name:		'',
			value:		'',
			date_due:	'',
			paid:		false
		},
		showForm: false,
		formType: 'insert',
		bills:	[
			{date_due: '10/01/2017', name: 'Luz', value: 50.50, paid: true},
			{date_due: '10/02/2017', name: 'Água', value: 250.00, paid: false},
			{date_due: '10/03/2017', name: 'Telefone', value: 150.40, paid: true},
			{date_due: '10/04/2017', name: 'Internet', value: 80.30, paid: false},
			{date_due: '10/05/2017', name: 'Cartão de crédito', value: 15000.00, paid: false},
			{date_due: '10/06/2017', name: 'Empréstimo', value: 540.20, paid: false},
			{date_due: '10/07/2017', name: 'Combustível', value: 506.00, paid: true},
		],
	},
	computed:	{
		toPay:	function(){
			var	count	=	0;
			for(var i = 0; i < this.bills.length; i++){
			 	if(!this.bills[i].paid)
			 		count++;
			}
			return count;
		},
	},
	methods: {
		addEditBill:	function(){
			if(this.formType == 'insert'){
				this.bill.id = this.bills.length + 1;
				this.bills.push(this.bill);
			}

			this.bill = {
				name:		'',
				value:		'',
				date_due:	'',
				paid:		false
			}
			this.showForm =  false;
		},
		newBill: function(){
			this.formType = 'insert';
			this.showForm =  true;
		},
		loadBill: function(bill){
			this.formType	=	'update';
			this.showForm	=	true;
			this.bill		=	bill;
		},
		payBill: function(bill){
			bill.paid	=	true;
		},
		openBill: function(bill){
			bill.paid	=	false;
		},
		removeBill: function(index){
			if(confirm('Tem certeza que deseja apagar?'))
				this.bills.splice(index, 1)
		},
	},
	filters: {
		currency:	function(val){
			return val.toLocaleString(
				'pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}
			);
		},
		paidBill:	function(val){
			if(val)
				return 'Paga';
			else
				return 'À Pagar';
		},
	},
});