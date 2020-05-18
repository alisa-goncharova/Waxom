<?php
// <!-- Задание переменных --> 
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// <!-- Преобразует все символы -->
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$subject = htmlspecialchars($subject);
$message = htmlspecialchars($message);

// <!-- Декорирует url -->
$name = urldecode($name);
$email = urldecode($email);
$subject = urldecode($subject);
$message = urldecode($message);

// <!-- Удаление пробелов с начала строки -->
$name = trim($name);
$email = trim($email);
$subject = trim($subject);
$message = trim($message);

// <!-- Проверка -->
echo $name;
echo "<br>";
echo $email;

// Отправка на почту
mail("alice.goncharova2018@yandex.by", "Заявка с Waxom", "Имя:".$name, "Email:" .$email, "Subject:" .$subject, "Messages:" .$message);

// Проверка что отправлено
if(mail("alice.goncharova2018@yandex.by", "Заявка с Waxom", "Имя:".$name, "Email:" .$email, "Subject:" .$subject, "Messages:" .$message), "From: example2.email" )){
	echo "Сообщение успешно отправлено";
} 
else{
	echo "При отправке сообщения возникла ошибка";
}
?>
