<?php

/* https://api.telegram.org/bot1099625024:AAHseloJFQXe_9ImI7B6tNW59pAmdDo0DMk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "1099625024:AAHseloJFQXe_9ImI7B6tNW59pAmdDo0DMk";
$chat_id = "-412465603";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: pages/thank-you.html');
} else {
  echo "Error";
}
?>