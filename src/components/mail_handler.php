<?php

echo '<pre>';
print_r($_POST);

echo'/pre>';

$errors = [];
$errorMessage = '';
if(!empty($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if(empty($name)){
        $errors[] = 'Name is empty';
    }
    if(empty($email)){
        $errors[] = 'Email is empty';
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errors[] = 'Email is invalid';
    }
    if(empty($message)){
        $errors[] = 'Name is empty';
    }

    if (empty($errors)){
        $toEmail = 'chris@biomedtrix.com';
        $emailSubject = 'From Osteofit Contact Form: {$subject}';
        $headers = ['From' => $email, 'Replty-To' => $email, 'Content-type' => 'text/html; charset = iso-8859-1'];

        $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);

        if(mail($toEmail, $emailSubject, $body, $headers)){
            header('Location: thank-you.html');
        } else{
            $errorMessage = "Oops, something went wrong. Please try again later";
        }
    }
}

?>