<?php
header("Content-Type: application/json; charset=UTF-8");
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST['name']) && (isset($_POST['email']))) {
    $to = "office@infinity-digital.rs";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $body = $_POST["message"];
    $subject = "Infinity Digital - Contacted from: " . $name . " (" . $email . ")\r\n";
    
    $mail = new PHPMailer(true);
    try {
        $mail->CharSet = 'UTF-8';
		$mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = "mail.infinity-digital.rs";
        $mail->SMTPAuth = true;
        $mail->Username = "office@infinity-digital.rs";
        $mail->Password = "Kr3C6U7HM9bQ";
        $mail->Port = '587';
        $mail->SMTPSecure = '';

        $mail->setFrom($email, $name);
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();

        http_response_code(200);
        echo json_encode(true);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode($e);
    }
}
?>