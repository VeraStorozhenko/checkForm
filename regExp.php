<?php header('Content-type: text/html; charset=utf-8'); ?>
<html>
<head>
<link type="text/css" rel="stylesheet" href="style.css" media="all" />
<script src="check.js"></script>
</head>
<p>Join our team :)</p>
<body>	
	<div class="form_box">
		<form action='#' method="post" name='form' onsubmit='return validateForm();' >
			<table width="100%" cellspacing="0" cellpadding="4">
			<tr>
				<td align="right" width="100">Date</td>
				<td><input type="text" name="date" placeholder='YYYY-MM-DD' maxlength="50" size="20"/></br></td>
			</tr>
			
			<tr>
				<td align='right'>Amount</td>
				<td><input type="text" name="amount" placeholder='only numbers allowed'/></br></td>			
			</tr>

			<tr>
				<td align='right'>Tax</td>
				<td><input type="text"  name="tax" placeholder='only numbers allowed'/></br></td>
			</tr>
			
			<tr>
				<td align='right'>Total</td>
				<td><input type="text" name="total" placeholder='only numbers allowed'/></br></td>
			</tr>			
			
			<tr>
				<td align='right'>Note</td>
				<td><input type="text" name="note" placeholder='only letters allowed'/></br></td>
			</tr> 
			
			<tr>
				<td align='right'>Mail</td>
				<td><input type="text" name="mail" placeholder='write your email'/></br></td>
			</tr>
			
			<tr>
				<td align='right'>Parol</td>
				<td><input type="text" name="parol" placeholder='6symb+, 1 number and 1 upper'/></br></td>
			</tr>

			<tr>
				<td></td>
				<td ><input type="submit"  value="Отправить данные" class='submit'/>			
			</tr>
			
			</table>
		</form>
	</div>	

<?php

/*if(filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)){
	echo 'you enter right email';
} else echo 'your email is not correct';


if(preg_match($pattern, $subject, $matches)){
	echo $matches[0];
	echo 'you enter right email';
} else echo 'your email is not correct';


if(isset($_POST['parol'])){
	if(preg_match([0-9], $_POST['parol'])){
		echo 'e-mail right';
	}else echo 'e-mail not right';
}*/

?>
</body>
</html>