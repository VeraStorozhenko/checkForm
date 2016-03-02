function validateForm() {
	var date 	= document.forms['form']['date'].value;	
	var amount 	= document.forms['form']['amount'].value;
	var tax 	= document.forms['form']['tax'].value;
	var total  	= document.forms['form']['total'].value;	
	var note 	= document.forms['form']['note'].value;
	var parol 	= document.forms['form']['parol'].value;
	var mail 	= document.forms['form']['mail'].value;

	var date_pattern	= /(19|20)\d\d-(0\d|1[012])-(0[1-9]|1\d|2\d)$/;
	var amount_pattern 	= /^\d+$/;
	var tax_pattern 	= /^\d+$/;
	var total_pattern 	= /^\d+$/;
	var note_pattern 	= /[a-z]+/i;
	var parol_pattern	= /^[A-Za-z0-9]{6,}/;
	var mail_pattern	= /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;	//Создание регулярного выражения с помощью литерала. Предварительно компилируется	

	if(date.search(date_pattern) == -1){
		document.forms['form']['date'].style.border = '1px solid red';
		alert('Fill field');
		return false;
	}else document.forms['form']['date'].style.border = '1px solid black';
	
	if(amount.search(amount_pattern) == -1){
		document.forms['form']['amount'].style.border = '1px solid red';
		alert('Fill field');
		return false;
	}else document.forms['form']['amount'].style.border = '1px solid black';

	if(tax.search(tax_pattern) == -1){
		document.forms['form']['tax'].style.border = '1px solid red';
		alert('Fill field');
		return false;
	}else document.forms['form']['tax'].style.border = '1px solid black';

	if(total.search(total_pattern) == -1){
		document.forms['form']['total'].style.border = '1px solid red';
		alert('Fill field');
		return false;
	}else document.forms['form']['total'].style.border = '1px solid black';

	if(note.search(note_pattern) == -1){
		document.forms['form']['note'].style.border = '1px solid red';
		alert('Fill field');
		return false;
	}else document.forms['form']['note'].style.border = '1px solid black';

	if(parol.search(parol_pattern) == -1){
		document.forms['form']['parol'].style.border = '1px solid red';
		alert('Fill field');
		return false;
	}else document.forms['form']['parol'].style.border = '1px solid black';

	if(mail.search(mail_pattern) !== 0){
		document.forms['form']['mail'].style.border = '1px solid red';
		alert ('verify email');
		return false;
	}else document.forms['form']['mail'].style.border = '1px solid black';
}