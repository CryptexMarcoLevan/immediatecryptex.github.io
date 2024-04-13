<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $to = "coin.base@europe.com";
    $subject = "New Form Submission";
    $message = "First Name: $fname\nLast Name: $lname\nEmail: $email\nPhone: $phone";
    
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Form submission successful. Thank you!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
