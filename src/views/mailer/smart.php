<?php
if ($_POST) {
	// $name = $_POST['user_name'];
	$phone = $_POST['user_phone']; // то что есть в форме

	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'poiut098@mail.ru';                 // Наш логин
	$mail->Password = 'aqswdefr098';                           // Наш пароль от ящика
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom('poiut098@mail.ru', 'Васий Васин');   // От кого письмо (тот ящик с которого отправляете )
	$mail->addAddress('jannakooo@mail.ru');     // Add a recipient (кудв отправляется)
	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Новая заявка';
	$mail->Body    = '
			Пользователь оставил свои данные <br> 
			Имя: Неизвестно <br>
			Телефон:  ' . $phone . ' Перезвонить на этот номер';
	$mail->AltBody = 'Это альтернативный текст';

	// if(!$mail->send()) {
	// 	echo "Error";
	// } else {
	// 	// echo "Success";
	// 	header('Location: ../pages/thank-you.html');
	// }


	if ($mail->send()) {
		$answer = '1';
	} else {
		$answer = '0';
		/*echo 'Письмо не может быть отправлено. ';
	echo 'Ошибка: ' . $mail->ErrorInfo;*/
	}
	die($answer);
}



