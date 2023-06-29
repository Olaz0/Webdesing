<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['imie'];
    $email = $_POST['email'];
    $message = $_POST['wiadomosc'];

    // Adres e-mail, na który ma zostać wysłana wiadomość
    $to = 'okostariev@edu.cdv.pl';

    // Temat wiadomości
    $subject = 'Nowa wiadomość ze strony portfolio';

    // Treść wiadomości
    $email_content = "Imię: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Wiadomość:\n$message";

    // Nagłówki wiadomości
    $headers = "From: $name <$email>";

    // Wyślij wiadomość e-mail
    if (mail($to, $subject, $email_content, $headers)) {
        echo 'Wiadomość została wysłana';
    } else {
        echo 'Wystąpił błąd podczas wysyłania wiadomości';
    }
}
?>
